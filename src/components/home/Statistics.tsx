import React from "react";

const statList = [
    {
        title: 'Brand Recognition',
        content: `
        Boost your brand recognition with each click. Generic links don’t
        mean a thing. Branded links help instil confidence in your content.
        `,
        imgurl: '/images/icon-brand-recognition.svg',
    },
    {
        title: 'Detailed Records',
        content: `
        Gain insights into who is clicking your links. Knowing when and where
        people engage with your content helps inform better decisions.
        `,
        imgurl: '/images/icon-detailed-records.svg',
    },
    {
        title: 'Fully Customizable',
        content: `
        Improve brand awareness and content discoverability through customizable
        links, supercharging audience engagement.
        `,
        imgurl: '/images/icon-fully-customizable.svg',
    },
];

export default function Statistics(props: React.HTMLAttributes<HTMLDivElement>) {
    const {
        className = '',
    } = props;
    return (
        <div className={`statistics bg-neutral-gray/20 ${className}`}>
            <div className="container">
                <div className="text-center">
                    <h4 className="font-bold text-2xl lg:text-4xl">Advanced Statistics</h4>
                    <p className="lg:text-xl text-neutral-grayishViolet mt-4 leading-relaxed">Track how your links are performing across the web with<br /> our advanced statistic dashboard.</p>
                </div>

                <div className="relative">
                    <div className="grid lg:grid-cols-3 gap-x-8 gap-y-0">
                        {
                            statList.map((item, i) =>
                                <div key={`stat-${i}`} className="text-center lg:text-start">
                                    <div className="w-full hidden lg:block" style={{ height: 50 * i }}></div>

                                    <div className="px-10">
                                        <div className="rounded-full bg-primary-violet w-[100px] h-[100px] flex justify-center items-center p-7 mx-auto lg:mx-0" style={{ transform: `translateY(50%)` }}>
                                            <img src={item.imgurl} alt="" className="w-full h-full" />
                                        </div>
                                    </div>

                                    <div className={`px-6 lg:px-10 py-12 lg:py-16 pt-20 lg:pt-24 bg-white rounded-md`}>
                                        <h4 className="font-bold text-xl lg:text-2xl">{item.title}</h4>
                                        <p className="text-neutral-grayishViolet mt-4 leading-relaxed lg:text-lg">{item.content}</p>
                                    </div>

                                </div>
                            )
                        }
                    </div>

                    <hr className="decor-line bg-primary border-0 h-[8px] absolute top-1/2 -translate-y-1/2 w-full z-[-1]" />
                </div>
            </div>
        </div>
    )
}