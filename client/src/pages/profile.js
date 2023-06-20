import { Input } from '../components/interaction/input';
import { Wrapper } from '../components/layout/wrapper';
import styles from './profile.module.scss';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/interaction/button';
import useSWR from 'swr'
import { fetcher } from '../util/fetcher';
import { fetchMutate } from '../util/fetch';

function ProfilePage() {
  const { data: user, error, isLoading, mutate } = useSWR(`${process.env.REACT_APP_API_URL}/user`, fetcher);

  const [errors, setErrors] = useState([]);
  const { register, handleSubmit, reset, watch } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    reset({ ...user });
  }, [user, reset]);

  const onSubmit = async (data) => {
    const response = await fetchMutate("user", data, "PUT");

    if (!response) return;
    if (response.ok) {
      mutate();
    } else {
      setErrors([].concat(response.message));
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