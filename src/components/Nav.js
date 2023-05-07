import logo from '../images/logo.png'

const Nav = () => {
    return  <>
            <header>
                <h1>FRENCH FIGHT</h1>
                <img src = {logo} alt ='logo' />
                <nav className="headerNav">
                    <ul>
                        <li>HOME</li>
                        <li>EVENTS</li>
                        <li>CONTACT</li>
                        <li>ABOUT US</li>
                    </ul>
                </nav>
            </header>
            </>
}

export default Nav