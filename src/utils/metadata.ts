import { Metadata } from "next";

export function constructMetaData({
  title = "Game of Thrones 2024",
  description = "Game of thrones(GOT) is the official intercollege national level sports fest conducted by RCCIIT.",
  image = "/thumbnail.png", // put a thumbnail.png in public folder, resolution 1200x630
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
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
    themeColor: "#FFF",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
