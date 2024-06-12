import { Header } from "@/components/Header";
import "./globals.css";
import { Inter, Montserrat, Fira_Code, Encode_Sans, Source_Code_Pro } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "Frida A. Hårstad",
};

// Fonter: https://nextjs.org/docs/app/building-your-application/optimizing/fonts

const font = Source_Code_Pro({ subsets: ['latin'] });
// const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
 