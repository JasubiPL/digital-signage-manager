import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/app/db/supabase';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get("brand")

  /**
   * Validate the brand query parameter.
   * @returns {NextResponse} Error response if brand is missing.
   */
  if (!query) {
    return NextResponse.json({ error: "Marca buscada no encontrada" }, { status: 400 });
  }

  const { data, error } = await supabase.from(`active_campaigns_${query}`).select('*');
  
  /**
   * Handle potential errors from the database query.
   * @returns {NextResponse} Error response if database query fails.
   */
  if (error) {
    return NextResponse.json({ error: "Error al obtener las campañas" }, { status: 500 });
  }

  return NextResponse.json(data)
}
