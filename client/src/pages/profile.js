import { Input } from '../components/interaction/input';
import { Wrapper } from '../components/layout/wrapper';
import styles from './profile.module.scss';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/interaction/button';

function ProfilePage() {
  const [errors, setErrors] = useState([]);
  const { register, handleSubmit, reset, watch } = useForm();
  const navigate = useNavigate();


  const firstName = 'Sophia'
  const lastName = 'van Lieshout'
  const fullName = firstName + ' ' + lastName
  const emailAddress = 'sophiavl300@gmail.com'
  const height = 180;
  const weight = 63;

  return (
    <Wrapper className={styles.main}>

      <div className={styles.avatar}>
        <img src='/assets/avatar.jpg' alt='avatar'></img>
      </div>

      <h1>{watch("name")}</h1>
      <form className={styles.form}>
        <h2>Account</h2>

        <Input
          type='text'
          {...register("name", { required: true })}
          required
        />

        <Input
          type='email'
          {...register("email", { required: true })}
          required
        />

        <h2>Measurements</h2>

        <Input
          type='number'
          {...register("height", { required: true })}
          required
        />

        <Input
          type='number'
          {...register("weight", { required: true })}
          required
        />

        <ul className={styles.errors}>
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>

        <div className={styles.buttons}>
          <Button type='submit'>Save</Button>
        </div>
      </form>
    </Wrapper>
  )
}

export default ProfilePage