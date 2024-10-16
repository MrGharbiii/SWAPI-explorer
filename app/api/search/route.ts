import { NextResponse } from "next/server";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const page = searchParams.get("page") || "1";

	try {
		const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
		if (!response.ok) throw new Error("Failed to fetch Star Wars data");

		const data = await response.json();
		return NextResponse.json(data.results);
	} catch (error) {
		return NextResponse.json({ error: (error as Error).message }, { status: 500 });
	}
}
