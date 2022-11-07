import React from 'react';

function ir() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			width="630"
			height="360">
			<path fill="#da0000" d="M0 0H630V360H0z" />
			<path fill="#fff" d="M0 0H630V240H0z" />
			<path fill="#239f40" d="M0 0H630V120H0z" />
			<g transform="translate(8.4 100.4)">
				<g id="tb4">
					<g id="tb1" fill="none" stroke="#fff" strokeWidth="2">
						<path
							id="tbp1"
							d="M0 1h26M1 10V5h8v4h8V5h-5M4 9h2m20 0h-5V5h8m0-5v9h8V0m-4 0v9"
							transform="scale(1.4)"
						/>
						<path id="tbp2" d="M0 7h9m1 0h9" transform="scale(2.8)" />
						<use y="120" xlinkHref="#tbp2" />
						<use y="145.2" xlinkHref="#tbp1" />
					</g>
					<g id="tb3">
						<use x="56" xlinkHref="#tb1" />
						<use x="112" xlinkHref="#tb1" />
						<use x="168" xlinkHref="#tb1" />
					</g>
				</g>
				<use x="168" xlinkHref="#tb3" />
				<use x="392" xlinkHref="#tb4" />
			</g>
			<g fill="#da0000" transform="matrix(45 0 0 45 315 180)">
				<g id="emblem_half">
					<path d="M-.548.836A.912.912 0 00.329-.722 1 1 0 01-.548.836" />
					<path d="M.618.661A.764.764 0 00.422-.74 1 1 0 01.618.661M0 1l-.05-1L0-.787a.31.31 0 00.118.099V-.1l-.04.993zM-.02-.85L0-.831a.144.144 0 00.252-.137A.136.136 0 010-.925" />
				</g>
				<use transform="scale(-1 1)" xlinkHref="#emblem_half" />
			</g>
		</svg>
	);
}

export default ir;
