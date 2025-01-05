import styles from './faqRelated.module.scss'
import { LazyLoadImage as Image } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
import MyAccordion from '../Accordion';
import { fetcher } from "../../halpes/fetcher"
import useSWR from "swr"
function FaqReated() {

    const { data } = useSWR("http://localhost:3000/FAQ", fetcher)
    const faqInfo = data?.projectRelated
    return (
        <section className={styles.faqRelated + " section"}>
            <div className={styles.container + " container"}>
                <h3 className={styles.title + " blackTitle"}>
                    {faqInfo?.title}
                </h3>
                <div className={styles.content}>
                    <Image
                        className={styles.img + " img"}
                        src={faqInfo?.imgUrl}
                        alt={faqInfo?.imgUrl}
                        effect='blur'
                        wrapperProps={{
                            style: { transitionDelay: "300ms" },
                        }} />
                    <MyAccordion
                        posts={faqInfo?.posts} />
                </div>
            </div>
        </section>
    )
}

export default FaqReated