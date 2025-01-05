import styles from "./servicesWork.module.scss"
import ServicesItem from "/src/components/ServicesItem"
import { fetcher } from "../../halpes/fetcher"
import useSWR from "swr"

function ServicesWork() {

    const { data } = useSWR("http://localhost:3000/servicesWork", fetcher)



    return (
        <section className={styles.servicesWork + " section"}>
            <div className={styles.container + " container"}>
                <div className={styles.content}>
                    <h3 className={styles.title + " blackTitle"}>
                        {data?.title}
                    </h3>
                    <p className={styles.text + " blackText"}>
                        {data?.text}
                    </p>
                </div>
                <ul className={styles.list + " list-reset"}>
                    {
                        data?.servicesItem?.map(item => (
                            <ServicesItem
                                {...item}
                                key={item.id}
                                img={item?.imgUrl}
                            />
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default ServicesWork