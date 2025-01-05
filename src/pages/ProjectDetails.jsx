import Hero from "/src/components/Hero"
import ProjectInfo from "/src/components/ProjectInfo"
import { fetcher } from "../halpes/fetcher"
import useSWR from "swr"
import { useParams } from "react-router-dom"
function ProjectDetails() {
    const { title, id } = useParams()
    const { data } = useSWR("http://localhost:3000/projectDetails", fetcher)
    const { data: projectInfo } = useSWR(`http://localhost:3000/project`, fetcher)


    return (
        <>
            <Hero
                title={data?.title}
                background={data?.background}
            />
            {
                projectInfo?.[title].filter(item => item?.id === id).map(item => (
                    <ProjectInfo
                        {...item}
                        key={item?.id}
                    />
                ))}
        </>
    )
}

export default ProjectDetails