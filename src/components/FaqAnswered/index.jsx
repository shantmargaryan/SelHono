import styles from "./faqAnswered.module.scss"
import MyAccordion from "../Accordion"
import { LazyLoadImage as Image } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';
import { fetcher } from "../../halpes/fetcher"
import useSWR from "swr"



function FaqAnswered() {

    const { data } = useSWR(`${import.meta.env.vite_api_url}/FAQ`, fetcher)
    const questionAnswered = data?.questionAnswered


    return (
        <section className={styles.faqAnswered + " section"}>
            <div className={styles.container + " container"}>
                <h2 className={styles.title + " blackTitle"}>
                    {questionAnswered?.title}
                </h2>
                <div className={styles.content}>
                    <MyAccordion
                        posts={questionAnswered?.posts}
                    />
                    <Image
                        src={data?.imgUrl}
                        alt={data?.imgUrl}
                        className={styles.img + " img"}
                        effect="blur"
                        wrapperProps={{
                            style: { transitionDelay: "300ms" },
                        }} />
                </div>
            </div>
        </section>
    )
}

export default FaqAnswered