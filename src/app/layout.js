import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kafka App",
  description: "Kafka Error Handling Tool",
};
// children is replaced by a page dynamically at runtime depending on where the user is in our application
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
