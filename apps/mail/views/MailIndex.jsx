const { NavLink, Outlet } = ReactRouterDOM


export function MailIndex() {
    return (
        <aside class="nav-aside" >

            <nav class="mail-navbar">
                <NavLink to="/mail/inbox">📥 Inbox</NavLink>
                <NavLink to="/mail/starred">⭐️ Starred</NavLink>
                <NavLink to="/mail/sent">➡ Sent</NavLink>
                <NavLink to="/mail/trash"> 🗑Trash</NavLink>
            </nav>
            <Outlet />
        </aside>
    );
}

