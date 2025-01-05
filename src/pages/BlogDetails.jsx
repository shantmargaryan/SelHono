import Hero from "/src/components/Hero"
import BlogDetailsBuilding from "/src/components/BlogDetailsBuilding"
import BlogDetailsReply from "/src/components/BlogDetailsReply"
import BlogDetailsDesign from "/src/components/BlogDetailsDesign"
import { fetcher } from "../halpes/fetcher"
import useSWR from "swr"
import { useParams } from "react-router-dom"

function BlogDetails() {
    const { id } = useParams()
    const { data } = useSWR("http://localhost:3000/blogDetails", fetcher)

    return (
        <>
            <Hero
                background={data?.background}
                title={data?.title} />
            <BlogDetailsBuilding
                id={id}
            />
            <BlogDetailsDesign />
            <BlogDetailsReply />
        </>
    )
}

export default BlogDetails