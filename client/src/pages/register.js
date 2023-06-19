import { useState } from 'react';
import styles from '../pages/register.module.css';

function RegisterPage () {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        weight: '',
        height: '',
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <section className={styles.registerpage}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                    type='text'
                    name='username'
                    value={formData.username}
                    onChange={handleChange}/>
                </label>

                <label>
                    Email:
                    <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}/>
                </label>

                <label>
                    Password:
                    <input
                    type='text'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}/>
                </label>

                <label>
                    Weight:
                    <input
                    type='text'
                    name='weight'
                    value={formData.weight}
                    onChange={handleChange}/>
                </label>

                <label>
                    Height:
                    <input
                    type='text'
                    name='height'
                    value={formData.height}
                    onChange={handleChange}/>
                </label>
                <br/>
                <button type='submit'>Register</button>
            </form>
        </section>
    )
}

export default RegisterPage