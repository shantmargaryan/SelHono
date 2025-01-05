import CountUp from "react-countup"
import styles from "./counter.module.scss"

function Counter({ number = 0, title = "" }) {

    return (
        <div className={styles.number}>
            <CountUp className={styles.counter} duration={1.5} end={number} separator="" />
            <span className={styles.text}>
                {title}
            </span>
        </div>
    )
}

export default Counter