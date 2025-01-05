import styles from "./aboutWorkItem.module.scss"
import { Link } from "react-router-dom"
import { LazyLoadImage as Image } from "react-lazy-load-image-component"
function AboutWorkItem({ title = "", text = "", imgUrl = "" }) {
    return (
        <article className={styles.article}>
            <div className={styles.content}>
                <h2 className={styles.title + " blackTitle"}>
                    {title}
                </h2>
                <p className={styles.text + " blackText"}>
                    {text}
                </p>
                <Link to="Projects" className={styles.link + " link-reset"}>
                    Our Concept
                    <svg className={styles.icon}>
                        <use xlinkHref="img/svg/sprite.svg#arrow" />
                    </svg>
                </Link>
            </div>
            <Image
                src={imgUrl}
                className={styles.img + " img"}
                alt={imgUrl}
                effect="blur"
                wrapperProps={{
                    style: {
                        transitionDelay: "300ms",
                    },
                }}
            />
        </article>
    )
}

export default AboutWorkItem