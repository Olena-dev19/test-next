// import { getSingleNote } from "@/lib/api";
// import { notFound } from "next/navigation";

// export default async function ProfilePage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const user = await getSingleNote(params.id);

//   if (!user) {
//     notFound(); // Показує /profile/not-found.tsx
//   }

//   return <div>{user.title}</div>;
// }
