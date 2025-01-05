import { Link } from "react-router-dom"
import styles from "./newsItem.module.scss"
import { LazyLoadImage } from "react-lazy-load-image-component"

function NewsItem({ id, img = "", subtitle = "", title = "", date = "" }) {

    return (
        <li className={styles.item}>
            <Link className={styles.imgLink + " link-reset"} to={`BlogDetails/${id}`}>
                <LazyLoadImage
                    effect="blur"
                    wrapperProps={{
                        style: { transitionDelay: "300ms" },
                    }}
                    className={styles.img + " img"} src={img} alt={img} />
            </Link>
            <span className={styles.subtitle}>
                {subtitle}
            </span>
            <h3 className={styles.title + " smallTitle"}>
                {title}
            </h3>
            <div className={styles.dateBox}>
                <span className={styles.date}>
                    {date}
                </span>
                <Link className={styles.link + " link-reset"} to={`BlogDetails/${id}`}>
                    <svg className={styles.icon}>
                        <use xlinkHref="/img/svg/sprite.svg#smallArrow" />
                    </svg>
                </Link>
            </div>
        </li>
    )
}

export default NewsItem