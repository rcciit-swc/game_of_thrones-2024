import { Metadata } from "next";

export function constructMetaData({
  title = "Game of Thrones 2024",
  description = "Game of thrones(GOT) is the official intercollege national level sports fest conducted by RCCIIT.",
  image = "/thumbnail.png", // put a thumbnail.png in public folder, resolution 1200x630
  authors = { name: "GOT RCCIIT Team", url: "https://stabble.org" },
  creator = "GOT RCCIIT Team",
  generator = "Next.js",
  publisher = "GOT",
  icons = "/favicon.ico",
  robots = "index, follow",
}: {
  title?: string;
  description?: string;
  image?: string;
  authors?: { name: string; url: string };
  creator?: string;
  generator?: string;
  publisher?: string;
  icons?: string;
  robots?: string;
} = {}): Metadata {
  return {
    title,
    description,
    authors,
    creator,
    generator,
    publisher,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    // twitter: {
    //   card: "summary_large_image",
    //   title,
    //   description,
    //   images: [image],
    //   creator: "@",
    // },
    icons,
    metadataBase: new URL("https://got.rcciit.org.in/"),
    robots,
  };
}
