import { Link } from "react-router-dom"
import styles from "./followItem.module.scss"
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';

function FollowItem({ title, subtitle, img }) {

    return (
        <article className={styles.article}>
            <Link className={styles.imgLink + " link-reset"} to="project">
                <LazyLoadImage className={styles.img + " img"} src={img} alt={img}
                    effect="blur"
                    wrapperProps={{
                        style: {
                            transitionDelay: "300ms",
                        }
                    }}
                />
            </Link>
            <div className={styles.content}>
                <div className={styles.titleBox}>
                    <h3 className={styles.title + " blackTitle"}>
                        {title}
                    </h3>
                    <span className={styles.subtitle}>
                        {subtitle}
                    </span>
                </div>
                <Link className={styles.link + " link-reset"} to="project">
                    <svg className={styles.icon}>
                        <use xlinkHref="img/svg/sprite.svg#smallArrow" />
                    </svg>
                </Link>
            </div>
        </article>
    )
}

export default FollowItem