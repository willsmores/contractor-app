export default function InformationPage(props) {
  const { onSubmit } = props;
  return (
    <form className="Signin" action={onSubmit}>
      <h1>Please enter your information</h1>
      <label htmlFor="firstname">FirstName</label>
      <input type="text" name="firstname" placeholder="Your Firstname" id="firstname" />
      <label htmlFor="surname">Surname</label>
      <input type="text" name="surname" placeholder="Your Surname" id="surname" />
      <button>Submit and Sign In</button>
    </form>
  );
}