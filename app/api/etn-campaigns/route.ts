import { NextResponse } from 'next/server'

export async function GET() {
  const data = [
    { id: 1, nombre: 'Campaña ETN 1' },
    { id: 2, nombre: 'Campaña ETN 2' },
    { id: 3, nombre: 'Campaña ETN 3' },
  ]
  return NextResponse.json(data)
}
