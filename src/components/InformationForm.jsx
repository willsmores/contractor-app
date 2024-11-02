import styles from './InformationForm.module.scss';

export default function InformationForm({ onSubmit }) {
  return (
    <form className={styles.InformationForm} action={onSubmit}>
      <h1>Please enter your information</h1>
      <label htmlFor="firstname">First Name</label>
      <input type="text" name="firstname" placeholder="Your Firstname" id="firstname" />
      <label htmlFor="surname">Surname</label>
      <input type="text" name="surname" placeholder="Your Surname" id="surname" />
      <button type="submit">Submit and Sign In</button>
    </form>
  );
}