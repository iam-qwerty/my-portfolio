import { PortableTextComponents } from "@portabletext/react";
import { urlFor } from "@/sanity-lib/client";
import Image from "next/image";

export const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value || !value.asset) {
        return null;
      }
      return (
        <Image
          src={urlFor(value).url()}
          alt={value.alt || ' '}
          className="my-6 rounded-lg"
          width={value.asset.metadata.dimensions.width}
          height={value.asset.metadata.dimensions.height}
        />
      );
    },
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value.href}
        className="text-yellow-400 hover:text-yellow-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
  block: {
    h2: ({ children }) => <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>,
    normal: ({ children }) => <p className="mb-4">{children}</p>,
  },
};