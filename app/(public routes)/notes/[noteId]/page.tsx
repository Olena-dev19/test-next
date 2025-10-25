import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import { getSingleNote } from "@/lib/api";
import NoteDetailsClient from "./NoteDetailsClient";

interface NotePageProps {
  params: Promise<{
    noteId: string;
  }>;
}

const NotePage = async ({ params }: NotePageProps) => {
  const { noteId } = await params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["note", noteId],
    queryFn: () => getSingleNote(noteId),
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NoteDetailsClient />
      </HydrationBoundary>
    </>
  );
};

export default NotePage;
