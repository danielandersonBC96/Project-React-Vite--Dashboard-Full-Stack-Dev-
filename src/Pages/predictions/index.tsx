import DashboardBox from '@/Components/DashboardBox';
import FlexBetween from '@/Components/FlexBetween.';
import { useGetKpisQuery } from '@/states/Api';
import { Box,Button,Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import {
     CartesianGrid, 
     Legend, 
     Line, 
     LineChart, 
     ResponsiveContainer, 
     Tooltip, 
     XAxis, 
     YAxis } from 'recharts';


type Props = {}

const  Predications = (props: Props) => {
    
    const { palette } =  useTheme();
    const [ isPredictions, setIsPredictions ] = useState(false);
    const { data : kpiData} = useGetKpisQuery()

  return (

    <DashboardBox

    width={'100%'}
    height={'100%'}
    p={'1rem'}
    overflow={'hidden'}
    >
        <FlexBetween m='1rem 2.5rem' gap='0.3rem'>
            <Box>
                <Typography variant='h3'>
                    Revenue and Predications
                </Typography>
                <Typography variant='h6'>
                    Revenue and predicated  base on a simple linear regression model 
                </Typography>
            </Box>
            <Button
            onClick={() => setIsPredictions(!isPredictions)}
            sx={{
                color:palette.grey[900],
                boxShadow: "0.1rem 0.1rem 0.1rem rgba(0,0,0,.4)",
                backgroundColor: palette.grey[700],

            }}
            >
             Show Predicted Revenue for next Year 

            </Button>
          


        </FlexBetween>

        <ResponsiveContainer  width={"100%"} height={"100%"}>
                <LineChart
                margin={
                    {
                        top:15,
                        right:0,
                        left:-10,
                        bottom:55,
                    }
                }
                >
                    <CartesianGrid vertical={false} stroke={palette.grey[800]}/>
                    <XAxis dataKey={"name"}
                    tickLine={false}
                    style={{fontSize: "10px"}}

                    />
                    <YAxis
                    yAxisId={"left"}
                    tickLine={false}
                    axisLine={false}
                    style={{fontSize: "10px"}} 
                    />
                    
                    <Tooltip/>
                    <Legend
                    height={20} wrapperStyle={{
                     margin: ' 0 0 10px 0 '
                    }}
                    />
                    <Line
                    yAxisId={"left"}
                    type={"monotone"}
                    dataKey={"profit"}
                    stroke={palette.tertiary[500]}
                    
                    />
                      <Line
                      
                      yAxisId={"left"}
                      type={"monotone"}
                      dataKey={"revenue"}
                      stroke={palette.primary[500]}
                      
                      />
                </LineChart>  
             </ResponsiveContainer>
    </DashboardBox>
  )


}


export default Predications;