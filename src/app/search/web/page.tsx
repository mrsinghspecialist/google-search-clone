import data from "@/assets/searchData.json";
import WebSearchResults from "@/components/WebSearch/WebSearchResults";
import { WebSearchResult } from "@/types/WebSearch";
import Link from "next/link";

export default async function WebSearchPage({
  searchParams,
}: {
  searchParams: { searchTerm: string };
}) {
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_SEARCH_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${searchParams.searchTerm}`
  );
  if (!response.ok) {
    // throw new Error("Something went wrong");
  }
  // const data = await response.json();
  let results = data.items;
  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">
          No results found for {searchParams.searchTerm}
        </h1>
        <p className="text-lg">
          Try searching the web or images for something else&nbsp;
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }
  return <div>{results && <WebSearchResults results={data} />}</div>;
}
