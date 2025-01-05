import { useEffect } from "react"
import { Link } from "react-router-dom"
import { Burger } from "fullburger"
import "fullburger/style"
import styles from "./header.module.scss"
import links from "./links"
import Logo from "/src/components/Logo"
import useSWR from "swr"
import { fetcher } from "../../halpes/fetcher"
import Socials from "../Socials"
import PhoneIcon from '@mui/icons-material/Phone';


function Header() {

    const { data } = useSWR(`${import.meta.env.VITE_API_URL}/header`, fetcher)

    useEffect(() => {
        new Burger("header", {
            speed: 500,
            whichSide: {
                left: true
            }
        })
    }, [])


    return (
        <header className={styles.header + " header"} data-burger-header="header">
            <div className={styles.container + " container"}>
                <Logo />
                <nav className={styles.nav + " nav"} data-burger-nav title="navigation menu">
                    <ul className={styles.list + " nav__list list-reset"}>
                        {
                            links.map((link, index) => (
                                <li className={styles.item + " nav__item"} key={index}>
                                    <Link className={styles.link + " nav__link"} to={link.link}>
                                        {link.title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <Socials />
                </nav>
                <a className={styles.phoneNumber + " link-reset"} href={`tel:${data?.phoneNumber}`}>
                    <PhoneIcon className={styles.phoneIcon} />
                </a>
                <button className={styles.burger + " burger"} data-burger-btn aria-label="open menu" aria-expanded="false">
                    <span className="burger__line burger__line_top"></span>
                    <span className="burger__line burger__line_middle"></span>
                    <span className="burger__line burger__line_bottom"></span>
                </button>
            </div>
        </header>
    )
}

export default Header