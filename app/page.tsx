import prisma from "@/utils/db";

export default async function Home() {
  const profile = await prisma.profile.create({
    data: {
      name: "Pradeep",
    },
  });

  const data = await prisma.profile.findUnique({
    where: {
      id: profile.id,
    },
  });

  return <>{data?.name}</>;
}
