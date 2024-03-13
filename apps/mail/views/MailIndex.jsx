const { NavLink, Outlet } = ReactRouterDOM
import { MailHeader } from "../cmps/MailHeader.jsx";
import { MailService } from "../services/mail.service.js";


export function MailIndex() {

    const unreadCount = MailService.getUnreadCount();

    return (
        <div>
            <MailHeader />
            <aside className="nav-aside" >



                <nav className="mail-navbar">
                    <NavLink to="/mail/inbox"><i className="fa-solid fa-inbox"></i> Inbox ({unreadCount}) </NavLink>
                    <NavLink to="/mail/starred"><i className="fa-regular fa-star"></i> Starred</NavLink>
                    <NavLink to="/mail/sent"><i className="fa-regular fa-paper-plane"></i> Sent</NavLink>
                    <NavLink to="/mail/trash"> <i className="fa-regular fa-trash-can"></i> Trash</NavLink>
                </nav>
                <Outlet />
            </aside>
        </div>
    );
}

