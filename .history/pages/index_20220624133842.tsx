import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Welcome from "../components/popupComponent";

// The main entry point
const Home: NextPage = () => {
  const content = (
    <Link href="/disclaimer">
      <a>Next</a>
    </Link>
  );

  return (
    <div>
      <Welcome
        header="Welcome to Investment Island!"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci urna, dignissim non egestas id, lobortis ut erat. Aliquam erat volutpat. Nam eget ultrices metus. Mauris id venenatis dolor, at molestie risus. Etiam vitae diam purus. Proin non facilisis purus. Fusce id mauris vitae quam fringilla rhoncus a a dui. Cras id dignissim leo, fringilla accumsan sapien.
        Nunc pellentesque ante lorem, sed sodales ex lacinia et. Quisque vehicula justo porttitor arcu rhoncus suscipit. Aliquam lobortis ex scelerisque ipsum aliquam, sed tempor neque lobortis. Etiam sit amet nulla ligula. Nulla eget finibus dui. Fusce nec eleifend ante. Aenean sit amet sem ut odio dignissim gravida et et metus. Maecenas eu eleifend metus. Aenean lobortis lorem mi, sed scelerisque magna ultrices feugiat. 
        Integer posuere lorem pharetra placerat egestas."
        content={content}
      />
    </div>
  );
};

export default Home;
