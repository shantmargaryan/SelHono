import styles from "./specialHero.module.scss"
import SpecialHeroItem from "/src/components/SpecialHeroItem"
import TextType from "./textType"
import { fetcher } from "../../halpes/fetcher"
import useSWR from "swr"
function SpecialHero() {

    const { data, isLoading, error } = useSWR("http://localhost:3000/specialHero", fetcher)
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
            <SpecialHeroItem />
        </section >
    )
}

export default SpecialHero