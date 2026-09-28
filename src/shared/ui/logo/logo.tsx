type TLogo = {
  src: string;
  alt: string;
  title: string;
};

export function Logo({ src, alt, title }: TLogo) {
  return (
    <div className="flex h-12 gap-3 justify-center text-center px-3 mb-12">
      <img src={src} alt={alt}></img>
      <p className="text-3xl">{title}</p>
    </div>
  );
}
