import Hero from "/src/components/Hero"
import PricingItem from "/src/components/PricingItem"
import { fetcher } from "../halpes/fetcher"
import useSWR from "swr"


function Pricing() {


    const { data: pricing } = useSWR("http://localhost:3000/pricing", fetcher)


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