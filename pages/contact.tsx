import styles from "../styles/Contact.module.css"

const Contact = () => {

    const handleSubmit = () => {
        alert("This hasn't worked yet!")
    }

    return (
        <div className={styles.contact}>
            <h2>Contact</h2>
            <div className={styles.contactForm}>
                <form onSubmit={handleSubmit}>
                    <label>Email Address</label>
                    <input type="email" name="email" required/>
                    <label>Message</label>
                    <textarea name="message" required></textarea>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    )
}

export default Contact