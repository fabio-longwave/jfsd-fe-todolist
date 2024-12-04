import styles from './Header.module.css';
import {useContext} from "react";
import {ThemeContext} from "../../contexts/ThemeProvider.jsx";
import {useSelector} from "react-redux";
import {UserSelector} from "../../reducers/user.slice.js";

const Header = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    const user = useSelector(UserSelector);

    const switchTheme = () => {
        setTheme((prevTheme) => prevTheme==='light' ? 'dark' : 'light');
    }
    return <header className={styles.header}>
        <div>{user.displayName || 'Non sei loggato'}</div>
        <div className={styles.themeSelector} onClick={switchTheme}>
            {theme === 'dark'? <div>️ ☀️</div> : <div>️🌙</div>}
        </div>
    </header>
}

export default Header;