import { useState } from 'react';
import styles from './auth.module.scss';
import { Button } from '../../components/interaction/button';
import { Input } from '../../components/interaction/input';
import { LinkButton } from '../../components/interaction/linkButton';
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';

function RegisterPage() {
    const [errors, setErrors] = useState([]);
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/register`, {
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
            return navigate('/');
        }

        const json = await response.json();
        setErrors([].concat(json.message));
    };

    return (
        <main className={styles.main}>

            <h2>Register</h2>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>


                <Input
                    type='text'
                    {...register("name", { required: true })}
                />


                <Input
                    type='email'
                    {...register("email", { required: true })}
                />


                <Input

                    type='password'
                    {...register("password", { required: true })}
                />

                <Input
                    type='number'
                    placeholder='Weight in kg'
                    {...register("weight", { required: true, valueAsNumber: true })}
                />

                <Input
                    type='number'
                    placeholder='Height in cm'
                    {...register("height", { required: true, valueAsNumber: true })}
                />

                <Input
                    type='date'
                    name='birthday'
                    {...register("birthday", { required: true, valueAsDate: true })}
                />

                <ul className={styles.errors}>
                    {errors.map((error, index) => (
                        <li key={index}>{error}</li>
                    ))}
                </ul>

                <section className={styles.buttonWrapper}>
                    <LinkButton type='submit' variant="secondary" href="/login">Login</LinkButton>
                    <Button type='submit' variant="primary">Submit</Button>
                </section>
            </form>
        </main>
    )
}

export default RegisterPage