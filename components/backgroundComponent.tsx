import type { NextPage } from 'next'
import { useState } from 'react';
import styles from "./backgroundComponent.module.css";

// Type definition for the props that are being passed in
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
                    <button className={styles.close_button} onClick={() => setToggled(false)}>
                        <span aria-hidden="true" className={styles.close_span} onClick={() => setToggled(false)}> 
                            &times;
                        </span>
                    </button>
                    <h1 className={styles.header}>{header}</h1>
                    <hr className={styles.separator}/>
                    <h3 className={styles.description}>{description}</h3>
                </div>
            }

            {!toggled && 
                <button onClick={() => setToggled(!toggled)}>Click to toggle popup!</button>
            }   
        </div>
    );
}

export default Background;