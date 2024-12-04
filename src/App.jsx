import "./App.css";
import {Outlet} from "react-router-dom";
import {ThemeProvider} from "./contexts/ThemeProvider.jsx";
import Header from "./components/Header/Header.jsx";


function App() {

    return <ThemeProvider>
            <Header/>
            <Outlet />
    </ThemeProvider>
}

export default App;
