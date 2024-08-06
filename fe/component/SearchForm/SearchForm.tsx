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
			<Link href="/"  className="text-5xl font-['Pacifico'] text-custom-deepPink">Hallo! K market!</Link>

			<form action={handle}>
				<input type="text" name="search" className="p-1 border border-solid border-custom-gray-light rounded-l-md focus:outline-none"/>
				<button className="py-1 px-2 border border-solid border-custom-gray-darker bg-custom-gray-darker text-custom-gray-lighter rounded-r-md hover:bg-custom-gray-darkest hover:border-custom-gray-darkest">search</button>
			</form>
		</>
	);
}