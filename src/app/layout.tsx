import type { Metadata } from "next";
import "./globals.css";
import { Montserrat} from 'next/font/google'

const moserrate = Montserrat({
  subsets: ['cyrillic'],
  weight: '300',
})


export const metadata: Metadata = {
  title: "Мастер-Туров",
  description: "Мастер-Туров",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={moserrate.className}>
      <body
      >
        {children}
      </body>
    </html>
  );
}
