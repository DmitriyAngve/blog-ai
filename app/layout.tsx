import "./globals.css";
import { Open_Sans } from "next/font/google";
import Navbar from "app/(shared)/Navbar";
// If I doing routes for Next JS, I can start "import" from "app/" because that's how they configured it
import Footer from "app/(shared)/Footer";

const openSans = Open_Sans({ subsets: ["latin"] });

// meta data for Searching systems
export const metadata = {
  title: "Blog AI App",
  description: "Blog built in Bext JS that uses AI",
};
// meta data for Searching systems

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={openSans.className} lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
