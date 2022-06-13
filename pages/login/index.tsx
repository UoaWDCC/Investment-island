import type { NextPage } from 'next';
import LoginPopup from "../../components/popupComponent";

const LoginPage: NextPage = () => {
    const content = (
        <div>

        </div>
    );

    return (
        <LoginPopup header="Sign in" content={content}/>
    );
}

export default LoginPage;