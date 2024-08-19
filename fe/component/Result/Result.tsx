import ResultItem from "@/component/Result/ResultItem";
import FilterBox from "@/component/FilterBox/FilterBox";

interface ResultProps {
	data: {
		title: string,
		link: string,
		portion: string,
		price: string,
		market: string
	}[];
}

export default async function Result({ data }: ResultProps){
	const min: number = data.reduce((min, d) => {
		return Math.floor(Number(d.price)) < min ?  Math.floor(Number(d.price)) : min
	}, Number(data[0].price));

	const max = data.reduce((max, d) => {
		return Math.ceil(Number(d.price)) > max ? Math.ceil(Number(d.price)) : max
	}, Number(data[0].price));

	return (
		<div className="flex flex-col">
			{ data.length > 0 ? (
				<>
					<FilterBox priceMin={min} priceMax={max} priceUnit={'€'} />
					<div className="border-t border-solid border-custom-gray-light">
						{data.map((item, id) => <ResultItem key={id} item={item}/>)}
					</div>
				</>
			) : <div>No Result!</div>
			}
		</div>
	)
}