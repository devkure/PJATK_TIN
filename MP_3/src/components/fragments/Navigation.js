import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <header>
                <h1 class="logo-text">RooflessStudio</h1>
            </header>
            <h2 class="page-id">Team Management System</h2>
            <img src="../img/Roofless_transparent.png" width="146" height="64" alt="Roofless Studio Logo" />
            <ul>
                <li><Link to="/">Strona Główna</Link></li>
                <li><Link to="/employees">Pracownicy</Link></li>
                <li><Link to="/tasks">Zadania</Link></li>
                <li><Link to="/quests">Quest</Link></li>
                <li><Link to="/login">Logowanie</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation