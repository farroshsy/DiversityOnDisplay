import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div className="flex flex-col justify-between min-h-screen">
			<Header />
			<main className="container p-6 mx-auto">{children}</main>
			<Footer />
		</div>
	);
}
