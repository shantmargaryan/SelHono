import styles from "./aboutWork.module.scss"
import useSWR from "swr"
import { fetcher } from "../../halpes/fetcher"
import 'react-lazy-load-image-component/src/effects/blur.css';
import AboutWorkItem from "../aboutWorkItem";


function AboutWork() {
    const { data } = useSWR("http://localhost:3000/aboutUsItems", fetcher)

    return (
        <section className={styles.aboutWork + " section"}>
            <div className={styles.container + " container"}>
                {
                    data?.map(item => (
                        <AboutWorkItem
                            {...item}
                            img={item?.imgUrl}
                            key={item?.id}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default AboutWork