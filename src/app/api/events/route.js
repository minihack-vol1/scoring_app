import prisma from "@/src/utils/prisma";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const { name, userId: createdBy } = req.json();
  console.log(name, createdBy);

  try {
    prisma.$connect();
    await prisma.event.create({
      data: {
        name: name,
        createdBy: createdBy,
      },
    });

    return NextResponse.json({ status: 200 });
  } catch (e) {
    console.error("Error:", e);
    return NextResponse.json({ status: 500 });
  }
}
