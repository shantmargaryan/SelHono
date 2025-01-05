import Hero from "/src/components/Hero"
import PricingItem from "/src/components/PricingItem"
import { fetcher } from "../halpes/fetcher"
import useSWR from "swr"


function Pricing() {


    const { data: pricing } = useSWR(`${import.meta.env.VITE_API_URL}/pricing`, fetcher)


    return (
        <>
            <Hero
                background={pricing?.background}
                title={pricing?.title} />
            <PricingItem />
        </>
    )
}

export default Pricing