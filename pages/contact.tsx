import styles from "../styles/Contact.module.css"

import React, { useState } from "react"

type MessageType = {
    email: string;
    message: string;
}

const Contact = () => {
    const [item, setItem] = useState<MessageType>({
        email: "",
        message: ""
    })

    const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        e.preventDefault()
        const {name, value} = e.target;
        setItem((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = await fetch("/api/hello")
        const result = await data.json()
        console.log(result)
    }

    return (
        <div className={styles.contact}>
            <h2>Drop a message!</h2>
            <div className={styles.contactForm}>
                <form onSubmit={handleSubmit}>
                    <label>Email Address</label>
                    <input type="email" name="email" onChange={handleChange} required/>
                    <label>Message</label>
                    <textarea name="message" onChange={handleChange} 
                    required></textarea>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    )
}

export default Contact