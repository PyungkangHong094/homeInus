import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "HOME IN US - 상상으로 채우는 나만의 공간",
  description:
    "전문 인테리어 디자인 서비스. 고객의 라이프스타일과 취향을 반영한 맞춤형 공간 설계를 제공합니다.",
  keywords: "인테리어, 디자인, 공간설계, 홈스타일링, 리모델링",
  authors: [{ name: "HOMEINUS" }],
  openGraph: {
    title: "HOMEINUS - 상상으로 채우는 나만의 공간",
    description: "전문 인테리어 디자인 서비스",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
