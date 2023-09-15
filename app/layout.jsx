import { Header } from "@/components/Header";
import "./globals.css";
import { Inter, Montserrat, Fira_Code } from "next/font/google";

export const metadata = {
  title: "CV Workshop",
};

// Her kan vi bytte font på siden.
// Forsøk å kommenter ut inter fonten og utkommenter montserrat fonten.

// Du kan lese mer om fonter her: https://nextjs.org/docs/app/building-your-application/optimizing/fonts

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
 