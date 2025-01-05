import { LazyLoadImage as Image } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';
import styles from "./aboutItem.module.scss"
function AboutItem({ img = "", name = "", country = "", text = "" }) {
    return (
        <li className={styles.item}>
            <div className={styles.iconBox}>
                <Image className={styles.img + " img"}
                    src={img}
                    alt={name}
                    effect="blur"
                    wrapperProps={{
                        style: { transitionDelay: "300ms" },
                    }} />
                <div className={styles.nameBox}>
                    <span className={styles.name}>
                        {name}
                    </span>
                    <span className={styles.country}>
                        {country}
                    </span>
                </div>
            </div>
            <p className={styles.text + " blackText"}>
                {text}
            </p>
        </li>
    )
}

export default AboutItem