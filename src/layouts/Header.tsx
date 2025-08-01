import { Button } from "@/components/ui/button";
import Link from "next/link";

const menuList = [
    {
        name: 'Features',
        url: '#',
    },
    {
        name: 'Pricing',
        url: '#',
    },
    {
        name: 'Resources',
        url: '#',
    },
]

export default function Header() {
    return (
        <>
            <div className="container">
                <div className="flex gap-16 py-[40px]">
                    <h1>
                        <img src="/images/logo.svg" alt="Shortly" width={120} />
                    </h1>
                    <div className="gap-8 hidden lg:flex flex-grow-1 justify-between">
                        <div className="flex gap-8 items-center">
                            {
                                menuList.map((item, i) =>
                                    <Link key={`${item.name}-${i}`} href={item.url} className="font-semibold text-neutral-grayishViolet hover:text-black">{item.name}</Link>
                                )
                            }
                        </div>

                        <div className="flex items-center">
                            <Button asChild variant="ghost" className="btn rounded-full hover:bg-primary hover:text-white px-6">
                                <Link href="#">
                                    Login
                                </Link>
                            </Button>
                            <Button asChild variant="ghost" className="btn rounded-full hover:bg-primary hover:text-white px-6">
                                <Link href="#">
                                    Sign Up
                                </Link>
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}