import Result from "@/component/Result/Result";
import axios from "axios";

interface ResultContainerProps {
	slug: string;
}
async function getData(search: string) {
	const res = await axios.get('http://localhost:3003/?s=' + search);
	if (!res) {
		throw new Error('Failed to fetch data')
	}

	return res.data;
}
export default async function ResultContainer({ slug }: ResultContainerProps){
	const data = await getData(slug);

	return (
		<div className="flex flex-col w-full max-w-[800px]">
			{ data.length > 0 ? <Result data={data} /> : <div>No Result!</div> }
		</div>
	)
}