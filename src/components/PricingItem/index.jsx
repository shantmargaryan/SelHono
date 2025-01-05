import styles from "./pricingItem.module.scss"
import { fetcher } from "../../halpes/fetcher"
import useSWR from "swr"

function PricingItem() {

    const { data, error } = useSWR(`${import.meta.env.vite_api_url}/pricingItem`, fetcher)
    if (error)
        return
    <div>Failed to load</div>

    return (
        <ul className={styles.list + " list-reset container"}>
            {
                data?.map(item => (
                    <li className={styles.item} key={item.id}>
                        <h3 className={styles.title + " blackTitle"}>
                            {item?.title}
                        </h3>
                        <div className={styles.priceBox}>
                            <div className={styles.dollar}>
                                <span className={styles.dollar}>
                                    $
                                </span>
                                <span className={styles.price}>
                                    {item.price}
                                </span>
                            </div>
                            <span className={styles.month}>
                                /month
                            </span>
                            {
                                item?.texts?.map((item, index) =>
                                    <p className={styles.text + " blackText"} key={index}>
                                        {item}
                                    </p>
                                )
                            }
                        </div>
                        <button className={styles.button + " button-reset"}>
                            Get Started
                            <svg className={styles.icon}>
                                <use xlinkHref="img/svg/sprite.svg#arrow" />
                            </svg>
                        </button>
                    </li>
                ))
            }
        </ul>
    )
}

export default PricingItem