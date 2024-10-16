"use client";

import { useState } from "react";

export default function SearchResults() {
	const [results, setResults] = useState<any[]>([]);
	const [error, setError] = useState<string | null>(null);

	const handleSearch = async () => {
		try {
			const response = await fetch("/api/search");
			if (!response.ok) throw new Error("Failed to fetch data");

			const data = await response.json();
			setResults(data);
			setError(null);
		} catch (err) {
			setError((err as Error).message);
		}
	};

	return (
		<div>
			<h2 className="text-xl font-semibold mb-2">Search Results</h2>
			<button
				onClick={handleSearch}
				className="bg-blue-500 text-white p-2 mr-2"
			>
				Search Characters
			</button>

			{error && <p className="text-red-500 mt-4">{error}</p>}

			<ul className="mt-4">
				{results.map((character, index) => (
					<li key={index} className="text-white">
						{character.name}
					</li>
				))}
			</ul>
		</div>
	);
}
