import styles from "./projectInfo.module.scss"

function ProjectInfo({
    title,
    text,
    imgUrl
}) {

    return (
        <section className={styles.projectInfo + " section"}>
            <div className={styles.container + " container"}>
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <h2 className={styles.title + " blackTitle"}>
                            {title}
                        </h2>
                        <p className={styles.text + " blackText"}>
                            {text}
                        </p>
                    </div>
                </div>
                <div className={styles.bg} style={{ backgroundImage: `url(${imgUrl})` }}>
                    <button className={styles.iconButton + " button-reset"} type="button">
                        <svg className={styles.icon}>
                            <use xlinkHref="/img/svg/sprite.svg#search" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ProjectInfo