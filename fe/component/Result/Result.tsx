'use client'

import ResultItem from "@/component/Result/ResultItem";
import FilterBox from "@/component/FilterBox/FilterBox";
import useStore from "@/store/store";

interface ResultProps {
	data: {
		title: string,
		link: string,
		portion: string,
		price: string,
		market: string
	}[];
}

export default function Result({ data }: ResultProps){
	const min: number = data.reduce((min, d) => {
		return Math.floor(Number(d.price)) < min ?  Math.floor(Number(d.price)) : min
	}, Number(data[0].price));

	const max = data.reduce((max, d) => {
		return Math.ceil(Number(d.price)) > max ? Math.ceil(Number(d.price)) : max
	}, Number(data[0].price));

	const filters = useStore((state) => state.filters);
	// Todo: 왜 2번 불리지?

	const dataWithFilters= () => data.filter(d => (filters.price?.min <= d.price) && (filters.price?.max >= d.price))

	return (
		<div className="flex flex-col">
			{ data.length > 0 ? (
				<>
					<FilterBox
						priceMin={min}
						priceMax={max}
						priceUnit={'€'}
					/>

					{filters.price ? (
						<div className="border-t border-solid border-custom-gray-light">
							{dataWithFilters().map((item, id) => <ResultItem key={id} item={item}/>)}
						</div>
					) : (
						<div className="border-t border-solid border-custom-gray-light">
							{data.map((item, id) => <ResultItem key={id} item={item}/>)}
						</div>
					)}

				</>
			) : <div>No Result!</div>
			}
		</div>
	)
}