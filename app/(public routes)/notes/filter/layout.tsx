import NotesSidebar from "./@sidebar/default";

type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};

const NotesLayout = ({ children, sidebar }: Props) => {
  return (
    <section style={{ display: "flex", gap: "40px" }}>
      <NotesSidebar />
      <div>{children}</div>
    </section>
  );
};

export default NotesLayout;
