import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

// This is inbuilt functionality for importing fonts from the server itself instead of downloading it from google
import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});
console.log(josefin);

import "@/app/_styles/globals.css";
import Header from "./_components/Header";
// This is a convention of NEXT.js to change the title of the Tab in the website.
export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s: The Wild Oasis",
    default: "Welcome: The Wild Oasis ",
  },
  // This description can be written in every route page.js seperately and is a SEO friendly keyword
  description:
    "Luxurious cabin hotel, located in the hearts of Himalayan lap of Uttarakhand India, offers a prestine view and luxurious stay. ",
};
// RootLayout will display over every route so we used <Navigation /> in this....
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-primary-950 text-primary-100 min-h-screen flex flex-col ${josefin.className}`}
      >
        <Header>
          <Logo />
          <Navigation />
        </Header>
        <div className="flex-1 px-8 py-12">
          <main className="max-w-7xl mx-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
