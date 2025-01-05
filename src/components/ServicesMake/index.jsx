import styles from "./servicesMake.module.scss"
import { fetcher } from "../../halpes/fetcher"
import useSWR from "swr"
function index() {

    const { data } = useSWR(`${import.meta.env.vite_api_url}/servicesInterior`, fetcher)

    return (
        <section className={styles.servicesArt + " section"}>
            <div className={styles.container + " container"}>
                <div className={styles.interior}>
                    {
                        data?.map((item, index) => (
                            <div className={styles.content} key={index}>
                                <h2 className={styles.title + " blackTitle"}>
                                    {item?.title}
                                </h2>
                                <ul className={styles.list + " list-reset"}>
                                    {
                                        item?.texts?.map((item, index) => (
                                            <li className={styles.item} key={index}>
                                                <p className={styles.text + " blackText"}>
                                                    {item}
                                                </p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default index