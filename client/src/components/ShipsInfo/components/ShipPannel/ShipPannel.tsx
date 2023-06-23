import { FC } from 'react';
import { Button, TD } from '../../ShipsInfo.styles';
import { ShipPannelProps } from './ShipPannel.interface';

const ShipPannel: FC<ShipPannelProps> = ({
	current,
	ship,
	update,
	removeShip,
}) => {
	return (
		<tr>
			<TD $current={current}>{ship.length}</TD>
			<TD>
				{Math.floor(ship.done / ship.length)} / {ship.items}
			</TD>
			<TD>
				<Button onClick={update}>select</Button>
			</TD>
			<TD>
				<Button onClick={removeShip}>delete</Button>
			</TD>
		</tr>
	);
};

export default ShipPannel;
