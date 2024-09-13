import SearchForm from '@/component/SearchForm/SearchForm';
import { Suspense } from "react";
import ResultContainer from "@/component/Result/ResultContainer";

export default async function Search ({ params }: { params: { slug: string } }){
	return (
		<>
			<div className="flex items-center justify-center py-5 flex-col">
				<SearchForm/>
			</div>

			<div className="flex items-center justify-center py-5">
				<Suspense fallback={<p>....Loading</p>}>
					<ResultContainer slug={params.slug}/>
				</Suspense>
			</div>
		</>
	)
}