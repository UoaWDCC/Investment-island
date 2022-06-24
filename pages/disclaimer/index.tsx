import type { NextPage } from "next";
import styles from "./disclaimer.module.css";
import Link from "next/link";
import Disclaimer from "../../components/popupComponent";

const InfoPage: NextPage = () => {
  const content = (
    <div>
      <Link href="/">
        <a>Previous</a>
      </Link>

      <span className={styles.logins}>
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
  );

  return (
    <div>
      <Disclaimer
        header="Disclaimer"
        description="Disclaimer text"
        content={content}
        initialToggled={true}
      />
    </div>
  );
};

export default InfoPage;
