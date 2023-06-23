import { FC } from 'react';
import { CellProps } from './Cell.interface';
import { CellWrapper } from './Cell.styles';

const CellComponent: FC<CellProps> = ({ cell, addMard }) => {
	return (
		<CellWrapper
			data-testid={`${cell.x}-${cell.y}`}
			$color={cell?.mark?.color || 'inherit'}
			onClick={() => addMard(cell.x, cell.y)}
		>
			{cell?.mark?.name === 'miss' ? 'O' : cell?.mark?.logo}
		</CellWrapper>
	);
};

export default CellComponent;
