'use client';
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Banner() {
    return (
        <>
            <div className="banner relative overflow-x-clip mt-8">

                <div className="container lg:min-h-[640px] py-12 flex flex-col items-center lg:items-start text-center lg:text-start">
                    <img src="/images/illustration-working.svg" alt="working" className="lg:absolute top-1/2 lg:-translate-y-1/2 -end-[128px] z-[-1] max-h-full min-w-7/12 mx-auto" />

                    <div className="max-w-[620px] mt-12 lg:mt-0">
                        <h2 className="text-4xl lg:text-[72px] font-bold leading-tight tracking-tight">More than just shorter links</h2>
                        <p className="lg:text-2xl mt-4 lg:mt-0 text-neutral-grayishViolet/80 leading-normal mix-blend-difference">
                            Build your brand’s recognition and get detailed insights
                            on how your links are performing.
                        </p>
                    </div>
                    <div className="mt-8">
                        <Button className="rounded-full px-10" onClick={() => { document.getElementById('result')?.scrollIntoView({ behavior: 'smooth' }) }}>Get Started</Button>
                    </div>
                </div>

            </div>
        </>
    )
}