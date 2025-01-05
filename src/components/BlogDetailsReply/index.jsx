import styles from './blogDetailsReply.module.scss'
import ContactForm from '../ContactForm'
function BlogDetailsReply() {
    return (
        <section className={styles.blogDetailsReply + " section"}>
            <div className={styles.container + " container"}>
                <h3 className={styles.title + " blackTitle"}>
                    Leave a reply
                </h3>
                <ContactForm/>
            </div>
        </section>
    )
}

export default BlogDetailsReply