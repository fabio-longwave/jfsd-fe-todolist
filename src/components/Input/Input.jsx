import styles from "./Input.module.css";
import {useEffect} from "react";

// eslint-disable-next-line react/prop-types
const Input = ({label, id, error, ...props}) => {
    useEffect(() => {
        console.log(error)
    }, [error]);
    return (
        <div className={styles.field}>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props} />
            {error && <p className={styles.error}>{error}</p>}
        </div>
    )
}

export default Input;