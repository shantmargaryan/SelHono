import styles from "./form.module.scss";
function Form() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "9d8b7267-8669-4d02-b1b6-5b0c899451b4");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
        }
    };

    return (
        <section className={styles.formSection}>
            <div className={styles.container + " container"}>
                <form className={styles.form} onSubmit={onSubmit}>
                    <div className={styles.titleBox}>
                        <h2 className={styles.title + " blackTitle"}>
                            Creative project? Let's have
                            a productive talk.
                        </h2>
                    </div>
                    <div className={styles.inputs}>
                        <input className={styles.input + " input-reset"} type="text" name="name" required placeholder="Name" />
                        <input className={styles.input + " input-reset"} type="email" name="email" required placeholder="Email" />
                    </div>
                    <textarea className={styles.textarea} name="message" required placeholder="Message"></textarea>
                    <button className={styles.button + " button-reset"} type="submit">Send Now</button>
                </form>
            </div>
        </section>
    );
}

export default Form;