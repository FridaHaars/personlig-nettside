import { Header } from "@/components/Header";
import "./globals.css";
import { Inter, Montserrat, Fira_Code } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "Frida A. Hårstad",
};

// Fonter: https://nextjs.org/docs/app/building-your-application/optimizing/fonts

const font = Fira_Code({ subsets: ["latin"] });
// const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
 