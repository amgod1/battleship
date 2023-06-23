import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Board } from '../../models/Board.model';
import BoardComponent from '../../components/Board/BoardComponent';
import Actions from '../../components/Actions/Actions';
import {
	GameWrapper,
	BoardsWrapper,
	Nickname,
	PlayerInfo,
	CopyButton,
} from './game.styles';
import ShipsInfo from '../../components/ShipsInfo/ShipsInfo';
import { warningToast } from '../../utils/helpers/warningToast';

const wss = new WebSocket('ws://localhost:4000');

const Game = () => {
	const [myBoard, setMyBoard] = useState<Board>(new Board());
	const [enemyBoard, setEnemyBoard] = useState<Board>(new Board());
	const [enemyName, setEnemyName] = useState<string>('Unknown enemy');
	const [shipsReady, setShipsReady] = useState<boolean>(false);
	const [canShoot, setCanShoot] = useState<boolean>(false);

	const { gameId } = useParams();

	const navigate = useNavigate();

	const copyGameId = () => {
		navigator.clipboard.writeText(gameId || '');
	};

	wss.onmessage = response => {
		const { type, payload } = JSON.parse(response.data);
		const { username, x, y, canStart, rivalName, success } = payload;

		switch (type) {
			case 'connectToPlay': {
				if (!success) {
					warningToast('Error! There are already two players in the game.');
					navigate('/');
				} else {
					rivalName && setEnemyName(rivalName);
				}
				break;
			}
			case 'readyToPlay': {
				if (payload.username === localStorage.nickname && canStart) {
					setCanShoot(true);
				}
				break;
			}
			case 'afterShootByMe': {
				if (username !== localStorage.nickname) {
					const isPerfectHit = myBoard.cells[y][x].mark?.name === 'ship';

					changeBoardAfterShoot(myBoard, setMyBoard, x, y, isPerfectHit);

					wss.send(
						JSON.stringify({
							event: 'checkShoot',
							payload: { ...payload, isPerfectHit },
						})
					);

					if (!isPerfectHit) {
						setCanShoot(true);
					}
				}
				break;
			}
			case 'isPerfectHit': {
				if (username === localStorage.nickname) {
					changeBoardAfterShoot(
						enemyBoard,
						setEnemyBoard,
						x,
						y,
						payload.isPerfectHit
					);

					payload.isPerfectHit ? setCanShoot(true) : setCanShoot(false);
				}
				break;
			}
			default: {
				break;
			}
		}
	};

	function changeBoardAfterShoot(
		board: Board,
		setBoard: React.Dispatch<React.SetStateAction<Board>>,
		x: number,
		y: number,
		isPerfectHit: boolean
	) {
		if (isPerfectHit) {
			board.addDamage(x, y);
			board.shipManager.removeCell();
		} else {
			board.addMiss(x, y);
		}

		const newBoard = board.getCopyBoard();
		setBoard(newBoard);
	}

	function ready() {
		wss.send(
			JSON.stringify({
				event: 'ready',
				payload: { username: localStorage.nickname, gameId },
			})
		);

		setShipsReady(true);
	}

	function shoot(x: number, y: number) {
		wss.send(
			JSON.stringify({
				event: 'shoot',
				payload: { username: localStorage.nickname, x, y, gameId },
			})
		);
	}

	useEffect(() => {
		wss.send(
			JSON.stringify({
				event: 'connect',
				payload: { username: localStorage.nickname, gameId },
			})
		);
	}, [gameId]);

	return (
		<GameWrapper>
			<h2>Welcome</h2>
			<CopyButton title="Copy" onClick={copyGameId}>
				Game id: {gameId}
			</CopyButton>
			<BoardsWrapper>
				<PlayerInfo>
					<Nickname>{localStorage.nickname}</Nickname>
					<BoardComponent
						board={myBoard}
						setBoard={setMyBoard}
						shipsReady={shipsReady}
						isMyBoard={true}
						canShoot={false}
					/>
				</PlayerInfo>
				<PlayerInfo>
					<Nickname>{enemyName}</Nickname>
					<BoardComponent
						board={enemyBoard}
						setBoard={setEnemyBoard}
						shipsReady={shipsReady}
						isMyBoard={false}
						canShoot={canShoot}
						shoot={shoot}
					/>
				</PlayerInfo>
			</BoardsWrapper>
			{!shipsReady && (
				<ShipsInfo
					board={myBoard}
					setBoard={setMyBoard}
					shipListener={myBoard.shipListener}
				/>
			)}
			{myBoard.shipListener.isAllShipsReady() && (
				<Actions ready={ready} canShoot={canShoot} shipsReady={shipsReady} />
			)}
		</GameWrapper>
	);
};

export default Game;
