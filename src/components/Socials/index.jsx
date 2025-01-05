import styles from "./socials.module.scss"
import { Facebook, Instagram } from '@mui/icons-material';
function Socials({ data }) {
    return (
        <div className={styles.socials}>
            <a className={styles.socialsLink + " link-reset"} href={`https://www.facebook.com/${data?.facebook}`} target="_blank">
                <Facebook className={styles.socialsIcon} />
            </a>
            <a href={`https://www.instagram.com/${data?.instagram}`} target="_blank">
                <Instagram className={styles.socialsIcon} />
            </a>
        </div>
    )
}

export default Socials