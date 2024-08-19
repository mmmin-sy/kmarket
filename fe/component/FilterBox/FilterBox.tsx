'use client';

import Filter from '../Filter/Filter';

interface FilterBoxProps {
	priceMin: number;
	priceMax: number;
	priceUnit: string;
}
export default function FilterBox ( { priceMin, priceMax, priceUnit }: FilterBoxProps){
	return (
		<div className="border border-solid border-custom-gray-light">
			<Filter min={priceMin} max={priceMax} unit={priceUnit} />

			<button onClick={() => console.log('click!!')}>Adjust</button>
		</div>
	)
}