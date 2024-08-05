import ResultItem from "@/component/Result/ResultItem";
interface ResultProps {
	data: {
		title: string,
		link: string,
		portion: string,
		price: string
	}[]
}

export default function Result({ data }: ResultProps){
	return (
		<>
			{ data.length > 0 ? (
				<ul>
					{data.map((item, id) => <ResultItem key={id} item={item} />)}
				</ul>
			) : <div>No Result!</div>
			}
		</>
	)
}