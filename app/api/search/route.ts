import { NextResponse } from "next/server";

export async function GET() {
	try {
		const response = await fetch("https://swapi.dev/api/people/");
		if (!response.ok) throw new Error("Failed to fetch Star Wars data");

		const data = await response.json();
		return NextResponse.json(data.results);
	} catch (error) {
		return NextResponse.json({ error: (error as Error).message }, { status: 500 });
	}
}
