'use client';

import Filter from '../Filter/Filter';
import { useState } from "react";
import useStore from "@/store/store";


interface FilterBoxProps {
	priceMin: number;
	priceMax: number;
	priceUnit: string;
}
export default function FilterBox ( { priceMin, priceMax, priceUnit }: FilterBoxProps){
	const [newPriceMin, setNewPriceMin] = useState<number>(priceMin);
	const [newPriceMax, setNewPriceMax] = useState<number>(priceMax);

	const { updatePrice } = useStore((state) => state.actions);

	return (
		<div className="border border-solid border-custom-gray-light">
			<Filter
				min={priceMin}
				max={priceMax}
				unit={priceUnit}
				updatedNewMin={(value) => setNewPriceMin(value)}
				updatedNewMax={(value) => setNewPriceMax(value)}
			/>

			<button onClick={() => updatePrice(newPriceMin, newPriceMax)}>Adjust</button>
		</div>
	)
}