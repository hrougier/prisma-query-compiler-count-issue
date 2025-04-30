import { prisma } from '@/lib/prisma'

export default async function Home() {
  const data = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      _count: {
        select: {
          posts: true,
        },
      },
    }

    // same issue with:

    // include: {
    //   _count: {
    //     select: { posts: true },
    //   },
    // },
  })

  return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );
}
