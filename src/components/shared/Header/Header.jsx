"use client";
import {  Navbar, Container } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import "./header.css";
import ItemNav from "./ItemNav";
export const Header = () => {

  return (
    <>
      <Navbar bg="light" expand="lg" className="shadow-sm" sticky="top">
        <Container>
          <Link href="/" className="navbar-brand logo text-dark h2 mb-0">
            <Image
              src="/images/logo-blue.png"
              width={200}
              height={60}
              title="FinPro"
              alt="FinPro"
            />
         
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
        <ItemNav></ItemNav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  
   
    </>
  );
};
