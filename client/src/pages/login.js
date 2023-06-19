import styles from './auth.module.scss';
import { Input } from '../components/interaction/input';
import { Button } from '../components/interaction/button';
import { LinkButton } from '../components/interaction/linkButton';
import { useState } from 'react';

function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();

        const response = fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .catch(err => ({ error: err }));

        console.log(response);
    };

    return (
        <main className={styles.main}>
            <h2>Log In</h2>
            <form className={styles.form} onSubmit={onSubmit} >
                <Input
                    type='text'
                    name='email'
                    placeholder='E.g John@gmail.com'
                    onChange={e => setFormData({ ...formData, [e.target.name]: e.target.value })}
                />

                <Input
                    type='password'
                    name='password'
                    placeholder='Password'
                    onChange={e => setFormData({ ...formData, [e.target.name]: e.target.value })}
                />

                <section className={styles.buttonWrapper}>
                    <LinkButton type='submit' variant="secondary" href="/register">Register</LinkButton>
                    <Button type='submit' variant="primary">Submit</Button>
                </section>
            </form>
        </main>
    )
}

export default LoginPage