import { NextResponse } from 'next/server';

export async function GET(request: Request) {
 

  const response = await fetch("https://swapi.dev/api/");
  const data = await response.json();
  console.log('====================================');
  console.log(data.results);
  console.log('====================================');

  return NextResponse.json(data.results);
}