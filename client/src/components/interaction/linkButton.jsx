import styles from './button.module.scss'
import { Link } from "react-router-dom";

const LinkButton = ({ children, variant = "primary", size = "medium", href }) => {
    return (
        <Link
            to={href}
            className={styles.main}
            data-variant={variant}
            data-size={size}
        >
            {children}
        </Link>
    )
}

export { LinkButton };