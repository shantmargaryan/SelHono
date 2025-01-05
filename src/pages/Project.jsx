import Hero from "/src/components/Hero"
import ProjectTabs from "/src/components/ProjectTabs"
import { fetcher } from "../halpes/fetcher"
import useSWR from "swr"
import { useParams } from "react-router-dom";

function Project() {
    const { id } = useParams();
    const { data } = useSWR(`${import.meta.env.vite_api_url}/project`, fetcher)

    return (
        <Hero
            background={data?.background}
            title={data?.title}>
            <ProjectTabs
                id={id}
            />
        </Hero >
    )
}

export default Project