import type { NextPage } from 'next'
import { ReactElement, useState } from 'react';
import { Button } from '@mui/material';
import styles from "./MCQpopup.module.css";

// Type definition for the props that are being passed in
interface MCQprops {
    header: string,
    description?: string,
    content?: ReactElement,
    initialToggled?: boolean,
}

// Background popup for investment island 
const MCQpopup: NextPage<MCQprops> = props => {
    const { header, description, content, initialToggled } = props;
    const [toggled, setToggled] = useState(initialToggled || false);

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
                    <p className={styles.description}>{description}</p>
                    <div className={styles.options_container}>
                        <Button className={styles.option_button} variant="outlined">(A)</Button>
                        <Button className={styles.option_button} variant="outlined">(B)</Button>
                        <Button className={styles.option_button} variant="outlined">(C)</Button>
                        <Button className={styles.option_button} variant="outlined">(D)</Button>
                    </div>
                    <div className={styles.nav_buttons_container}>
                        <Button className={styles.nav_button}>Prev.</Button>
                        <Button className={styles.nav_button}>Next</Button>
                    </div>
                    {content}
                </div>
            }

            {
                <button onClick={() => setToggled(!toggled)}>Click to toggle popup!</button>
            }
               
        </div>
    );
}

export default MCQpopup;