import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Promo() {
    const router = useRouter()
    console.log("render")
    useEffect(() => {
        console.log("Mounting")
    }, []);
    return (
        <div>
            <div>Promo is here</div>
            <Link href={"../setting/setting"}> Go To Setting </Link>
            <button onClick={() => router.push("../setting/setting")}>Go To Setting BTN</button>
        </div>
    );
}