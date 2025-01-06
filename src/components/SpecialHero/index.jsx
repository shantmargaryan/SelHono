import styles from "./specialHero.module.scss"
import TextType from "./textType"
import { fetcher } from "../../halpes/fetcher"
import useSWR from "swr"
function SpecialHero() {

    const { data, isLoading, error } = useSWR(`${import.meta.env.VITE_API_URL}/specialHero`, fetcher)
    if (error) {
        return <div>Failed to load</div>
    }
    if (isLoading) {
        return <div>Loading...</div>
    }




    return (
        <section className={styles.specialHero + " section"}>
            <div className={styles.container + " container"}
                style={{ backgroundImage: `url("${data?.background}")` }}>
                <h1 className={styles.title + " title"}>
                    <TextType
                        text={data?.title} />
                </h1>
                <p className={styles.text + " whiteText"}>
                    {data?.text}
                </p>
                <a href="#follow" className={styles.link + " link-reset"}>
                    Get Started
                    <svg className={styles.icon}>
                        <use xlinkHref="img/svg/sprite.svg#arrow" />
                    </svg>
                </a>
            </div>
        </section >
    )
}

export default SpecialHero