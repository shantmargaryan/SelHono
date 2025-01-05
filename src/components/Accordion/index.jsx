import styles from "./accordion.module.scss"
import { Accordion, AccordionItem } from '@szhsin/react-accordion';

function MyAccordion({ posts = [] }) {
    return (
        <Accordion transition transitionTimeout={350} className={styles.accordion}>
            {
                posts?.map(item => (
                    <AccordionItem key={item.id} className={styles.accordionItem} header={item.title}>
                        <p className={styles.accordionText + " blackText"}>
                            {item.text}
                        </p>
                    </AccordionItem>
                ))
            }
        </Accordion>
    )
}

export default MyAccordion