import { Link } from "react-router-dom"
import styles from "./logo.module.scss"

function Logo() {
    return (
        <>
            <Link to="/" className={styles.logo + " link-reset"}>
                <svg className={styles.icon}>
                    <use xlinkHref="/img/svg/sprite.svg#logo" />
                </svg>
                <strong className={styles.logoTitle}>
                    SELHONO
                </strong>
            </Link>
        </>
    )
}

export default Logo