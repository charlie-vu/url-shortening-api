'use client';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import React, { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

import axios from "axios";
import { toast } from "sonner";

const suggestList = [
    {
        url: 'https://full-link.com',
        urlShort: 'https://short-link.com',
    },
    {
        url: 'https://full-link.com',
        urlShort: 'https://short-link.com',
    },
    {
        url: 'https://full-link.com',
        urlShort: 'https://short-link.com',
    },
]

export default function Result(props: React.HTMLAttributes<HTMLDivElement>) {
    const {
        className = '',
        ...rest
    } = props;

    const [inputValue, setInputValue] = useState<string>('');
    const [errorText, setErrorText] = useState<string>('');
    const [url, setUrl] = useState<string>('');
    const [result, setResult] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const [loadingCopy, setLoadingCopy] = useState(false);

    const reset = () => {
        setInputValue('')
        setUrl('')
    }

    const proceed = () => {
        // Check if the input is empty
        if (!inputValue.trim()) {
            setErrorText('Please add a link');
            return
        } else {
            setErrorText('');
            // const postBody = {
            //     url: inputValue,
            // }
            setLoading(true)
            axios.get('https://is.gd/create.php', { params: { format: "json", url: inputValue } }).then((res) => {
                console.log(res.data)

                res?.data?.errorcode ? setErrorText(res.data.errormessage) : setErrorText('')
                res?.data?.shorturl ? setResult(res.data.shorturl) : setResult('')

            }).catch((e) => {
                console.log(e)
                setErrorText(`Oops, something's wrong. Please try again later.`)
                reset()
            }).finally(() => {
                setLoading(false)
            })
        }
    }

    const copyToClipboard = () => {
        setLoadingCopy(true)
        navigator.clipboard.writeText(result).then(() => {
            toast.success('Copied to Clipboard')
        }).catch((e) => {
            console.log(e)
            toast.error('Please try again later')
        }).finally(() => {
            setLoadingCopy(false)
        })
    }

    return (
        <div id="result" className={`result bg-neutral-gray/20 relative ${className}`} {...rest}>
            <div className="h-1/2 w-full bg-white absolute top-0"></div>

            <div className="container">
                <div className="flex flex-col gap-4 relative z-[1]">
                    <Card className="bg-[url('/images/bg-shorten-desktop.svg')] bg-primary-violet bg-no-repeat bg-cover py-10 lg:h-[128px]" >
                        <CardContent className="lg:px-12">
                            <div className="flex flex-col lg:flex-row gap-4 h-full relative">
                                <Input className={`bg-white h-12 px-6 ${errorText ? 'border-2 border-secondary-red' : ''}`} placeholder="Shorten a link here..." value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} onKeyUp={e => e.key === "Enter" && proceed()} />
                                {errorText && <p className="text-secondary-red text-sm italic lg:absolute top-10/9">{errorText}</p>}

                                <Button className="h-12 w-full lg:w-auto" onClick={proceed} disabled={loading}>Shorten It!</Button>
                                {/* <Skeleton className="h-[48px] min-w-[140px] w-full lg:w-auto rounded bg-neutral-grayishViolet" /> */}
                            </div>
                        </CardContent>
                    </Card>

                    {
                        loading &&
                        <Skeleton className="h-[68px] w-full rounded-md bg-neutral-grayishViolet" />
                    }

                    {
                        result && !loading &&
                        <Card className="py-4">
                            <CardContent>
                                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                                    <a href={`https://${inputValue}`} target="_blank" className="font-bold line-clamp-1">{inputValue}</a>
                                    <hr className="my-0 border-t-2 lg:hidden" />
                                    <a href={result} target="_blank" className="font-bold text-primary lg:ms-auto">{result}</a>

                                    <Button className="cursor-pointer py-4 min-w-[120px] w-full lg:w-auto" onClick={copyToClipboard} disabled={loadingCopy}>Copy</Button>
                                </div>
                            </CardContent>
                        </Card>
                    }



                    {/* {suggestList.map((item, i) =>
                        <Card key={`${item.url}-${i}`} className="py-4">
                            <CardContent>
                                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                                    <a href={item.url} target="_blank" className="font-bold line-clamp-1">{item.url}</a>
                                    <hr className="my-0 border-t-2 lg:hidden" />
                                    <a href={item.urlShort} target="_blank" className="font-bold text-primary lg:ms-auto">{item.urlShort}</a>
                                    <Button className="cursor-pointer py-4 min-w-[120px] w-full lg:w-auto">Copy</Button>
                                </div>
                            </CardContent>
                        </Card>
                    )} */}

                </div>
            </div>


        </div>
    )
}
