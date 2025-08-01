import { ReactNode } from "react"
import Header from "./Header";
import Footer from "./Footer";

interface DefaultLayoutProps {
    children?: ReactNode;
}
export default function DefaultLayout(props: DefaultLayoutProps) {
    const {
        children,
    } = props
    return (
        <>
            <div className="min-h-dvh flex flex-col">
                <Header />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}