import Logo from "./components/Logo";
import Naviagtion from "./components/Navigation";

// This is a convention of NEXT.js to change the title of the Tab in the website.
export const metadata = {
  title: "The Wild Oasis",
};
// RootLayout will display over every route so we used <Navigation /> in this....
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Naviagtion />
        </header>
        <main>{children}</main>
        <footer>© By The Wild Oasis</footer>
      </body>
    </html>
  );
}
