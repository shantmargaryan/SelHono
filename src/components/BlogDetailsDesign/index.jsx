import styles from "./blogDetailsDesign.module.scss"
import useSWR from "swr"
import { fetcher } from '../../halpes/fetcher'
import { LazyLoadImage as Image } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
function BlogDetailsDesign() {

    const { data } = useSWR("http://localhost:3000/blogDetailDesign", fetcher)

    return (
        <section className={styles.blogDetailsDesign + " section"}>
            <div className={styles.container + " container"}>
                <div className={styles.content}>
                    <h3 className={styles.title + " blackTitle"}>
                        {data?.title}
                    </h3>
                    <p className={styles.text + " blackText"}>
                        {data?.text}
                    </p>
                    {
                        data?.texts?.map((item, index) => (
                            <p className={styles.texts + " blackText"} key={index}>
                                {item}
                            </p>
                        ))
                    }
                </div>
                <Image
                    className={styles.img + " img"}
                    src={data?.imgUrl}
                    alt={data?.imgUrl}
                    effect="blur" wrapperProps={{
                        style:
                            { transitionDelay: "300ms" }
                    }} />
            </div>
        </section>
    )
}

export default BlogDetailsDesign