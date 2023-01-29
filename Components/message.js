import React from 'react'
import styles from "../styles/Message.module.css";


const Message = ({ user, message, classs }) => {
    if (user) {
        return (
            <div className={styles.left}  >
                {`${user}: ${message}`}
            </div>
        )
    }
    else {


        return (
            <div className={styles.right}>
                {`You: ${message}`}
            </div>
        )
    }
}

export default Message
