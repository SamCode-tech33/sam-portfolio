import "./globals.css";
import { AppProvider } from "./context";
import Navbar from "./components/navbar";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Samuel's Portfolio",
  description: "A Webpage containing my main personal projects as well as an about page covering my background and skills.",
  icons: {
    icon: "/codeFav.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <Navbar />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}

