import type { Metadata } from "next";
export const metadata:Metadata = {
    title:"Blog",
    description:"Blog Description"
}

export default function Blog()
{
    return <h1>Blog Page</h1>
}