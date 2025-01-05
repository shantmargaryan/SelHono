import styles from "./create.module.scss"
import { fetcher } from "../../halpes/fetcher"
import useSWR from "swr"

function Create() {

    const { data, error } = useSWR(`${import.meta.env.VITE_API_URL}/createData`, fetcher)
    if (error) {
        return <div>failed to load</div>
    }

    return (
        <section className={styles.create + " section"}>
            <div className={styles.container + " container"}>
                <ul className={styles.list + " list-reset"}>
                    <li className={styles.item}
                        style={{ backgroundImage: `url("${data?.background}")` }}>
                        <h3 className={styles.title + " title"}>
                            {data?.title}
                        </h3>
                        <p className={styles.text + " whiteText"}>
                            {data?.text}
                        </p>
                        <div className={styles.callBox}>
                            <div className={styles.iconBox}>
                                <svg className={styles.icon}>
                                    <use xlinkHref="img/svg/sprite.svg#Call" />
                                </svg>
                            </div>
                            <div className={styles.phoneNumber}>
                                <a href={`tel:${data?.phoneNumber}`}
                                    className={styles.number + " link-reset"}>
                                    {data?.phoneNumber}
                                </a>
                                <span className={styles.subtitle}>
                                    Call Us Anytime
                                </span>
                            </div>
                        </div>
                    </li>
                    <li className={styles.item}
                        style={{ backgroundImage: `url("${data?.background2}")` }}>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Create