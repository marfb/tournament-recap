import React from 'react';
import ContentLoader from 'react-content-loader';
import {getColor} from 'theme/utils';

const CardsGrid = (props) => {
	// Hardcoded values
	const rows = 2;
	const columns = 5;
	const coverHeight = 350;
	const coverWidth = 220;
	const padding = 25;
	const speed = 2;

	const coverHeightWithPadding = coverHeight + padding;
	const coverWidthWithPadding = coverWidth + padding;
	const initial = 35;
	const covers = Array(columns * rows).fill(1);

	return (
		<ContentLoader
			speed={speed}
			width={columns * coverWidthWithPadding}
			height={rows * coverHeightWithPadding}
			backgroundColor={getColor('primary', 'main50')}
			foregroundColor={getColor('primary', 'main100')}
			{...props}>
			{covers.map((g, i) => {
				const vy = Math.floor(i / columns) * coverHeightWithPadding + initial;
				const vx = (i * coverWidthWithPadding) % (columns * coverWidthWithPadding);
				return (
					<rect
						key={`SkeletonCard-${i + 1}}`}
						x={vx}
						y={vy}
						rx="0"
						ry="0"
						width={coverWidth}
						height={coverHeight}
					/>
				);
			})}
		</ContentLoader>
	);
};

export default CardsGrid;
