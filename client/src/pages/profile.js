import styles from '../pages/profile.module.css';

function ProfilePage () {
const firstName = 'Sophia'
const lastName = 'van Lieshout'

    return (
        <section className={styles.profilePage}>
            <h1>{firstName} {lastName}</h1>
            <form className={styles.profileForm}>
                <h2>Account</h2>
                <label>Name</label>
                <input></input>
                <label>Email adress</label>
                <input></input>

                <h2>Measurements</h2>
                <label>Height</label>
                <input></input>
                <label>Weight</label>
                <input></input>
                <button type='submit'>Save</button>
            </form>
        </section>
    )
}

export default ProfilePage