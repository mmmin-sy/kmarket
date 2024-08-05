import axios from "axios";
import Result from "@/component/Result/Result";
async function getData(search: string) {
	const res = await axios.get('http://localhost:3003/?s=' + search);
	if (!res) {
		throw new Error('Failed to fetch data')
	}

	return res.data;
}

export default async function Search ({ params }: { params: { slug: string } }){
	const data = await getData(params.slug);

	return (
		<div className="flex items-center justify-center py-5">
			<Result data={data}/>
		</div>
	)
}