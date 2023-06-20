import { Input } from '../components/interaction/input';
import { Wrapper } from '../components/layout/wrapper';
import styles from './profile.module.scss';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { Button } from '../components/interaction/button';
import { fetchMutate } from '../util/fetch';
import { useUser } from '../util/useUser';
import { useNavigate } from 'react-router-dom';

function ProfilePage() {
  const { user, mutate } = useUser();
  const navigate = useNavigate();

  const [errors, setErrors] = useState([]);
  const { register, handleSubmit, reset, watch } = useForm();

  useEffect(() => {
    reset({ ...user });
  }, [user, reset]);

  const onSubmit = async (data) => {
    const { response, json } = await fetchMutate("user", data, "PUT");

    if (!response) return;
    if (response.ok) {
      mutate();
      navigate("/");
    } else {
      setErrors([].concat(json.message));
    }
  };

  return (
    <Wrapper className={styles.main}>

      <div className={styles.avatar}>
        <img src='/assets/avatar.jpg' alt='avatar'></img>
      </div>

      <h1>{watch("name")}</h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h2>Account</h2>

        <Input
          type='text'
          label='First Name'
          {...register("firstName", { required: true })}
        />

        <Input
          type='text'
          label='Last Name'
          {...register("lastName", { required: true })}
        />

        <Input
          type='email'
          {...register("email", { required: true })}
          required
        />

        <h2>Measurements</h2>

        <Input
          type='number'
          placeholder='Height in cm'
          step='0.01'
          {...register("height", { required: true, valueAsNumber: true })}
        />

        <Input
          type='number'
          placeholder='Weight in kg'
          step='0.01'
          {...register("weight", { required: true, valueAsNumber: true })}
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