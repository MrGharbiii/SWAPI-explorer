import SearchResults from "./components/SearchResults";

export default function Home() {
	return (
		<main className="container mx-auto p-4 max-w-4xl">
			<h1 className="text-4xl font-bold mb-8 text-center text-yellow-400">
				Star Wars Character Explorer
			</h1>
			<div className="bg-gray-800 p-6 rounded-lg shadow-lg">
				<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
					<SearchResults />
				</div>
			</div>
		</main>
	);
}
