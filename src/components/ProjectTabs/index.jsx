import styles from "./projectTabs.module.scss"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from "react-router-dom";
import { fetcher } from "../../halpes/fetcher"
import useSWR from "swr";


function ProjectTabs({ id }) {
    const { data } = useSWR("http://localhost:3000/project", fetcher)

    return (
        <Tabs className={styles.tabs + " container"}>
            <div className={styles.tabBox}>
                <TabList className={styles.tabList + " list-reset"}>
                    <Tab className={styles.tab}>Bathroom</Tab>
                    <Tab className={styles.tab}>Bed Room</Tab>
                    <Tab className={styles.tab}>Kitchan</Tab>
                    <Tab className={styles.tab}>Living Area</Tab>
                </TabList>
            </div>

            <TabPanel className={styles.tabPanel}>
                <ul className={styles.list + " list-reset"}>
                    {
                        data?.bathRoom?.map((item, index) => (
                            <li className={styles.item} key={index}>
                                <Link className={styles.imgLink + " link-reset"} to={`/ProjectDetails/bathRoom/${item.id}`}>
                                    <LazyLoadImage className={styles.img + " img"}
                                        src={item.imgUrl}
                                        alt={item.imgUrl}
                                        effect="blur"
                                        wrapperProps={{
                                            style: {
                                                transitionDelay: "300ms",
                                            }
                                        }} />
                                </ Link>
                                <div className={styles.info}>
                                    <div className={styles.content}>
                                        <h3 className={styles.title + " blackTitle"}>
                                            {item.title}
                                        </h3>
                                        <span className={styles.subtitle}>
                                            Decor / Artchitecture
                                        </span>
                                    </div>
                                    <Link className={styles.link + " link-reset"} to={`/ProjectDetails/bathRoom/${item.id}`}>
                                        <svg className={styles.icon}>
                                            <use xlinkHref="img/svg/sprite.svg#smallArrow" />
                                        </svg>
                                    </Link>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </TabPanel>
            <TabPanel className={styles.tabPanel}>
                <ul className={styles.list + " list-reset"}>
                    {
                        data?.bedRoom?.map((item, index) => (
                            <li className={styles.item} key={index}>
                                <Link className={styles.imgLink + " link-reset"} to={`/ProjectDetails/bedRoom/${item.id}`}>
                                    <LazyLoadImage className={styles.img + " img"}
                                        src={item.imgUrl}
                                        alt={item.imgUrl}
                                        effect="blur"
                                        wrapperProps={{
                                            style: {
                                                transitionDelay: "300ms",
                                            }
                                        }} />
                                </Link>
                                <div className={styles.info}>
                                    <div className={styles.content}>
                                        <h3 className={styles.title + " blackTitle"}>
                                            {item.title}
                                        </h3>
                                        <span className={styles.subtitle}>
                                            Decor / Artchitecture
                                        </span>
                                    </div>
                                    <Link className={styles.link + " link-reset"} to={`/ProjectDetails/bedRoom/${item.id}`}>
                                        <svg className={styles.icon}>
                                            <use xlinkHref="img/svg/sprite.svg#smallArrow" />
                                        </svg>
                                    </Link>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </TabPanel>
            <TabPanel className={styles.tabPanel} >
                <ul className={styles.list + " list-reset"}>
                    {
                        data?.kitchan?.map((item, index) => (
                            <li className={styles.item} key={index}>
                                <Link className={styles.imgLink + " link-reset"} to={`/ProjectDetails/kitchan/${item.id}`}>
                                    <LazyLoadImage className={styles.img + " img"}
                                        src={item.imgUrl}
                                        alt={item.imgUrl}
                                        effect="blur"
                                        wrapperProps={{
                                            style: {
                                                transitionDelay: "300ms",
                                            }
                                        }} />
                                </Link>
                                <div className={styles.info}>
                                    <div className={styles.content}>
                                        <h3 className={styles.title + " blackTitle"}>
                                            {item.title}
                                        </h3>
                                        <span className={styles.subtitle}>
                                            Decor / Artchitecture
                                        </span>
                                    </div>
                                    <Link className={styles.link + " link-reset"} to={`/ProjectDetails/kitchan/${item.id}`}>
                                        <svg className={styles.icon}>
                                            <use xlinkHref="img/svg/sprite.svg#smallArrow" />
                                        </svg>
                                    </Link>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </TabPanel>
            <TabPanel className={styles.tabPanel}>
                <ul className={styles.list + " list-reset"}>
                    {
                        data?.livingArea?.map((item, index) => (
                            <li className={styles.item} key={index}>
                                <Link className={styles.imgLink + " link-reset"} to={`/ProjectDetails/livingArea/${item.id}`}>
                                    <LazyLoadImage className={styles.img + " img"}
                                        src={item.imgUrl}
                                        alt={item.imgUrl}
                                        effect="blur"
                                        wrapperProps={{
                                            style: {
                                                transitionDelay: "300ms",
                                            }
                                        }} />
                                </Link>
                                <div className={styles.info}>
                                    <div className={styles.content}>
                                        <h3 className={styles.title + " blackTitle"}>
                                            {item.title}
                                        </h3>
                                        <span className={styles.subtitle}>
                                            Decor / Artchitecture
                                        </span>
                                    </div>
                                    <Link className={styles.link + " link-reset"} to={`/ProjectDetails/livingArea${item.id}`}>
                                        <svg className={styles.icon}>
                                            <use xlinkHref="img/svg/sprite.svg#smallArrow" />
                                        </svg>
                                    </Link>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </TabPanel>
        </Tabs>
    )
}

export default ProjectTabs