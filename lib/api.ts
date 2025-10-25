import axios from "axios";
import Note from "../types/note";

interface ApiResponse {
  notes: Note[];
  total: number;
}

axios.defaults.baseURL = "https://next-docs-9f0504b0a741.herokuapp.com/";

export async function getNotes(categoryId?: string, title?: string) {
  const res = await axios.get<ApiResponse>("/notes", {
    params: {
      categoryId,
      title,
    },
  });
  return res.data;
}

export const getSingleNote = async (noteId: string) => {
  const res = await axios.get<Note>(`/notes/${noteId}`);
  console.log(res.data);
  return res.data;
};
interface CategoryType {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export const getCategories = async () => {
  const res = await axios<CategoryType[]>("/categories");
  return res.data;
};
