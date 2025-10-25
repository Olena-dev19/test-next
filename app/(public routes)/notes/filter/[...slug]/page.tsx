// app/notes/filter/[...slug]/page.tsx

import { getNotes } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";
import { ALL_NOTES } from "@/lib/constantas";
import Search from "@/components/Search/Search";

type Props = {
  params: Promise<{ slug: string[] }>;
};

const NotesByCategory = async ({ params }: Props) => {
  const { slug } = await params;
  const categoryId = slug?.[0];
  console.log(slug);

  const response = await getNotes(
    categoryId === ALL_NOTES ? undefined : slug[0],
    slug[1]
  );

  return (
    <div>
      <Search categoryId={slug[0]} />
      {response?.notes?.length > 0 && <NoteList notes={response.notes} />}
    </div>
  );
};

export default NotesByCategory;
