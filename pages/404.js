import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function NotFount(){
    const router=useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            router.push("/");
        },5000)

    },[])

    return(
        <>
        <h1>Something bad happened :( </h1>
        <h3>Go back to <Link href="/">Homepage</Link> </h3>
        </>
    )
}