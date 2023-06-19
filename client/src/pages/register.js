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
        <section className={styles.registerPage}>
            <h2>Register</h2>
            <form className={styles.registerForm} onSubmit={handleSubmit}>
                <label>Username:</label>
                <input
                type='text'
                name='username'
                value={formData.username}
                onChange={handleChange}/>
            
                <label>Email:</label>
                <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}/>
                
                <label>Password:</label>
                <input
                type='password'
                name='password'
                value={formData.password}
                onChange={handleChange}/>
                
                <label>Weight:</label>
                <input
                type='number'
                name='weight'
                
                value={formData.weight}
                onChange={handleChange}/>
               

                <label>Height:</label>
                <input
                type='number'
                name='height'
                value={formData.height}
                onChange={handleChange}/>
                
                <br/>
                <section className={styles.buttonWrapper}>
                <button type='submit'><p>Register</p></button>
                </section>
            </form>
        </section>
    )
}

export default RegisterPage