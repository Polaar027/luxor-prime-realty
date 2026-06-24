import { NextRequest, NextResponse } from "next/server";
import { createLead } from "@/lib/data/repository";

export async function POST(req: NextRequest) {
  const body = await req.json();

  if (!body.name || !body.email || !body.phone) {
    return NextResponse.json(
      { error: "name, email, and phone are required" },
      { status: 400 }
    );
  }

  const lead = await createLead({
    developmentId: body.developmentId,
    unitId: body.unitId ?? null,
    name: body.name,
    email: body.email,
    phone: body.phone,
    countryCode: body.countryCode,
    message: body.message,
    preferredCurrency: body.preferredCurrency,
  });

  return NextResponse.json({ lead }, { status: 201 });
}
