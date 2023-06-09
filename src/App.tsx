import { ThemeProvider, createTheme } from '@mui/material';
import { useMemo } from 'react';
import {  themeSettings} from './theme';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from "@mui/material"
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Navbar from '@/Pages/navbar'
import Dashboard from './Pages/Dashboard';
import Predications from './Pages/predictions';

function App() {

  const theme = useMemo( () => createTheme(themeSettings), [] )

  return <div className='app'> 
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
         <Box  
         width={"100%"}
         height={'100%'}
         padding={'1rem 2rem 4rem 2 rem '}
         >
          <Navbar/>
            <Routes >
               <Route path='/' element={ <Dashboard/>}/>
               <Route path='/predictions' element={ <Predications/>}/>
            </Routes>
         </Box>
    </ThemeProvider>
  </BrowserRouter>
 
 </div>
}

export default App
