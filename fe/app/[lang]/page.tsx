'use server'

import SearchForm from '@/component/SearchForm/SearchForm';
import { Suspense } from "react";

export default async function Home({ params: { lang } }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Suspense fallback={<p>Loading......</p>}><SearchForm lang={lang} /></Suspense>
    </div>
  );
}
