import Link from "next/link";

import footerList from "./FooterLinks.json";
import socialList from "./FooterSocial.json";

export default function Header() {
    return (
        <footer className="footer bg-neutral-veryDarkViolet">
            <div className="container py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_auto] gap-12 text-center lg:text-start">
                    <div className="md:col-span-2 lg:col-span-1">
                        <Link href="#">
                            <img src="/images/logo.svg" alt="Shortly" className="brightness-0 invert inline-block" />
                        </Link>
                    </div>
                    {
                        footerList.map((item, i) =>
                            <div key={`footer-${item.name}`}>
                                <h4 className="text-white font-bold">{item.name}</h4>
                                <div className="mt-6 flex flex-col gap-2">
                                    {
                                        item.itemList.map((link, j) =>
                                            <Link key={`${item.name}-${j}`} href={link.url} className="text-neutral-gray hover:text-primary">{link.text}</Link>
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }
                    <div className="">
                        <div className="flex gap-6 justify-center">
                            {
                                socialList.map((item, i) =>
                                    <a key={`social-${i}`} href={item.url} target="_blank">
                                        <img src={item.icon} alt="" className="w-8 h-8" />
                                    </a>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="attribution text-white">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="https://www.frontendmentor.io/profile/charlie-vu" target="_blank">Ngoc-Van Vu</a>.
            </div>
        </footer>

    )
}