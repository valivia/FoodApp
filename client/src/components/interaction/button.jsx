import styles from './button.module.scss'


const Button = (props) => {

    const variant = props.variant ?? "primary";
    const size = props.size ?? "medium";
    return (
        <button
            className={styles.main}
            data-variant={variant}
            data-size={size}
            {...props}
        >
            {props.children}
        </button>
    )
}

export { Button };