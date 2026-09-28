import exit from "@shared/assets/icon/exit.svg";
import { Icon } from "@shared/ui/icon";
import { Image } from "@shared/ui/image";

type TUserProfile = {
  name: string;
  email: string;
  title: string;
  src: string;
};

export function UserProfile({ name, email, src, title }: TUserProfile) {
  return (
    <div className="flex flex-col gap-6 px-3 mt-96">
      <div className="flex gap-4">
        <Image className="w-12 rounded-3xl" src={src} alt="Аватар" />
        <div>
          <p>{name}</p>
          <p>{email}</p>
        </div>
      </div>
      <div className="flex gap-6">
        <Icon src={exit} alt="Выйти" />
        <p>{title}</p>
      </div>
    </div>
  );
}
