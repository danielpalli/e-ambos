import notFound from "../not-found";

interface Props {
  params: {
    id: string;
  };
}

export default function({ params }: Props) {
  const { id } = params;
  const categories = ["hombres", "mujeres", "accesorios"];

  if (!categories.includes(id)) return notFound();

  return (
    <div>
      <h1>asd Page</h1>
    </div>
  );
}