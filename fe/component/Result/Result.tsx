import ResultItem from "@/component/Result/ResultItem";
interface ResultProps {
	data: {
		title: string,
		link: string,
		portion: string,
		price: string,
		market: string
	}[]
}

export default function Result({ data }: ResultProps){
	return (
		<>
			{ data.length > 0 ? (
				<div className="border-t border-solid border-custom-gray-light">
					{data.map((item, id) => <ResultItem key={id} item={item} />)}
				</div>
			) : <div>No Result!</div>
			}
		</>
	)
}