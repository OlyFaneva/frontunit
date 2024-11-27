import Navbar from "@/layouts/navbar";
import React, { Fragment } from "react";
import Footer from "@/layouts/footer";

export default function AccueilLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment>
      <Navbar />

      <div className="h-auto">
        {children}
      </div>
    <Footer />
    </Fragment>
  );
}
