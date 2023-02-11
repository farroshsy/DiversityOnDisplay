# Folder db

Berisi file konfigurasi untuk membuat connection ke database. Apabila akan melakukan fetching data dari database, silahkan import prisma dari folder ini terlebih dahulu.

Contoh, kita ingin mendapatkan data pengguna pada file index.tsx di Home page.

```ts
// index.tsx
// import prisma
import prisma from "@db/prsima";

export default function HomePage({users}) {
    return <>HomePage<>
}

export async function getServerSideProps() {
	const users = prisma.user.findMany();

	return {
		props: {
			users,
		},
	};
}
```
