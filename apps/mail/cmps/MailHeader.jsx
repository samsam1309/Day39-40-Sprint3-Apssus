const { NavLink } = ReactRouterDOM

export function MailHeader() {


    return (
        <div className="mail-header">
            <h2 className="logo">Mail <i className="fa-regular fa-envelope"></i></h2>
            <NavLink to="/mail/compose"><i className="fa-solid fa-pen"></i> Compose</NavLink>
        </div>
    );
}