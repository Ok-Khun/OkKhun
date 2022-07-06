import styles from "../styles/Contact.module.css"
import React, { FormEvent, useRef } from "react"
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form:React.MutableRefObject<any> = useRef(null)
    const sendEmail = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs.sendForm(process.env.SERVICE_NUMBER as string, process.env.TEMPLATE_NUMBER as string, form.current, 'tABnolPbV2ENmW-MN')
          .then((result) => {
              if(result.text) {
                // clear form inputs
                form.current.reset()
                alert("message received!")
              }
          }, (error) => {
              if(error) {
                alert("Something went wrong, Please try again later!")
              }
          });
      };

    return (
        <div className={styles.contact}>
            <h2>Drop a message!</h2>
            <div className={styles.contactForm}>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>

            </div>
        </div>
    )
}

export default Contact