import styles from "./hero.module.scss"
function Hero({ title = "", background = "", children }) {

    return (
        <>
            <section className={styles.hero + " section"} style={{ backgroundImage: `url("${background}")` }} >
                <div className={styles.container + " container"}>
                    <h1 className={styles.title + " title"}>
                        {title}
                    </h1>
                </div>
            </section>
            <div className={" container"}>
                {children}
            </div>
        </>
    )
}

export default Hero