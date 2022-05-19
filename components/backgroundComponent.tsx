import type { NextPage } from 'next'
import { useState } from 'react';
import styles from "./backgroundComponent.module.css";
interface BackgroundProps {
    header: string,
    description: string
}

// Background popup for investment island 
const Background: NextPage<BackgroundProps> = props => {
    const { header, description } = props;
    const [toggled, setToggled] = useState(false);

    return ( 
        <div className={styles.popup}>
            {toggled &&
                <div className={styles.popup_content}>
                     <span className="close" onClick={() => setToggled(false)}> 
                        &times;
                    </span>
                    <h1 className="header">{ header }</h1>
                    <h3 className="description">{ description }</h3>
                </div>
            }

            {!toggled && 
                <button onClick={() => setToggled(!toggled)}>Click to toggle popup!</button>
            }   
        </div>
    );
}

export default Background;