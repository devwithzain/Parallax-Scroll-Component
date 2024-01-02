import "@styles/globals.css";
import type { Metadata } from "next";
import { Metrophobic } from "next/font/google";
const metrophobic = Metrophobic({ weight: "400", subsets: ["latin"] });
export const metadata: Metadata = {
	title: "Paralex Website",
	description: "Paralex Website",
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={metrophobic.className}>{children}</body>
		</html>
	);
}
