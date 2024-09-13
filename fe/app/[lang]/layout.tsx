import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Hello, K market",
	description: "Find products in k shops",
};

export default function RootLayout({
 children, params: { lang },
}: Readonly<{
	children: React.ReactNode;
	params: { lang: string }
}>) {
	return (
		<html lang={lang}>
		<body className={inter.className}>{children}</body>
		</html>
	);
}
