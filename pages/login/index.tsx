import type { NextPage } from "next";
import styles from "./login.module.css";
import Link from "next/link";
import LoginPopup from "../../components/popupComponent";

const LoginPage: NextPage = () => {
  const content = (
    <div>
      <form>
        <h3>Enter your email</h3>
        <input type="text" name="email" />

        <h3>Enter your password</h3>
        <input type="text" name="password" />

        <div className={styles.links}>
          <Link href="/disclaimer">
            <a>Previous</a>
          </Link>

          <span className={styles.user_links}>
            <button onClick={(event) => event.preventDefault()}>Login</button>
            <button onClick={(event) => event.preventDefault()}>
              Register
            </button>
          </span>
        </div>
      </form>
    </div>
  );

  return (
    <LoginPopup header="Sign in" content={content} initialToggled={true} />
  );
};

export default LoginPage;
