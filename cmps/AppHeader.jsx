const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {

    return <header className="app-header">
        <Link to="/">
            <h3 className="logo" ><i className="fa-solid fa-laptop-code"></i> Ap<span className="ss">ss</span>us </h3>
        </Link>
        <nav>
            <NavLink to="/">Home</NavLink> 
            <NavLink to="/about">About</NavLink> 
            <NavLink to="/mail/inbox">Mail</NavLink> 
            <NavLink to="/note">Note</NavLink>
        </nav>
    </header>
}
