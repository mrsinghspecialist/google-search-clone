import { WebSearchAPIResponse } from "@/types/WebSearch";
import Parser from "html-react-parser";
import Link from "next/link";
import React from "react";

export default function WebSearchResults({
  results,
}: {
  results: WebSearchAPIResponse;
}) {
  return (
    <div className="w-full mx-auto px-3 pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {results.searchInformation.formattedTotalResults} results (
        {results.searchInformation.formattedSearchTime} seconds)
      </p>
      <div>
        {results.items.map((result) => {
          return (
            <div className="mb-8 max-w-xl" key={result.link}>
              <div className="group flex flex-col">
                <Link href={result.link}>{result.formattedUrl}</Link>
                <Link
                  href={result.link}
                  className="group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800"
                >
                  {result.title}
                </Link>
              </div>
              <p className="text-gray-600">{Parser(result.htmlSnippet)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
