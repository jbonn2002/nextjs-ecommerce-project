import { ModeToggle } from "@/components/DarkModeToggle";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import Background from "@/components/background";
import { Toaster } from "@/components/ui/toaster";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: "../fonts/satoshi/Satoshi-Variable.woff2",
  display: "swap",
});

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
      <body className={satoshi.className}>
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
