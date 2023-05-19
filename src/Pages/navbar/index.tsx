import { useState} from  'react';
import { Link } from 'react-router-dom';
import { Box, Typography, useTheme} from '@mui/material'
import FlexBetween from '@/Components/FlexBetween.';
import PixIcon from "@mui/icons-material/Pix"

type Props= {

}

const Navbar = ( props: Props) => {
    
     const { palette} = useTheme()
     const [selected, setSelected] =  useState('Dashboard')

     return <FlexBetween
              mb={'0.25rem'}
              p={'0.5rem  0rem '}
             color={palette.grey['300']}
             >

                {/* LEFT SIDE */}

                <FlexBetween gap={'0.75rem'}>
                    <PixIcon
                    sx={{
                        fontSize: "28px"
                    }}
                    />
                    <Typography 
                    variant='h5'
                    fontSize={'13px'}
                    >
                       Dashboard Finanseer 
                    </Typography>
                     
                     
                   
                </FlexBetween>

              

                {/* RIGHT SIDE */}

                <FlexBetween
                gap={'2rem'}
                >
                    <Box sx={{ "&:houver":{ color: palette.primary['100']}}}>
                        <Link
                        to={'/'}
                        onClick={() => setSelected("Dashboard")}
                        style={{

                            color: selected === "Dashboard" ? "inherit" : palette.grey[700],
                            textDecoration: 'inherit'
                        }}
                        >
                           Dashboard
                        </Link>
                    </Box>
                    <Box sx={{ "&:houver":{ color: palette.primary['100']}}}>
                        <Link
                        to={'/predictions'}
                        onClick={() => setSelected("predictions")}
                        style={{

                            color: selected === "predictions" ? "inherit" : palette.grey[700],
                            textDecoration: 'inherit'
                        }}
                        >
                           Predictions 
                        </Link>
                    </Box>

                </FlexBetween>
            </FlexBetween>
}

export default Navbar ;