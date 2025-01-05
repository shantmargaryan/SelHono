import { Link } from "react-router-dom"
import styles from './specialHeroItem.module.scss'
import { fetcher } from "../../halpes/fetcher"
import useSWR from "swr"

function SpecialHeroItem() {

    const { data } = useSWR("http://localhost:3000/specialHeroItem?_page=1&_limit=3", fetcher)

    return (
        <ul className={styles.list + " list-reset"}>
            {
                data?.map(item => (
                    <li className={styles.item} key={item.id}>
                        <h3 className={styles.title + " smallTitle"}>
                            {item?.title}
                        </h3>
                        <p className={styles.text + " blackText"}>
                            {item?.text}
                        </p>
                        <Link to="/" className={styles.button + " link-reset"}>
                            Read More
                            <svg className={styles.icon}>
                                <use xlinkHref="/img/svg/sprite.svg#arrow" />
                            </svg>
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default SpecialHeroItem