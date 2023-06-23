import { FC } from 'react';
import { ActionsProps } from './Actions.interface';
import { ReadyButton, ActionsInfo } from './Actions.styles';

const Actions: FC<ActionsProps> = ({ ready, shipsReady, canShoot }) => {
	if (!shipsReady) {
		return (
			<ReadyButton className="btn-ready" onClick={ready}>
				Ready
			</ReadyButton>
		);
	}

	return (
		<ActionsInfo $canShoot={canShoot}>
			{canShoot ? 'Your turn' : "Enemy's turn"}
		</ActionsInfo>
	);
};

export default Actions;
