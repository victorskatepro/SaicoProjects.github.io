import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Victor Saico — Technical Lead",
  description:
    "Technical Lead specializing in fintech and mobile products. 8+ years shipping apps that drive real revenue at scale.",
  openGraph: {
    title: "Victor Saico — Technical Lead",
    description:
      "Building fintech and mobile products used by thousands — and engineered to last.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
