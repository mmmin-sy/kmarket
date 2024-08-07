import ResultItem from "@/component/Result/ResultItem";
import axios from "axios";
interface ResultProps {
	slug: string;
}
async function getData(search: string) {
	const res = await axios.get('http://localhost:3003/?s=' + search);
	if (!res) {
		throw new Error('Failed to fetch data')
	}

	return res.data;
}
export default async function Result({ slug }: ResultProps){
	const data = await getData(slug);
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