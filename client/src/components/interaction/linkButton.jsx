import styles from './button.module.scss'


const LinkButton = ({ children, variant = "primary", size = "medium", href }) => {
    return (
        <a
            href={href}
            className={styles.main}
            data-variant={variant}
            data-size={size}
        >
            {children}
        </a>
    )
}

export { LinkButton };