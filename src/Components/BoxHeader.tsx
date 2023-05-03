import React from 'react'
import FlexBetween from './FlexBetween.'
import {
 Box ,  
 Typography, 
 useTheme} from '@mui/material';

type Props = {
 
    icon?: React.ReactNode;
    title: string;
    subtitle: string;
    sidText: string ;
}


const BoxHeader = (  { icon, title, subtitle, sidText}: Props) => {
    
    const { palette} =  useTheme()

    return(
        <FlexBetween
        color={ palette.grey[400]}
        margin={"1.5rem 1rem 0 1 rem "}
        >
            <FlexBetween>
                {icon}
                  <Box
                   width={"100%"}
                   >
                     <Typography
                     variant='h4'
                     mb={"-0.1rem"}
                     >
                          {title}

                     </Typography>
                    <Typography
                   variant='h6'
                   >
                        {subtitle}
                    </Typography>
                    <Typography
                    variant='h5'
                    fontWeight={"700"}
                    color={palette.secondary[500]}
                    >
                        {sidText}
                    </Typography>

                   </Box>

            </FlexBetween>
        </FlexBetween>
    )
}

export default BoxHeader;