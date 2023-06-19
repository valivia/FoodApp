import styles from './input.module.scss'
import React from 'react';


const Input = React.forwardRef((props, ref) => {
    const label = props.label || props.name;

    return (
        <section className={styles.main}>

            <label
                htmlFor={label}
                className={styles.label}
            >
                {label}
            </label>

            <input
                id={label}
                {...props}
                label={undefined}
                className={styles.input}
                ref={ref}
            />

        </section>
    )
});

export { Input };