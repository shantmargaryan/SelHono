import { LazyLoadImage } from "react-lazy-load-image-component"
import styles from "./servicesItem.module.scss"
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from "react-router-dom";

function ServicesItem({ imgUrl = "", smallTitle = "", smallText = "" }) {

    return (
        <li className={styles.item}>
            <Link className={styles.link + " link-reset"} to={"/SingleServices"}>
                <LazyLoadImage src={imgUrl} alt={imgUrl}
                    className={styles.img + " img"}
                    effect="blur"
                    wrapperProps={{
                        style: {
                            transitionDelay: "300ms",
                        }
                    }}
                />
            </Link>
            <div className={styles.content}>
                <Link className={styles.link + " link-reset smallTitle"} to={"/SingleServices"}>
                    {smallTitle}
                </Link>
                <p className={styles.text + " blackText"}>
                    {smallText}
                </p>
            </div>
        </li>
    )
}

export default ServicesItem