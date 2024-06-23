// App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HomePage from './pages/homepage/homepage.component';
import RegistrationForm from './components/registrationForm/registrationForm';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.scss';

const theme = createTheme({
  // Configurazione del tema
  typography: {
    fontFamily: 'Roboto',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
     <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationForm />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
