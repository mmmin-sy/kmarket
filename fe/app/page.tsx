'use server'
import axios from "axios";
import {redirect} from "next/navigation";
async function getData(search: string) {
  const res = await axios.get('http://localhost:3003/?s=' + search);
  if (!res) {
    throw new Error('Failed to fetch data')
  }

  return res.data;
}

export default async function Home() {
  async function handle(formData) {
    'use server';
    const searchString = formData.get('search');
    redirect(`/search/${searchString}`);
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-start p-24">
      <div className="text-5xl font-['Pacifico'] text-custom-turkishRose">Hallo! K market!</div>

      <form action={handle}>
        <input type="text" name="search" className="p-1 border border-solid border-custom-gray-light rounded-l-md"/>
        <button className="py-1 px-2 border border-solid border-custom-gray-darkest bg-custom-gray-darkest text-custom-gray-lighter rounded-r-md">search</button>
      </form>
    </div>
  );
}
