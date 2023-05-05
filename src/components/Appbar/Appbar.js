import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Switch} from "@mui/material";

export default function ButtonAppBar({ check, change, darkMode }) {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        { darkMode ? 'Dark Mode' : 'Light Mode'}
                    </Typography>
                    <Switch
                        defaultChecked
                        color="default"
                        inputProps={{ 'aria-label': 'checkbox with default color'}}
                        onChange={change}
                        checked={check}
                    />
                </Toolbar>
            </AppBar>
        </Box>
    );
}