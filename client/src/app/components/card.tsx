import Image from "next/image";
import React from "react";

export function Card({
  size,
  image,
  small,
  heading,
  subHeading,
  badge,
  children,
}: {
  size: "small" | "medium" | "large";
  image?: { src: string; alt: string; width: number; height: number };
  small?: string;
  heading: string;
  subHeading?: string;
  badge?: string;
  children?: React.ReactNode;
}) {
  const fonts = {
    small: {
      small: "text-xs",
      heading: "text-lg",
      subHeading: "text-sm",
    },
    medium: {
      small: "text-sm",
      heading: "text-xl",
      subHeading: "text-base",
    },
    large: {
      small: "text-base",
      heading: "text-3xl",
      subHeading: "text-xl",
    },
  };

  const marginY = {
    small: "my-1",
    medium: "my-2",
    large: "my-6",
  };

  const marginB = {
    small: "mb-1",
    medium: "mb-2",
    large: "mb-6",
  };

  return (
    <div className="border border-bg-1-light dark:border-accent-1-dark dark:hover:border-accent-1-dark rounded-lg box-border shadow-lg h-auto">
      {image ? (
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt}
          className={`rounded-t-lg shadow-lg ${marginB[size]}`}
        />
      ) : null}
      <div className="px-3">
        <div className="flex items-center justify-between space-x-2">
          {small ? (
            <small
              className={`${fonts[size].small} block ${marginY[size]} text-gray-600 dark:text-gray-300`}
            >
              {small}
            </small>
          ) : null}
          {badge ? (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-bg-2-light text-accent-1-light dark:bg-bg-2-dark dark:text-text-dark">
              {badge}
            </span>
          ) : null}
        </div>
        <h2
          className={`${fonts[size].heading} ${marginY[size]}  font-semibold`}
        >
          {heading}
        </h2>
        {subHeading ? (
          <p
            className={`${fonts[size].subHeading} ${marginY[size]} text-gray-600 dark:text-gray-300`}
          >
            {subHeading}
          </p>
        ) : null}
      </div>
      {children}
    </div>
  );
}
