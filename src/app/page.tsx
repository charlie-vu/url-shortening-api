import Banner from "@/components/home/Banner";
import Cta from "@/components/home/Cta";
import Result from "@/components/home/Result";
import Statistics from "@/components/home/Statistics";

export default function Home() {
  return (
    <>
      <div className="home">
        <Banner />
        <Result className="py-16" />
        <Statistics className="py-16 lg:py-32" />
        <Cta className="py-16" />
      </div>
    </>
  )
}