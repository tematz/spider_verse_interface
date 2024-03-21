import { NextResponse } from "next/server";

import heroesData from "./heroes.json";

export async function GET() {
  try {
    return NextResponse.json({ data: heroesData });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
