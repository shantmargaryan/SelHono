import AboutItem from "/src/components/AboutItem"
import styles from "./about.module.scss"
import useSWR from "swr"
import { fetcher } from "../../halpes/fetcher"


function About() {

    const { data, error, isLoading } = useSWR(`${import.meta.env.VITE_API_URL}/about`, fetcher)
    if (error) {
        return <div>Failed to load</div>
    }

    console.log(data)

    return (
        <section className={styles.about + " section"}>
            <div className={styles.container + " container"}>
                <div className={styles.titleBox}>
                    <h3 className={styles.title + " title"} >
                        {data?.title}
                    </h3>
                </div>

                <ul className={styles.list + " list-reset"}>
                    {
                        data?.aboutItem?.map(item => (
                            <AboutItem
                                {...item}
                                img={item?.imgUrl}
                                key={item?.id} />
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default About