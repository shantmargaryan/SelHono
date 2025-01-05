import styles from "./servicesAbout.module.scss"
import { Swiper, SwiperSlide } from "swiper/react"
import { LazyLoadImage as Image } from "react-lazy-load-image-component"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules"

import { fetcher } from "../../halpes/fetcher"
import useSWR from "swr"
function ServicesAbout() {

    const { data, error } = useSWR("http://localhost:3000/aboutUs", fetcher)

    if (error) {
        return <div>Failed to load</div>
    }

    return (
        <section className={styles.servicesAbout + " section"}>
            <div className={styles.container + " container"}>
                <h1 className={styles.title + " blackTitle"}>
                    {data?.title}
                </h1>
                <Swiper
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className={styles.swiper}
                    pagination={{ el: ".swiper-pagination", clickable: true }}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                        clickable: true
                    }}
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={2}
                    coverflowEffect={
                        {
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: true
                        }
                    }>
                    {
                        data?.imgUrl?.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Image
                                    className={styles.img + " img"}
                                    effect="blur"
                                    wrapperProps={{
                                        style: {
                                            transitionDelay: "300ms"
                                        }
                                    }}
                                    src={item?.imgUrl}
                                    alt={item?.imgUrl}
                                />
                            </SwiperSlide>
                        ))
                    }
                    <div className={styles.controler}>
                        <div className={`swiper-button-prev slider-arrow  ${styles.buttonPrev}`} >
                        </div>
                        <div className={`swiper-button-next slider-arrow  ${styles.buttonNext}`}>
                        </div>
                        <div className={`swiper-pagination ${styles.pagination}`}></div>
                    </div>
                </Swiper>
            </div>
            <div className={styles.textBox + " container"}>
                <p className={styles.text + " blackText"}>
                    {data?.text}
                </p>
                <span className={styles.name}>
                    {data?.name}
                </span>
            </div>
        </section>
    )
}

export default ServicesAbout