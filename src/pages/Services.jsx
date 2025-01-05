import Hero from "/src/components/Hero"
import SpecialHeroItem from "/src/components/SpecialHeroItem"
import ServicesWork from "/src/components/ServicesWork"
import Join from "/src/components/Join"
import { fetcher } from "../halpes/fetcher"
import useSWR from "swr"

function Services() {

    const { data } = useSWR(`${import.meta.env.vite_api_url}/services`, fetcher)

    return (
        <>
            <Hero background={data?.background}
                title={data?.title} />
            <SpecialHeroItem />
            <ServicesWork />
            <Join />
        </>
    )
}

export default Services