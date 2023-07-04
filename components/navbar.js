import Link from "next/link"
import Image from "next/image"
export default function Navbar(){
    return(
        <>
        <nav>
        <div className="logo">
        <Image src={"/friendsLogo.png"} width={200} height={100}></Image>
        </div>
        <Link href="/">Home</Link>
        <Link href="/about">Contacts</Link>
        <Link href="/friends">Friends</Link>
        </nav>
        </>
    )
}