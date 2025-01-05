import styles from "./contactLinks.module.scss"
import { fetcher } from "../../halpes/fetcher"
import useSWR from "swr"

function ContactLinks() {

  const { data } = useSWR(`${import.meta.env.vite_api_url}/contactLinks`, fetcher)

  return (
    <div className={styles.links}>
      <a href={`mailto:${data?.email}`}
        className={styles.link + " link-reset"}>
        <svg className={styles.icon}>
          <use xlinkHref="/img/svg/sprite.svg#mail" />
        </svg>
        {data?.email}
      </a>
      <a href={`tel:${data?.phoneNumber}`}
        className={styles.link + " link-reset"}>
        <svg className={styles.icon}>
          <use xlinkHref="/img/svg/sprite.svg#Call" />
        </svg>
        {data?.phoneNumber}
      </a>
    </div>
  )
}

export default ContactLinks