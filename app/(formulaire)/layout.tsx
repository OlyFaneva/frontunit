import Logo from "@/components/tools/logo";
import React from "react";

export default function AccueilLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-[100vh] w-full bg-bgred p-2 px-16">
      <Logo />
      {children}
    </div>
  );
}
