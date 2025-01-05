import styles from './contactForm.module.scss'
import { useState } from 'react'
function ContactForm() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "9d8b7267-8669-4d02-b1b6-5b0c899451b4");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <>
            <form className={styles.form} onSubmit={onSubmit}>
                <div className={styles.inputs}>
                    <input className={styles.input + " input-reset"} name='name' type="text" placeholder='Name' required />
                    <input className={styles.input + " input-reset"} name='email' type="email" placeholder='Email' required />
                    <input className={styles.input + " input-reset"} name='website' type="url" placeholder='Website' />
                    <input className={styles.input + " input-reset"} name='phone' type="tel" placeholder='Phone' required />
                </div>
                <textarea className={styles.textArea} name="message" placeholder='Hello Iam Intrested in..'></textarea>
                <button className={styles.button + " button-reset"} type="submit">
                    Send Now
                    <svg className={styles.icon}>
                        <use xlinkHref="img/svg/sprite.svg#arrow" />
                    </svg>
                </button>
            </form>
            <span className={styles.result}>{result}</span>
        </>
    )
}

export default ContactForm