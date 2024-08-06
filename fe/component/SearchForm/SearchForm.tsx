'use server';

import { redirect } from "next/navigation";
import Link from "next/link";

export default async function SearchForm (){
	async function handle(formData) {
		'use server';
		const searchString = formData.get('search');
		redirect(`/search/${encodeURIComponent(searchString)}`);
	}
	return (
		<>
			<Link href="/"  className="text-4xl font-['Pacifico'] text-custom-deepPink mb-5">Hello, K market!</Link>

			<form action={handle} className="w-full flex justify-center">
				<input
					type="text"
					name="search"
					className="w-1/2 p-1 border border-solid border-custom-gray-light rounded-l-md focus:outline-none"/>
				<button
					className="text-sm py-1 px-2 border border-solid border-custom-gray-darker bg-custom-gray-darker text-custom-gray-lighter rounded-r-md hover:bg-custom-gray-darkest hover:border-custom-gray-darkest">search
				</button>
			</form>
		</>
	);
}