import type { Metadata } from "next";
import './styles/root.scss'
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Luke Wiskus Resume",
  description: "Professional resume for Luke Wiskus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="stylesheet" precedence="default" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <body className='global-wrapper'>
      {children}
      <Analytics />
      </body>
    </html>
  );
}
