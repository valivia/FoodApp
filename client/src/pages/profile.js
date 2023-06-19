import styles from '../pages/profile.module.css';

function ProfilePage () {
const firstName = 'Sophia'
const lastName = 'van Lieshout'
const fullName = firstName + ' ' + lastName
const emailAddress = 'sophiavl300@gmail.com'
const height = 180;
const weight = 63;

    return (
        <section className={styles.profilePage}>
            <div className={styles.avatar}></div>
            {/* <img src='src/assets/avatar.jpg' alt='avatar'></img> */}
            <h1>{firstName} {lastName}</h1>
            <form className={styles.profileForm}>
                <h2>Account</h2>
                <label>Name</label>
                <input type='text' value={fullName}></input>
                <label>Email adress</label>
                <input type='text' value={emailAddress}></input>

                <h2>Measurements</h2>
                <label>Height</label>
                <input type='number' value={height}></input>
                <label>Weight</label>
                <input type='number' value={weight}></input>

                <section className={styles.buttonWrapper}>
                <button type='submit'>Save</button>
                </section>
            </form>
        </section>
    )
}

export default ProfilePage