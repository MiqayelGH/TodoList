import styles from './styles.module.css'

function Input({placeholder}) {
    return (
        <input
            type='text'
            placeholder={placeholder}
            className={styles.input}
        />
    )
}

export default Input