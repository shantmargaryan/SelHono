import { Link } from 'react-router-dom'
import styles from './404.module.scss'
import { LazyLoadImage as Image } from 'react-lazy-load-image-component'

function Error() {
    return (
        <section className={styles.error + " section"}>
            <div className={styles.container + " container"}>
                <Image
                    effect="blur"
                    wrapperProps={{
                        style: { transitionDelay: "300ms" },
                    }}
                    className={styles.img + " img"}
                    src="/img/404.jpg"
                    alt="404"
                />
                <div className={styles.content}>
                    <h1 className={styles.title + " blackTitle"}>
                        404
                    </h1>
                    <p className={styles.text + " blackText"}>
                        We are sorry, but the page
                        you requested was not found
                    </p>
                    <Link to="/" className={styles.link + " link-reset"}>
                        Back to main page
                        <svg className={styles.icon}>
                            <use xlinkHref="/img/svg/sprite.svg#arrow" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Error