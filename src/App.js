import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ThemeContextProvider from './context/ThemeContextProvider';
import StateContextProvider from './context/StateContextProvider';
import DataContextProvider from './context/DataContextProvider';
import MainSection from './Components/MainSection';

function App() {
    return (
        <DataContextProvider>
        <ThemeContextProvider>
        <StateContextProvider>
            <Navbar/>
            <MainSection/>
        </StateContextProvider>
        </ThemeContextProvider>
        </DataContextProvider>
    );
}

export default App;
