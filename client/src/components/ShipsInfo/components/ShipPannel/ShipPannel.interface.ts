import { GamingShip } from "../../../../models/GamingShip";

export interface ShipPannelProps {
	current: boolean;
	ship: GamingShip;
	update: () => void;
	removeShip: () => void;
}
