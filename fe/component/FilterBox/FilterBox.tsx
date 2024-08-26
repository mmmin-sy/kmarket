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
		<div className="border border-solid border-custom-gray-light p-2 mb-2">
			<Filter
				min={priceMin}
				max={priceMax}
				unit={priceUnit}
				updatedNewMin={(value) => setNewPriceMin(value)}
				updatedNewMax={(value) => setNewPriceMax(value)}
			/>

			<button onClick={() => updatePrice(newPriceMin, newPriceMax)} className="rounded bg-custom-pinkGray text-sm p-2 hover:bg-custom-turkishRose">Adjust</button>
		</div>
	)
}