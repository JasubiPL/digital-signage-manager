import { NextRequest, NextResponse } from 'next/server'

interface CampaignsByBrand {
  [brand: string]: Campaign[];
}

interface Campaign {
  url: string;
  name: string;
  endDate: string;
  locations?: string;
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get("brand")

  if (!query) {
    return NextResponse.json({ error: "Pagina no existe" }, { status: 400 });
  }

  if (!campaignsByBrand[query]) {
    return NextResponse.json({ error: "Pagina no existe" }, { status: 400 });
  }


  return NextResponse.json(campaignsByBrand[query]);
}

const campaignsByBrand: CampaignsByBrand = {
  etn:[
    { url: "/test.png", name: 'Coca cola', endDate: "2024-12-31", locations: "Ciudad de México, Guadalajara, Monterrey" },
    { url: "/test.png", name: 'Telcel 50Megas', endDate: "2024-12-31", locations: "Ciudad de México, Guadalajara, Monterrey"},
    { url: "/test.png", name: 'Chedraui', endDate: "2024-12-31", locations: "Ciudad de México, Guadalajara, Monterrey" },
    { url: "/test.png", name: 'McDonalds', endDate: "2024-12-31", locations: "Ciudad de México, Guadalajara, Monterrey" },
    { url: "/test.png", name: 'Tesla', endDate: "2024-12-31", locations: "Ciudad de México, Guadalajara, Monterrey" },
    { url: "/test.png", name: 'Viva', endDate: "2024-12-31", locations: "Ciudad de México, Guadalajara, Monterrey" },
    { url: "/test.png", name: 'ETN 7', endDate: "2024-12-31", locations: "Ciudad de México, Guadalajara, Monterrey" },
    { url: "/test.png", name: 'ETN 8', endDate: "2024-12-31", locations: "Ciudad de México, Guadalajara, Monterrey" },
    { url: "/test.png", name: 'ETN 9', endDate: "2024-12-31", locations: "Ciudad de México, Guadalajara, Monterrey" },
    { url: "/test.png", name: 'ETN 10', endDate: "2024-12-31", locations: "Ciudad de México, Guadalajara, Monterrey" },
    { url: "/test.png", name: 'ETN 11', endDate: "2024-12-31", locations: "Ciudad de México, Guadalajara, Monterrey" },
    { url: "/test.png", name: 'ETN 12', endDate: "2024-12-31", locations: "Ciudad de México, Guadalajara, Monterrey" },
    { url: "/test.png", name: 'ETN 13', endDate: "2024-12-31", locations: "Ciudad de México, Guadalajara, Monterrey" },
    { url: "/test.png", name: 'ETN 14', endDate: "2024-12-31", locations: "Ciudad de México, Guadalajara, Monterrey" },
    { url: "/test.png", name: 'ETN 15', endDate: "2024-12-31", locations: "Ciudad de México, Guadalajara, Monterrey" },
    { url: "/test.png", name: 'ETN 16', endDate: "2024-12-31", locations: "Ciudad de México, Guadalajara, Monterrey" },
  ],
  costaline:[
    { url: "/test.png", name: 'Costaline 1', endDate: "2024-12-31", locations: "Ciudad de México, Guadalajara, Monterrey" },
    { url: "/test.png", name: 'Costaline 2', endDate: "2024-12-31", locations: "Ciudad de México, Guadalajara, Monterrey" },
    { url: "/test.png", name: 'Costaline 3', endDate: "2024-12-31", locations: "Ciudad de México, Guadalajara, Monterrey" },
    { url: "/test.png", name: 'Costaline 4', endDate: "2024-12-31", locations: "Ciudad de México, Guadalajara, Monterrey" },
    { url: "/test.png", name: 'Costaline 5', endDate: "2024-12-31", locations: "Ciudad de México, Guadalajara, Monterrey" },
    { url: "/test.png", name: 'Costaline 6', endDate: "2024-12-31", locations: "Ciudad de México, Guadalajara, Monterrey" },
  ],
  gho:[
    { url: "/test.png", name: 'GHO 1', endDate: "2024-12-31", locations: "Ciudad de México, Guadalajara, Monterrey" },
    { url: "/test.png", name: 'GHO 2', endDate: "2024-12-31", locations: "Ciudad de México, Guadalajara, Monterrey" },
    { url: "/test.png", name: 'GHO 3', endDate: "2024-12-31", locations: "Ciudad de México, Guadalajara, Monterrey" },
    { url: "/test.png", name: 'GHO 4', endDate: "2024-12-31", locations: "Ciudad de México, Guadalajara, Monterrey" },
  ]
}