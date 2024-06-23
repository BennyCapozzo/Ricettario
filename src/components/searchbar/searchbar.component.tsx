import { Box, Typography } from '@mui/material';
import './searchbar.styles.scss';
import SearchIcon from '@mui/icons-material/Search';
import { ISearchbarProps } from './seasrchbar.interfaces';


const Searchbar = ({ onSearch }: ISearchbarProps) => {
return (
    <Box className ="search-bar">
        <Typography variant='h4' color='white' pl="2rem" fontWeight={700}>
            Ricette
        </Typography>
    <Box className="prova">
    <Box className="search-input-container" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box className="search-bar__input-container">

        <SearchIcon sx={{ color: 'white', paddingLeft: '0.5rem' }} />
        <input
            className="search-input"
            type="text"
            placeholder="Cerca ricette..."
            style={{
                maxWidth:'308px',
                padding: '8px 8px',
                fontSize: '1rem',
                color: '#fff',
                backgroundColor: 'transparent',
                border: 'none',
                outline: 'none'
            }}
            onChange={(e) => onSearch(e.target.value)}
            />
            </Box>
            </Box>
    </Box>

    </Box>
)
}

export default Searchbar;