import RegisterPopup from "../../components/popupComponent";
import styles from "./register.module.css";
import Link from "next/link";

const Register = () => {
  const content = (
    <div>
      <form>
        <h3>Enter your email</h3>
        <input type="text" name="email" placeholder="bob@gmail.com" required />

        <h3>Enter your password</h3>
        <input type="text" name="password" placeholder="12345" required />

        <h3>Re-enter your password</h3>
        <input
          type="text"
          name="confirmPassword"
          placeholder="12345"
          required
        />

        <div className={styles.links}>
          {/* <Link href="/disclaimer">
            <a>Previous</a>
          </Link> */}

          <span className={styles.user_links}>
            <Link href="/login">Login</Link>
            <button onClick={(event) => event.preventDefault()}>
              Register
            </button>
          </span>
          <span className={styles.social_login}>
            <Link href="/login">
              <a className={styles.link}>Continue with Google</a>
            </Link>
            <Link href="/login">
              <a className={styles.link}>Continue with Facebook</a>
            </Link>
            <Link href="/login">
              <a className={styles.link}>Continue with Email</a>
            </Link>
          </span>
        </div>
      </form>
    </div>
  );

  return (
    <>
      <RegisterPopup
        header="Register"
        description="Register a new account with investment island"
        initialToggled={true}
        content={content}
      />
    </>
  );
};

export default Register;
