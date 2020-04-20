import React from 'react';
import useStyles from './styles'

export default function Footer () {
    const classes = useStyles();
    return(
        <footer className={classes.footerContainer}>
            &copy; Copyright {(new Date().getFullYear())}
        </footer>
    )
}