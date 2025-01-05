import Hero from "/src/components/Hero"
import ServicesModern from "/src/components/ServicesModern"
import ServicesMake from "/src/components/ServicesMake"
import ServicesDesign from "/src/components/ServicesDesign"
import {fetcher} from "../halpes/fetcher"
import useSWR from "swr"
function SingleServices() {

const {data} = useSWR("http://localhost:3000/services", fetcher)

    return (
        <>
            <Hero
                background={data?.background}
                title={data?.title} />
            <ServicesModern />
            <ServicesMake/>
            <ServicesDesign/>
        </>
    )
}

export default SingleServices