import styles from "./servicesModern.module.scss"
import { fetcher } from "../../halpes/fetcher"
import useSWR from "swr"



function ServicesModern() {

    const { data } = useSWR(`${import.meta.env.vite_api_url}/servicesModern`, fetcher)

    return (
        <section className={styles.servicesModern + " section"}>
            <div className={styles.container + " container"}>
                <div className={styles.titleBox}>
                    <h2 className={styles.title + " blackTitle"}>
                        {data?.title}
                    </h2>
                    <p className={styles.text + " blackText"}>
                        {data?.text}
                    </p>
                </div>
                <div className={styles.content}>
                    {
                        data?.texts?.map(item => (
                            <p className={styles.largText + " blackText"}
                                key={item.id}>
                                {item?.text}
                            </p>
                        ))
                    }
                </div>
                <div className={styles.bg}
                    style={{ backgroundImage: `url(${data?.background})` }}>
                    <button className={styles.btn + " button-reset"}>
                        <svg className={styles.playIcon}>
                            <use xlinkHref="img/svg/sprite.svg#play" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ServicesModern