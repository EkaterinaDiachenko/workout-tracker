type TExercise = {
  title: string;
  src: string;
};

export function Exercise({ title, src }: TExercise) {
  return (
    <div className="flex items-center gap-3">
      <img src={src} width={200} alt="Описание изображения" />
      <h3>{title}</h3>
    </div>
  );
}
