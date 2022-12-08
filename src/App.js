
import { Box} from '@mui/material';
import './App.css'
import NavigationMenu from './components/NavigationMenu';
import TopAdvertisement from './components/TopAdvertisement';
function App() {
  return (
    <Box sx={{width:"75%", height:"auto", margin:'30px auto'}}> 
      <TopAdvertisement/>
      <NavigationMenu/>
    </Box>
  );
}

export default App;
