import type { NextPage } from "next";
/* Import the component here in order to use it */
import ExampleComponent from "../../components/exampleComponent";
import BackgroundComponent from "../../components/backgroundComponent";

const MainContent: NextPage = () => {
  return (
    <div className="">
        <BackgroundComponent />
        {/* <ExampleComponent/> */}

    </div>
  )
}

export default MainContent;
