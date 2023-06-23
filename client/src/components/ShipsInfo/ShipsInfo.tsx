import { FC, useState, useEffect } from 'react';
import ShipPannel from './components/ShipPannel/ShipPannel';
import { TD, Table } from './ShipsInfo.styles';
import { Chart } from '../../models/GamingShip';
import { ShipsInfoProps } from './ShipsInfo.interface';
import { warningToast } from '../../utils/helpers/warningToast';

const ShipsInfo: FC<ShipsInfoProps> = ({ board, setBoard, shipListener }) => {
	const [currentShip, setCurrentShip] = useState(shipListener.current);

	useEffect(() => {
		if (shipListener.current !== currentShip) {
			setCurrentShip(shipListener.current);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [shipListener.current]);

	const updateShip = (update: () => boolean) => () => {
		const shouldUpdate = update();

		if (shouldUpdate) {
			setCurrentShip(shipListener.current);
		} else {
			alert('ship is not finished');
		}
	};

	const updateBoard = () => {
		const newBoard = board.getCopyBoard();
		setBoard(newBoard);
	};

	const removeShip = (getLastShip: () => Chart[]) => () => {
		const lastShip = getLastShip();

		if (lastShip.length === 0) {
			warningToast('Nothing to delete');
			return;
		}

		board.removeShip(lastShip);

		updateBoard();
	};

	return (
		<Table>
			<thead>
				<tr>
					<TD>Ship's length</TD>
					<TD>Done</TD>
					<TD>Select</TD>
					<TD>Delete</TD>
				</tr>
			</thead>
			<tbody>
				{shipListener.allShips().map((shipsInfo, i) => (
					<ShipPannel
						key={i}
						current={currentShip === shipsInfo.ship}
						ship={shipsInfo.ship}
						update={updateShip(shipsInfo.update)}
						removeShip={removeShip(shipsInfo.ship.removeLast)}
					/>
				))}
			</tbody>
		</Table>
	);
};

export default ShipsInfo;
