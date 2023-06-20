import styles from './auth.module.scss';
import { Input } from '../../components/interaction/input';
import { Button } from '../../components/interaction/button';
import { LinkButton } from '../../components/interaction/linkButton';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useUser } from '../../util/useUser';

function LoginPage() {
    const [errors, setErrors] = useState([]);
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const { mutate } = useUser();

    const onSubmit = async (data) => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
            credentials: 'include',
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }).catch(err => {
            console.error(err);
            return;
        });

        if (!response) return;
        if (response.ok) {
            reset();
            await mutate();
            return navigate('/');
        }

        const json = await response.json();
        setErrors([].concat(json.message));
    };

    return (
        <main className={styles.main}>
            <h2>Log In</h2>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)} >
                <Input
                    type='text'
                    placeholder='E.g John@gmail.com'
                    {...register("email", { required: true })}
                    required
                />

                <Input
                    type='password'
                    placeholder='Password'
                    {...register("password", { required: true })}
                    required
                />

                <ul className={styles.errors}>
                    {errors.map((error, index) => (
                        <li key={index}>{error}</li>
                    ))}
                </ul>

                <section className={styles.buttonWrapper}>
                    <LinkButton type='submit' variant="secondary" href="/register">Register</LinkButton>
                    <Button type='submit' variant="primary">Submit</Button>
                </section>
            </form>
        </main>
    )
}

export default LoginPage