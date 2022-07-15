import type { NextPage } from "next";
import { Grid } from '@mui/material';
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Welcome from "../components/popupComponent";
import SignUpBox from "../components/SignUpBox";
import HomeGridItem from "../components/HomeGridItem";
import Quiz from "../components/quiz";

// The main entry point
const Home: NextPage = () => {
  const content = (
    <>
      <Link href="/disclaimer">
        <a>Next</a>
      </Link>
    </>
  );

  return ( // Home page is here - currently all placeholder buttons and stuff until we get the art
    <>
      <h1>Sign up placeholder here:</h1>
      <div>
        <SignUpBox />
      </div>
      <div>
        <h1>Welcome page and disclaimer placeholder here</h1>
        <Welcome
          header="Welcome to Investment Island!"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci urna, dignissim non egestas id, lobortis ut erat. Aliquam erat volutpat. Nam eget ultrices metus. Mauris id venenatis dolor, at molestie risus. Etiam vitae diam purus. Proin non facilisis purus. Fusce id mauris vitae quam fringilla rhoncus a a dui. Cras id dignissim leo, fringilla accumsan sapien.
        Nunc pellentesque ante lorem, sed sodales ex lacinia et. Quisque vehicula justo porttitor arcu rhoncus suscipit. Aliquam lobortis ex scelerisque ipsum aliquam, sed tempor neque lobortis. Etiam sit amet nulla ligula. Nulla eget finibus dui. Fusce nec eleifend ante. Aenean sit amet sem ut odio dignissim gravida et et metus. Maecenas eu eleifend metus. Aenean lobortis lorem mi, sed scelerisque magna ultrices feugiat. 
        Integer posuere lorem pharetra placerat egestas."
          content={content}
        />
      </div>
      <div>
        <HomeGridItem 
          section="Time Tundra"
          module1="Interest rates, and terms"
          module2="Managed funds (including retirement funds)"
          module3="Bonds (govt bonds, company bonds, bond maturity dates)"
          module4="Review"
         />
         <HomeGridItem 
          section="Commodity Cave"
          module1="Commodity basics - why buy, storing value in items rather than money
          "
          module2="How to get into commodities - owning it, index funds, commodity funds"
          module3="Futures and futures based commodity funds -  what is a future?"
          module4="Review"
         />
         <HomeGridItem 
          section="Property Plains"
          module1="Property basics, mortgages, capital gains"
          module2="Equity and leverage - using houses to buy more houses"
          module3="Renting, tenants, property management, yield"
          module4="Review"
         />
         <HomeGridItem 
          section="Forex Forest"
          module1="How do you make money on forex, what influences forex"
          module2="Forex fundamentals, chart reading, bid-ask, pips"
          module3="Leverage and magnifying money, risks"
          module4="Review"
         />
         <HomeGridItem 
          section="Crypto Cove"
          module1="What is crypto? What is the blockchain? How does this make me money?"
          module2="Crypto extended - wallets, addresses/hashes, gas fees, contracts"
          module3="Coins and derivatives, trading and virtual monkeys"
          module4="Review"
         />
         <HomeGridItem 
          section="Stock Slopes"
          module1="Stock basics - public companies, what is a share, how does this help companies and people"
          module2="Mutual funds, index funds, etfs, what they are, diversification"
          module3="Options and futures (how does this differ from commodity futures)"
          module4="Review"
         />
         <HomeGridItem 
          section="THE GRAND FINALE"
          module1=""
          module2=""
          module3=""
          module4=""
         />
      </div>

    </>
  );
};

export default Home;
