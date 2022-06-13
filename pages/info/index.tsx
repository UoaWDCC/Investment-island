import type { NextPage } from "next";
import Link from "next/link";
import Background from "../../components/backgroundComponent";

const WelcomePage: NextPage = () => {
  const content = (
    <Link href="/login">
      <a>Next</a>
    </Link>
  );

  return (
    <div>
      <Background
        header="Welcome"
        description="Welcome to Investment Island!"
        content={content}
      />
    </div>
  );
};

export default WelcomePage;
