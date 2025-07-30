import NavBar from "@/components/NavBar";
import Link from "next/link";

export function Header() {
    return (
        <header className="px-4 py-5 bg-green-500 text-white">
            <div className="flex justify-between items-center">
                <Link
                    className="text-3xl hover:scale-105  duration-150"
                    href="/"
                >
                    B-STORE
                </Link>
                <NavBar />
            </div>
        </header>
    );
}
