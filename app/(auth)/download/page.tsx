import { Metadata } from "next";
import DownloadClient from "./DownloadClient";
import { buildPageMetadata } from "@/lib/og/buildMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Download Gator - Mac, Windows, iOS, and Android",
  description:
    "Download Gator for Mac or Windows, command your agents from iOS or Android, or open your workspace on the web.",
  canonical: "https://gator.so/download",
  ogKind: "page",
  ogSlug: "download",
});

export default function DownloadPage() {
  return <DownloadClient />;
}
