"use client";

import { useState, useEffect } from "react";

export default function SearchResults() {
	const [results, setResults] = useState<any[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [error, setError] = useState<string | null>(null);

	const handleSearch = async (page: number) => {
		try {
			const response = await fetch(`/api/search?page=${page}`);
			if (!response.ok) throw new Error("Failed to fetch data");

			const data = await response.json();
			setResults(data);
			setError(null);
		} catch (err) {
			setError((err as Error).message);
		}
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		handleSearch(currentPage);
	}, [currentPage]);

	const handleNextPage = () => setCurrentPage((prev) => prev + 1);
	const handlePreviousPage = () =>
		setCurrentPage((prev) => Math.max(prev - 1, 1));

	return (
		<div>
			<h2 className="text-xl font-semibold mb-2">Search Results</h2>

			{error && <p className="text-red-500 mt-4">{error}</p>}

			<ul className="mt-4">
				{results.map((character, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<li key={index} className="text-white">
						{character.name}
					</li>
				))}
			</ul>

			<div className="mt-4 flex justify-between">
				{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
				<button
					onClick={handlePreviousPage}
					className="bg-blue-500 text-white p-2"
					disabled={currentPage === 1}
				>
					Previous
				</button>

				<span className="text-white">Page {currentPage}</span>

				{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
				<button onClick={handleNextPage} className="bg-blue-500 text-white p-2">
					Next
				</button>
			</div>
		</div>
	);
}
