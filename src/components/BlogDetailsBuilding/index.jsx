import styles from './blogDetailsBuilding.module.scss'
import { Link } from 'react-router-dom'

import { LazyLoadImage as Image } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

import { fetcher } from '../../halpes/fetcher'
import useSWR from 'swr'

function blogDetailsBuilding({ id }) {
  const { data } = useSWR(`http://localhost:3000/blogItems/${id}`, fetcher)
  const { data: blogDetailsPosts } = useSWR("http://localhost:3000/blogDetailsPosts", fetcher)

  return (
    <>
      <section className={styles.blogDetailsBuilding + " section"}>
        <div className={styles.container + " container"}>
          <div className={styles.wrapper}>
            <aside className={styles.aside}>
              <h3 className={styles.smallTitle + " blackTitle"}>
                {blogDetailsPosts?.title}
              </h3>
              <ul className={styles.listNews + " list-reset"}>
                {
                  blogDetailsPosts?.blogDetailInfo?.map((item) => (
                    <li className={styles.itemNews} key={item.id}>
                      <p className={styles.text + " blackText"}>
                        {item?.text}
                      </p>
                      <span className={styles.date}>
                        {item?.date}
                      </span>
                    </li>
                  ))
                }
              </ul>
              <h3 className={styles.smallTitle + " blackTitle"}>
                {blogDetailsPosts?.blogDetailCatalog?.title}
              </h3>
              <ul className={styles.listCategories + " list-reset"}>
                {
                  blogDetailsPosts?.blogDetailCatalog?.posts?.map((item, index) => (
                    <li className={styles.itemCategories} key={index}>
                      <span className={styles.textCategories}>
                        {item.text}
                      </span>
                    </li>
                  ))
                }
              </ul>
              <h3 className={styles.smallTitle + " blackTitle"}>
                {blogDetailsPosts?.blogDetailTags?.title}
              </h3>
              <ul className={styles.listTags + " list-reset"}>
                {
                  blogDetailsPosts?.blogDetailTags.posts.map((item, index) => (
                    <li className={styles.itemTags} key={index}>
                      <Link className={styles.link + " link-reset"} to={"#"}>
                        {item.text}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </aside>
            <div className={styles.content}>
              <h3 className={styles.title + " blackTitle"}>
                {data?.smallTitle}
              </h3>
              <Image
                className={styles.img + " img"}
                src={data?.imgUrl}
                alt={data?.imgUrl}
                effect="blur" wrapperProps={{
                  style:
                    { transitionDelay: "300ms" }
                }} />
              <p className={styles.contentText + " blackText"}>
                {data?.text}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default blogDetailsBuilding