import styles from './blogPost.module.scss'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { fetcher } from '../../halpes/fetcher'
import useSWR from 'swr'


function BlogPost({ id }) {
    const { data } = useSWR(`${import.meta.env.VITE_API_URL}/blogPost`, fetcher)



    return (
        <section className={styles.blogPost + " section"}>
            <div className={styles.container + " container"}>
                <h2 className={styles.title + " blackTitle"}>
                    {data?.title}
                </h2>
                <div className={styles.wrapper}>
                    <LazyLoadImage
                        src={data?.imgUrl}
                        alt={data?.imgUrl}
                        className={styles.img + " img"}
                        effect='blur'
                        wrapperProps={
                            {
                                style: {
                                    transitionDelay: '300ms'
                                }
                            }
                        } />
                    <div className={styles.content}>
                        <h3 className={styles.smallTitle + " blackTitle"}>
                            {data?.smallTitle}
                        </h3>
                        <p className={styles.text + " blackText"}>
                            {data?.text}
                        </p>
                        <div className={styles.dateBox}>
                            <span className={styles.date}>
                                {data?.date}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogPost