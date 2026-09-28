type TIcon = {
  src: string;
  alt: string;
  className?: string;
};

export function Icon({ src, alt }: TIcon) {
  return <img className="w-8" src={src} alt={alt} />;
}
