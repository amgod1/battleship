import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createGameId } from '../../utils/helpers/createGameId';
import {
	Input,
	InputWrapper,
	LoginForm,
	RadioButton,
	RadioContainer,
	SubmitButton,
} from './login.styles';
import { warningToast } from '../../utils/helpers/warningToast';

const Login = () => {
	const [gameId, setGameId] = useState<string>('');
	const [nickname, setNickname] = useState<string>(localStorage.nickname || '');
	const [invitationGame, setInvitationGame] = useState<boolean>(false);

	const navigate = useNavigate();

	const startPlay = (event: React.SyntheticEvent) => {
		event.preventDefault();

		if (!nickname) {
			warningToast('Nickname is missing!');
			return;
		}

		localStorage.nickname = nickname;

		const gameIdToNavigate = gameId || createGameId();
		navigate(`/game/${gameIdToNavigate}`);
	};

	const handleNickname = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => setNickname(event.target.value);

	const handleInvitationGame = () => setInvitationGame(!invitationGame);

	const handleGameId = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => setGameId(event.target.value);

	return (
		<LoginForm onSubmit={startPlay}>
			<h2>Battleship Login:</h2>
			<InputWrapper>
				<Input
					type="text"
					value={nickname}
					onChange={handleNickname}
					placeholder="Enter nickname"
				/>
			</InputWrapper>
			<RadioContainer>
				<label htmlFor="new_game">
					<RadioButton
						id="new_game"
						type="radio"
						checked={!invitationGame}
						onChange={handleInvitationGame}
					/>
					New game
				</label>
				<label htmlFor="in_game">
					<RadioButton
						id="in_game"
						type="radio"
						checked={invitationGame}
						onChange={handleInvitationGame}
					/>
					Connect by ID
				</label>
			</RadioContainer>
			{invitationGame && (
				<InputWrapper>
					<Input
						type="text"
						value={gameId}
						onChange={handleGameId}
						placeholder="Enter game ID to connect"
					/>
				</InputWrapper>
			)}
			<SubmitButton type="submit">
				{gameId.length ? 'Connect' : 'Start new game'}
			</SubmitButton>
		</LoginForm>
	);
};

export default Login;
