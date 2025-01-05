import Hero from "/src/components/Hero"
import ContactMeeting from "/src/components/ContactMeeting"
import { fetcher } from "../halpes/fetcher"
import useSWR from "swr"
function Contact() {

    const { data } = useSWR("http://localhost:3000/contact", fetcher)

    return (
        <>
            <Hero
                background={data?.background} />
            <ContactMeeting />
        </>
    )
}

export default Contact