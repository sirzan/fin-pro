import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "app/components/shared/Header/Header";
import { Footer } from "app/components/shared/Footer/Footer";




export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>

      <Header></Header>

        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
