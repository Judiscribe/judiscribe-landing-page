import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Judiscribe",
	description: "A court note-taking app for courts",
	icons: {
		icon: "./judiscribe.png",
		shortcut: "/judiscribe.png",
		apple: "/judiscribe.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
