import { ModeToggle } from "@/components/DarkModeToggle";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "@/components/background";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JordybDev",
  description: "Web developer personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Background />
          <Header />
          {children}
          <div className="md:fixed md:bottom-10 md:right-10">
            <ModeToggle />
          </div>
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
