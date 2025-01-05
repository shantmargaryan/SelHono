import Hero from "/src/components/Hero"
import FaqAnswered from "/src/components/FaqAnswered"
import FaqReated from "/src/components/FaqRelated"
import { fetcher } from "../halpes/fetcher"
import useSWR from "swr"

function Faq() {

    const { data } = useSWR(`${import.meta.env.vite_api_url}/FAQ`, fetcher)

    return (
        <>
            <Hero
                title={data?.FAQHero?.title}
                background={data?.FAQHero?.background} />
            <FaqAnswered />
            <FaqReated />
        </>
    )
}

export default Faq