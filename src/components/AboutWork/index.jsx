import styles from "./aboutWork.module.scss"
import useSWR from "swr"
import { fetcher } from "../../halpes/fetcher"
import 'react-lazy-load-image-component/src/effects/blur.css';
import AboutWorkItem from "../aboutWorkItem";


function AboutWork() {
    const { data } = useSWR(`${import.meta.env.vite_api_url}/aboutUsItems`, fetcher)

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