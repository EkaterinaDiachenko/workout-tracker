type TImage = {
  src: string;
  alt: string;
  className?: string;
};

export function Image({ src, alt, className }: TImage) {
  return <img className={className} src={src} alt={alt} />;
}
