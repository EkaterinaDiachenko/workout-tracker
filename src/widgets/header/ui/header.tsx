import { Image } from "@shared/ui/image";
import arrowLeft from "@shared/assets/icon/arrow-left.svg";

type THeader = {
  title?: string;
  className?: string;
};

export function Header({ title, className }: THeader) {
  return (
    <div className="flex gap-6 items-center mb-6">
      <Image className="w-9" src={arrowLeft} alt="Стрелка назад" />
      <h2 className={`text-2xl ${className ?? ""}`}>{title}</h2>
    </div>
  );
}
