import Hero from "/src/components/Hero"
import BlogPost from "/src/components/BlogPost"
import BlogNews from "/src/components/BlogNews"
import { fetcher } from "../halpes/fetcher"
import useSWR from "swr"
function Blog() {
    const { data } = useSWR(`${import.meta.env.vite_api_url}/blog`, fetcher)

    return (
        <>
            <Hero
                background={data?.background}
                title={data?.title}
            />
            <BlogPost />
            <BlogNews />
        </>
    )
}

export default Blog