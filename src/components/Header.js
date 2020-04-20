import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'

import useStyles from './styles'

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.headerContainer}>
      <AppBar style={{boxShadow: "none"}} position="static">
        <Container>
            <Toolbar>
                <Typography variant="h6" className={classes.headerTitle}>
                    News
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
