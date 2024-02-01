import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
//{inter.className}

export const metadata: Metadata = {
  title: "Dekaf",
  description: "Kafka Error Handling Tool",
};
// children is replaced by a page dynamically at runtime depending on where the user is in our application
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='h-screen'>{children}</body>
    </html>
  );
}
