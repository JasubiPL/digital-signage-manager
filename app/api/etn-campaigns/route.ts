import { NextResponse } from 'next/server'

export async function GET() {
  const data = [
    { url: "/test.png", name: 'Mexico Norte', endDate: "2024-12-31" },
    { url: "/test.png", name: 'Mexico Sur', endDate: "2024-12-31" },
    { url: "/test.png", name: 'Mexico Poniente', endDate: "2024-12-31" },
    { url: "/test.png", name: 'Mexico Norte', endDate: "2024-12-31" },
    { url: "/test.png", name: 'Mexico Sur', endDate: "2024-12-31" },
    { url: "/test.png", name: 'Mexico Poniente', endDate: "2024-12-31" },
    { url: "/test.png", name: 'Mexico Norte', endDate: "2024-12-31" },
    { url: "/test.png", name: 'Mexico Sur', endDate: "2024-12-31" },
    { url: "/test.png", name: 'Mexico Poniente', endDate: "2024-12-31" },
    { url: "/test.png", name: 'Mexico Norte', endDate: "2024-12-31" },
    { url: "/test.png", name: 'Mexico Sur', endDate: "2024-12-31" },
    { url: "/test.png", name: 'Mexico Poniente', endDate: "2024-12-31" },
  ]
  return NextResponse.json(data)
}
