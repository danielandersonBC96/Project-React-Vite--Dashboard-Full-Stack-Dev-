import DashboardBox from '@/Components/DashboardBox';
import FlexBetween from '@/Components/FlexBetween.';
import { useGetKpisQuery } from '@/states/Api';
import { Box,Button,Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';


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
        <FlexBetween m='1rem 2.5rem'>
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
                boxShadow: "0.1rem 0.1rem 0.1rem rgba(0,0,0,.4",
                backgroundColor: palette.grey[700]

            }}
            >
             

            </Button>
        </FlexBetween>
    </DashboardBox>
  )


}


export default Predications;