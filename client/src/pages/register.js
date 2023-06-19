import { useState } from 'react';
import styles from './auth.module.scss';
import { Button } from '../components/interaction/button';
import { Input } from '../components/interaction/input';
import { LinkButton } from '../components/interaction/linkButton';


function RegisterPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        weight: '',
        height: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const response = fetch(`${process.env.REACT_APP_API_URL}/auth/register`, {
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

            <h2>Register</h2>
            <form className={styles.form} onSubmit={handleSubmit}>


                <Input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                />


                <Input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                />


                <Input

                    type='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                />

                <Input
                    type='number'
                    name='weight'
                    placeholder='Weight in kg'
                    value={formData.weight}
                    onChange={handleChange}
                />

                <Input
                    type='number'
                    name='height'
                    placeholder='Height in cm'
                    value={formData.height}
                    onChange={handleChange}
                />

                <section className={styles.buttonWrapper}>
                    <LinkButton type='submit' variant="secondary" href="/login">Login</LinkButton>
                    <Button type='submit' variant="primary">Submit</Button>
                </section>
            </form>
        </main>
    )
}

export default RegisterPage