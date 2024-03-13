const { Link } = ReactRouterDOM
import { MailService } from "../services/mail.service.js";

export function MailList() {

    // mail.service.js
    const emailList = MailService.getEmailList();
    const unreadCount = MailService.getUnreadCount();



    return (

        
        <ul className="mail-list">
            {emailList.map((email) => (
                <li key={email.id} className="mail">
                    <Link to={`/mail/${email.id}`} className={`mail-link ${email.isRead ? 'read' : 'unread'}`}>
                        <strong className="sender">{email.sender}</strong>
                        <div className="subject">{email.subject}</div>
                        <div className="date">{email.date}</div>
                    </Link>
                </li>
            ))}
        </ul>

    );
}
