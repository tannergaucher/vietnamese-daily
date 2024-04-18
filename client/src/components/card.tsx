import Image from "next/image";

export function Card({
  image,
  small,
  heading,
  subHeading,
  children,
}: {
  image?: { src: string; alt: string; width: number; height: number };
  small?: string;
  heading: string;
  subHeading?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="border border-bg-1-light dark:border-accent-1-dark dark:hover:border-accent-1-dark rounded-lg p-3 box-border shadow-lg h-auto">
      {image ? (
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt}
          className="rounded-lg shadow-lg"
        />
      ) : null}
      {small ? (
        <small className="block  mt-3 mb-2 text-gray-600 dark:text-gray-300">
          {small}
        </small>
      ) : null}

      <h2 className="text-2xl font-semibold mb-2">{heading}</h2>
      {subHeading ? (
        <p className="text-gray-600 dark:text-gray-300">{subHeading}</p>
      ) : null}
      {children}
    </div>
  );
}
