import { Link } from "react-router-dom"
import styles from "./join.module.scss"
import { fetcher } from "../../halpes/fetcher"
import useSWR from "swr"


function join() {

    const { data, error } = useSWR(`${import.meta.env.VITE_API_URL}/join`, fetcher)
    if (error) {
        return <div>Failed to load</div>
    }

    return (
        <section className={styles.join + " section"}
            style={{
                backgroundImage:
                    `url("${data?.background}")`
            }} >
            <div className={styles.container + " container"}>
                <h3 className={styles.title + " title"}>
                    {data?.title}
                </h3>
                <p className={styles.text + " whiteText"}>
                    {data?.text}
                </p>
                <Link className={styles.link + " link-reset"}
                    to="/Contact">
                    Contact With Us
                    <svg className={styles.icon}>
                        <use xlinkHref="/img/svg/sprite.svg#arrow" />
                    </svg>
                </Link>
            </div>
        </section >

    )
}

export default join