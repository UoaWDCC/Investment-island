/* Multiple-choice quiz */

import React, { Component } from 'react';
import { Button } from '@mui/material';
import { Radio } from '@mui/material';
import styles from './quiz.module.css'

interface QuizProps {
  question_number: number,
  question: string
}

class Quiz extends Component<QuizProps> {
  render() {
    const { question_number, question } = this.props;
    return (
      <div className={styles.quiz}>
        <h1>Question {question_number.toString()}</h1>
        <hr className={styles.divider}/>
        <p >{question}</p>
        <div className={styles.options_container}>
          {/* <Radio value="(A)" /> */}
          {/* <FormControlLabel value="(A)" className={styles.option_button} /> */}
          <Button className={styles.option_button} variant="outlined">(A)</Button>
          <Button className={styles.option_button} variant="outlined">(B)</Button>
          <Button className={styles.option_button} variant="outlined">(C)</Button>
          <Button className={styles.option_button} variant="outlined">(D)</Button>
        </div>
        <div className={styles.nav_buttons_container}>
          <Button className={styles.nav_button}>Prev.</Button>
          <Button className={styles.nav_button}>Next</Button>
        </div>
      </div>
    );
  }
}

export default Quiz;

// export default function Quiz() {
//   return (
//     <div className="styles.quiz">
//       <button>(A)</button>
//       <button>(A)</button>
//       <button>(A)</button>
//       <button>(A)</button>

//     </div>
//   );
// }