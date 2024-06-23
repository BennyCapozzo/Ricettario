import { Box } from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AddIcon from '@mui/icons-material/Add';
import './sidebar.styles.scss';
import { useState } from 'react';
import { ISidebarProps } from './sidebar.interfaces';

const Sidebar = ({handleSelectedTabChange}: ISidebarProps) => {
    const [selected, setSelected] = useState<number>(0);

    const handleClick = (index: number) => {
        setSelected(index);
        handleSelectedTabChange(index);
    }

  return <Box className="sidebar">
  <Box className="sidebar__icon" onClick={() => handleClick(0)}  style={{backgroundColor: selected === 0 ? '#1cff42' : 'inherit'}}><RestaurantIcon /></Box>
  <Box className="sidebar__icon" onClick={() => handleClick(1)} style={{backgroundColor: selected === 1 ? '#1cff42' : 'inherit'}}><AddIcon /></Box>
  </Box>;
};

export default Sidebar;

