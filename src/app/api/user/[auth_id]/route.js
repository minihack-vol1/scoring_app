import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();
export async function connect() {
  try {
    await prisma.$connect();
  } catch (error) {
    return Error("DB接続に失敗しました");
  }
}
export const GET = async (req, res) => {
  const auth_id = req.url.split("/user/")[1];
  console.log(auth_id);

  try {
    await connect();
    const user = await prisma.user.findUnique({
      where: { auth_id },
      include: {
        posts: true,
      },
    });
    return NextResponse.json({ message: "Success", user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
