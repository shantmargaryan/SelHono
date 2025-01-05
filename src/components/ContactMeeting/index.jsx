import styles from "./contactMeeting.module.scss"
import ContactForm from "../ContactForm"
import ContactLinks from "../ContactLinks"
function ContactMeeting() {
    return (
        <section className={styles.contactMeeting + " section"}>
            <div className={styles.container + " container"}>
                <div className={styles.titleBox}>
                    <h1 className={styles.title + " blackTitle"}>
                        We love meeting new people and helping them.
                    </h1>
                </div>
                <div className={styles.content}>
                    <ContactLinks />
                    <div className={styles.formBox}>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactMeeting