import Link from "next/link"
import Image from "next/image"

const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "About",
        url: "/about",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard",
    },
];

const Navbar = () => {
    return (
        <div className="flex items-center justify-center p-3 mt-4">
            <Link href={"/"} className="mr-32" >
                <Image width={150} height={150} src="/logo.png" alt="logo" priority />
            </Link>
            <div className="text-xl font-bold text-white">
                <ul className="flex items-center justify-center gap-10">
                    {links.map((link) => (
                        <li key={link.id} >
                            <Link href={link.url}
                                className={ "text text-white hover:text-gray hover:underline underline-offset-4 decoration-2 decoration-gray"}>
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navbar