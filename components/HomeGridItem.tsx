/* Home grid item for each section of II */

import React, { Component } from 'react';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import styles from './quiz.module.css'

interface HomeGridItemProps {
  section: string;
  module1: string;
  module2: string;
  module3: string;
  module4: string;
}

class HomeGridItem extends Component<HomeGridItemProps> {
  render() {
    const { section, module1, module2, module3, module4 } = this.props;
    return (
        <>
        <h1>{ section }</h1>
        <Grid container spacing={2}>
        <Grid item xs={3} style={{background: 'blue'}}>
            <h2>{ module1 }</h2>
            <Button variant="contained">Go</Button>
        </Grid>
        <Grid item xs={3} style={{background: 'red'}}>
            <h2>{ module2 }</h2>
            <Button variant="contained">Go</Button>
        </Grid>
        <Grid item xs={3} style={{background: 'blue'}}>
            <h2>{ module3 }</h2>
            <Button variant="contained">Go</Button>
        </Grid>
        <Grid item xs={3} style={{background: 'red'}}>
            <h2>{ module4 }</h2>
            <Button variant="contained">Go</Button>
        </Grid>
        </Grid>
        </>
    );
  }
}

export default HomeGridItem;