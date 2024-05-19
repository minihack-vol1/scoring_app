import prisma from "@/src/utils/prisma";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const { name, userId: createdBy } = await req.json();

  try {
    prisma.$connect();
    const { id } = await prisma.event.create({
      data: {
        name: name,
        createdBy: createdBy,
      },
    });
    prisma.$disconnect();

    return NextResponse.json({ lastInsertId: id }, { status: 200 });
  } catch (e) {
    console.error("Error:", e);
    return NextResponse.json({ status: 500 });
  }
}
