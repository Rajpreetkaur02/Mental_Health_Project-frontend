import React, { useEffect, useState } from 'react';
import './Plan.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { FaSquareFontAwesomeStroke } from 'react-icons/fa6';

function Plan() {
    const [age, setAge] = useState('');
    const [planDetail, setPlanDetail] = useState({});
    // const [week, setWeek] = useState(1);

    useEffect(() => {
        fetch(`http://localhost:8080/user/${localStorage.getItem('email')}`, {
            crossDomain: true,
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        }).then((res) => res.json())
        .then((data) => {
            setAge(data.age)
        });
    })

    useEffect(() => {
        // console.log(week)
        if (age != '') {
        fetch(`http://localhost:8080/plans/plan/${age}`, {
            crossDomain: true,
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        }).then((res) => res.json())
        .then((data) => {
            setPlanDetail(data)
        });
        }
    })

    // useEffect(() => {
    //     const updateWeek = () => {
    //         setWeek((prevCount) => prevCount + 1);
    //       };
      
    //     const intervalId = setInterval(updateWeek, 10000);
    
    //     return () => clearInterval(intervalId);
    // },[])
    

    return (
        <>
            <div className='mainPlanPage'>
                <h3>Your This Week's Plan</h3>
                <Box className="planBox" sx={{ width: '100%' }}>
                    <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid className='planBoxItem' item xs={6}>
                                <p><strong>Task</strong></p>
                            </Grid>
                            <Grid className='planBoxItem' item xs={6}>
                                <p><strong>Completed</strong></p>
                            </Grid>
                            </Grid>
                        {/* </Grid> */}
                        {planDetail.length > 0 && planDetail.map((ele, idx) => (
                            <Grid key = {idx} container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid className='planBoxItem' item xs={6}>
                                <p>{ele}</p>
                            </Grid>
                            <Grid className='planBoxItem' item xs={6}>
                                <input type="checkbox" style={{transform: 'scale(1.2)'}}/>
                            </Grid>
                            </Grid>
                        ))}
                        {/* <Grid className='planBoxItem' item xs={6}>
                            <p>Play Games</p>
                        </Grid>
                        <Grid className='planBoxItem' item xs={6}>
                            <input type="checkbox" style={{transform: 'scale(1.2)'}}/>
                        </Grid> */}
                    {/* </Grid> */}
                </Box>
            </div>
        </>
    )
}

export default Plan