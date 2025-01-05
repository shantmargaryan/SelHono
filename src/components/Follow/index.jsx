import styles from "./follow.module.scss"
import FollowItem from "/src/components/FollowItem"
import Counter from "/src/components/Counter"
import { fetcher } from "../../halpes/fetcher"
import useSWR from "swr"


function Follow() {

    const { data, error } = useSWR(`${import.meta.env.VITE_API_URL}/follow`, fetcher)
    if (error) {
        return <div>Failed to load</div>
    }

    return (
        <section className={styles.follow + " section"} id="follow">
            <div className={styles.container + " container"}>
                <div className={styles.content}>
                    <h3 className={styles.title + " blackTitle"}>
                        {data?.title}
                    </h3>
                    <p className={styles.text + " blackText"}>
                        {data?.text}
                    </p>
                </div>

                <div className={styles.articleBox}>
                    {
                        data?.followItems.map(item => (
                            <FollowItem
                                {...item}
                                img={item?.imgUrl}
                                key={item?.id} />
                        ))
                    }
                </div>

                <div className={styles.counterBox}>
                    <Counter number={12} title="Years Of Experiance" />
                    <Counter number={1074} title="Success Project" />
                    <Counter number={98} title="Active Project" />
                    <Counter number={583} title="Happy Customers" />
                </div>
            </div>
        </section>
    )
}

export default Follow