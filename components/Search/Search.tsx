"use client";

import { useRouter } from "next/navigation";

interface SearchProps {
  categoryId: string;
}
const Search = ({ categoryId }: SearchProps) => {
  const router = useRouter();
  const onSubmit = (formData: FormData) => {
    const title = formData.get("title");
    router.push(`/notes/filter/${categoryId}/${title}`);
  };
  return (
    <form action={onSubmit}>
      <input type="text" name="title" />
      <button>Search</button>
    </form>
  );
};

export default Search;
