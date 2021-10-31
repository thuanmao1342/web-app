import React from 'react';
import Grid from '@mui/material/Grid';
import { FormControl, IconButton, InputAdornment, Link, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Home, LoginOutlined } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    header: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        padding: "5px 0px 5px 0px",
    },

});

function Header() {
    const classes = useStyles();
    return (
            <div className={classes.header}>
                    <Grid container>
                        <Grid item xs={3}
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                          }}>
                            <IconButton>
                                <Link to="/"><Home/></Link>
                            </IconButton>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl variant="outlined" fullWidth>
                                <OutlinedInput
                                    placeholder="search"
                                    size="small"
                                    fullWidth
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton>
                                                <SearchIcon/>
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={3}
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                          }}>
                            <IconButton>
                                <LoginOutlined/>
                            </IconButton>
                        </Grid>
                    </Grid>
            </div>
    );
}
export default Header;