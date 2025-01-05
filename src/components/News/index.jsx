import styles from "./news.module.scss"
import NewsItem from "/src/components/NewsItem"
import { fetcher } from "../../halpes/fetcher"
import useSWR from "swr"

function News() {

    const { data, error, isLoading } = useSWR(`${import.meta.env.vite_api_url}/news`, fetcher)
    if (error) {
        return <div>Failed to load</div>
    }

    return (
        <section className={styles.news + " section"}>
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
                        data?.newsItem?.map(item =>
                            <NewsItem
                                {...item}
                                img={item?.imgUrl}
                                key={item.id}
                            />
                        )
                    }
                </ul>
            </div>
        </section>
    )
}

export default News