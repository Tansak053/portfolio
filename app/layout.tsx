import "./globals.css";
import { Libre_Franklin } from "next/font/google";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio Home",
};

const libre = Libre_Franklin({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={libre.className}>
        {children}
      </body>
    </html>
  );
}