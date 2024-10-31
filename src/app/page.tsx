import Link from "next/link";

export default function HomePage() {
    return (
        <div>
                <h1>Home Page</h1>
                <div>
                    <Link href="/home">Home</Link>
                    <br />
                    <Link href="/services">Services</Link>
                    <br />
                    <Link href="/about">About</Link>
                    <br />
                    <Link href="/contact">Contact</Link>
                </div>
        </div>
    );
}