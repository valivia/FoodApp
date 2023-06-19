import styles from '../pages/login.module.css';

function LoginPage () {
    return (
        <section className={styles.loginPage}>
            <h2>Log In</h2>
            <form className={styles.loginForm}>
                <label for="username">Username:</label>
                <input type='text' id='username' name='username' required/>
                <label for="password">Password:</label>
                <input type='password' id='password' name='password' required/>
            </form>
            <section className={styles.buttonWrapper}>
                <button type='submit'>Register</button>
            </section>
        </section>
    )
}

export default LoginPage