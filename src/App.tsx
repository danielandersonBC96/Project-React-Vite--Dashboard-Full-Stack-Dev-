import { ThemeProvider, createTheme } from '@mui/material';
import { useMemo } from 'react';
import {  themeSettings} from './theme';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from "@mui/material"
import { BrowserRouter, Route , Routes } from 'react-router-dom';

function App() {

  const theme = useMemo( () => createTheme(themeSettings), [] )

  return <div className='app'> 

  <ThemeProvider theme={theme}>

    <CssBaseline/>
     <Box width={'100%'}
     height={"100%"}
     padding={" 1rem 2rem 4rem 2 rem"}
     >
      <Routes>
        <Route  path='/' element={ <div> Dashboard page </div>}/> 
        <Route path='/predictions' element={<div> Predication page </div>}/>
      </Routes>
     </Box>
  </ThemeProvider>
  
  
   </div>
}

export default App
