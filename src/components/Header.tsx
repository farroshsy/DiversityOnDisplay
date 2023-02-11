import Image from "next/image";
import Link from "next/link";
import jamjiwa_logo from "../assets/jamjiwa-logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { useRouter } from "next/router";
export default function Header() {
	const [expandNav, setExpandNav] = useState(false);
	const router = useRouter();
	return (
		<header className="bg-bgPrimary py-3">
			<nav className="flex px-6 justify-between relative">
				<div className="flex gap-2 items-center">
					<Image src={jamjiwa_logo} height={40} alt="logo jamjiwa" />
					<h1 className="font-bold hidden sm:block font-rFlex text-lg">Jamjiwa</h1>
				</div>
				<div className="md:hidden">
					{expandNav ? <MdClose className="hover:cursor-pointer" size={30} onClick={() => setExpandNav(!expandNav)} /> : <HiMenuAlt3 className="hover:cursor-pointer" onClick={() => setExpandNav(!expandNav)} size={30} />}
				</div>

				<ul className="hidden md:flex gap-2 md:gap-6 justify-between font-semibold">
					<li className="py-3 px-4 bg-btnPrimary rounded-xl text-sm md:min-w-[150px] text-center">
						<Link href="/">Home</Link>
					</li>
					<li className="py-3 px-4 bg-btnPrimary rounded-xl text-sm md:min-w-[150px] text-center">
						<Link href="/explore">Explore Jatim</Link>
					</li>
				</ul>
				<ul className={`${expandNav ? "flex" : "hidden"} absolute flex-col gap-2 mx-auto top-12 left-0 right-0 px-7 drop-shadow-2xl pb-10 z-50 bg-bgPrimary`}>
					<div>
						<p className="border-b py-2">
							<Link href="/">Home</Link>
						</p>
					</div>
					<div>
						<p className="border-b py-2">
							<Link href="/">Explore Jatim</Link>
						</p>
					</div>
					<div className="mt-3 bg-blue-600 text-center py-2 rounded-md font-bold hover:cursor-pointer" onClick={() => router.push("/login")}>
						<p>Login</p>
					</div>
				</ul>
			</nav>
		</header>
	);
}
