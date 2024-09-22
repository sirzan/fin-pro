import { Nav } from "react-bootstrap";
import Link from "next/link";
export default function ItemNav() {
  return (
    <Nav className="justify-content-end flex-grow-1 pe-3">
      <Link href="/" className="nav-link">
        Inicio
      </Link>

      <Link href="/about" className="nav-link">
        Conocenos
      </Link>

      <Link href="/service" className="nav-link">
        Service
      </Link>

      <Link href="/faq" className="nav-link">
        FAQ
      </Link>

      <Link href="/contact" className="nav-link">
        Contácto
      </Link>
    </Nav>
  );
}
