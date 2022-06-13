import type { NextPage } from "next";
import Link from "next/link";
import Disclaimer from "../../components/popupComponent";

const InfoPage: NextPage = () => {
  const content = (
    <span>
      <Link href="/">
        <a>Previous</a>
      </Link>
      <Link href="/login">
        <a>Continue with Google</a>
      </Link>
      <Link href="/login">
        <a>Continue with Facebook</a>
      </Link>
      <Link href="/login">
        <a>Continue with Email</a>
      </Link>
    </span>
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
