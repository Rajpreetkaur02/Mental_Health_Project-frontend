import React from 'react';
import '../styles/Plan.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function Plan() {
    return (
        <>
            <div className='mainPlanPage'>
                <h3>Your Today's Plan</h3>
                <Box className="planBox" sx={{ width: '100%' }}>
                    <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid className='planBoxItem' item xs={6}>
                            <p><strong>Task</strong></p>
                        </Grid>
                        <Grid className='planBoxItem' item xs={6}>
                            <p><strong>Completed</strong></p>
                        </Grid>
                        <Grid className='planBoxItem' item xs={6}>
                            <p>Have a morning walk</p>
                        </Grid>
                        <Grid className='planBoxItem' item xs={6}>
                            <input type="checkbox" style={{transform: 'scale(1.2)'}}/>
                        </Grid>
                        <Grid className='planBoxItem' item xs={6}>
                            <p>Play Games</p>
                        </Grid>
                        <Grid className='planBoxItem' item xs={6}>
                            <input type="checkbox" style={{transform: 'scale(1.2)'}}/>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </>
    )
}

export default Plan