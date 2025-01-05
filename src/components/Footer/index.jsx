import { Link } from "react-router-dom"
import styles from "./footer.module.scss"
import Logo from "/src/components/Logo"
import { fetcher } from "../../halpes/fetcher"
import useSWR from "swr"
import Socials from "../Socials"
import { links, projects } from "./links"

function Footer() {

    const { data } = useSWR("${import.meta.env.VITE_API_URL}/footer", fetcher)

    return (
        <footer className={styles.footer}>
            <div className={styles.container + " container"}>
                <div className={styles.content}>
                    <Logo />
                    <p className={styles.text + " blackText"}>
                        {data?.text}
                    </p>
                    <Socials />
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.listBox}>
                        <h3 className={styles.title + " blackTitle"}>
                            Pages
                        </h3>
                        <ul className={styles.list + " list-reset"}>
                            {
                                links.map((item, index) => (
                                    <li className={styles.item}
                                        key={index}
                                    >
                                        <Link className={styles.link + " link-reset link"}
                                            to={item.link}
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className={styles.listBox}>
                        <h3 className={styles.title + " blackTitle"}>
                            Services
                        </h3>
                        <ul className={styles.list + " list-reset"}>
                            {
                                projects.map((item, index) => (
                                    <li className={styles.item}
                                        key={index}
                                    >
                                        <Link className={styles.link + " link-reset link"}
                                            to={item.link}
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className={styles.contact}>
                        <h3 className={styles.title + " blackTitle"}>
                            Contact
                        </h3>
                        <p className={styles.text + " blackText"}>
                            {data?.address}
                        </p>
                        <a className={styles.link + " link-reset link"} href={"mailto:" + data?.mail}>
                            {data?.mail}
                        </a>
                        <a className={styles.link + " link-reset link"} href={"tel:" + data?.phoneNumber}>
                            {data?.phoneNumber}
                        </a>
                    </div>
                </div>
            </div>
            <p className={styles.bottomText + " blackText"}>
                Copyright © SELHONO
            </p>
        </footer>
    )
}

export default Footer