'use server'

import { redirect } from "next/navigation";
import SearchForm from '@/component/SearchForm/SearchForm';

export default async function Home() {
  async function handle(formData) {
    'use server';
    const searchString = formData.get('search');
    redirect(`/search/${encodeURIComponent(searchString)}`);
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <SearchForm />
    </div>
  );
}
