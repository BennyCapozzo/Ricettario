import { Box, Button } from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AddIcon from '@mui/icons-material/Add';
import './sidebar.styles.scss';
import { useState } from 'react';
import { ISidebarProps } from './sidebar.interfaces';
import { getAuth, signOut } from 'firebase/auth';
import app from '../../firebaseConfig';

const Sidebar = ({handleSelectedTabChange}: ISidebarProps) => {
    const [selected, setSelected] = useState<number>(0);
    const auth = getAuth(app);

    const handleClick = (index: number) => {
        setSelected(index);
        handleSelectedTabChange(index);
    }

    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

  return <Box className="sidebar">
  <Box >
  <Box className="sidebar__icon" onClick={() => handleClick(0)}  style={{backgroundColor: selected === 0 ? '#1cff42' : 'inherit'}}><RestaurantIcon /></Box>
  <Box className="sidebar__icon" onClick={() => handleClick(1)} style={{backgroundColor: selected === 1 ? '#1cff42' : 'inherit'}}><AddIcon /></Box>
  </Box>
  <Button variant="text" sx={{color: '#1cff42'}} onClick={handleLogout}>Logout</Button>
  </Box>;
};

export default Sidebar;

