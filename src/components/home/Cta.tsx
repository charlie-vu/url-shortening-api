'use client';
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Cta(props: React.HtmlHTMLAttributes<HTMLDivElement>) {
    const {
        className = '',
    } = props
    return (
        <div className={`cta
        bg-[url('/images/bg-shorten-desktop.svg')] bg-primary-violet bg-no-repeat bg-cover
        text-white
        ${className}`}>
            <div className="container">
                <div className="flex flex-col gap-6 text-center">
                    <h4 className="text-2xl lg:text-4xl font-bold">Boost your links today</h4>
                    <div>
                        <Button className="rounded-full px-10" onClick={() => { document.getElementById('result')?.scrollIntoView({ behavior: 'smooth' }) }}>Get Started</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}