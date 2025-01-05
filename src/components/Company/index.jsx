import styles from "./company.module.scss"
import { fetcher} from "../../halpes/fetcher"
import useSWR from "swr"

function Company() {

const { data: company } = useSWR("http://localhost:3000/companyImg", fetcher)

    return (
        <ul className={styles.list + " list-reset container"}>
            {
                company?.map(item => (
                    <li className={styles.item} key={item.id}>
                        <svg className={styles.icon}>
                            <use xlinkHref={item.svgUrl} />
                        </svg>
                    </li>
                ))
            }
        </ul>
    )
}


export default Company