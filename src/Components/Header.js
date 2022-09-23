import React from 'react'
import { AppBar, Container, Toolbar, Typography, MenuItem, Select } from '@material-ui/core'
import { useHistory } from "react-router-dom";
import {
    createTheme,
    makeStyles,
    ThemeProvider,
} from "@material-ui/core/styles";
import { CryptoState } from '../Cryptocontext';
const useStyles = makeStyles((theme) => ({
    title: {
        flex: 1,
        color: "gold",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
    },
}));


const darkTheme = createTheme({
    palette: {
        primary: {
            main: "#fff",
        },
        type: "dark",
    },
});

const Header = () => {
    const classes = useStyles();
    const history = useHistory();
    const { currency, setCurrency } = CryptoState()
    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar color="transparent" position="static">
                <Container>
                    <Toolbar>
                        <Typography onClick={() => history.push(`/`)}
                            variant="h6" className={classes.title}>
                            Crypto Tracker
                        </Typography>
                        <Select variant="outlined" style={{ width: 100, height: 40, marginRight: 15 }} onChange={(e) => setCurrency(e.target.value)}>
                            <MenuItem value={'USD'} >USD</MenuItem>
                            <MenuItem value={'INR'}>INR</MenuItem>
                        </Select>
                    </Toolbar>

                </Container>
            </AppBar>
        </ThemeProvider>

    )
}

export default Header
