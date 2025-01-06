import Hero from "/src/components/Hero"
import ServicesWork from "/src/components/ServicesWork"
import Join from "/src/components/Join"
import { fetcher } from "../halpes/fetcher"
import useSWR from "swr"

function Services() {

    const { data } = useSWR(`${import.meta.env.VITE_API_URL}/services`, fetcher)

    return (
        <>
            <Hero background={data?.background}
                title={data?.title} />
            <ServicesWork />
            <Join />
        </>
    )
}

export default Services