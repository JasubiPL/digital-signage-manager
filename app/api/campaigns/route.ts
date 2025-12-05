import { NextRequest, NextResponse } from 'next/server'

interface CampaignsByBrand {
  [brand: string]: Campaign[];
}

interface Campaign {
  url: string;
  name: string;
  endDate: string;
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
    { url: "/test.png", name: 'Mexico Norte', endDate: "2024-12-31" },
    { url: "/test.png", name: 'Mexico Sur', endDate: "2024-12-31" },
    { url: "/test.png", name: 'Mexico Poniente', endDate: "2024-12-31" },
  ],
  costaline:[
    { url: "/test.png", name: 'Mexico Norte', endDate: "2024-12-31" },
    { url: "/test.png", name: 'Mexico Sur', endDate: "2024-12-31" },
    { url: "/test.png", name: 'Mexico Poniente', endDate: "2024-12-31" },
  ],
  gho:[
    { url: "/test.png", name: 'Mexico Norte', endDate: "2024-12-31" },
    { url: "/test.png", name: 'Mexico Sur', endDate: "2024-12-31" },
    { url: "/test.png", name: 'Mexico Poniente', endDate: "2024-12-31" },
  ]
}