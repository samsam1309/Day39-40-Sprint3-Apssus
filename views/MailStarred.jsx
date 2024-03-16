import { MailService } from "../apps/mail/services/mail.service.js";

export function MailStarred() {
    const starredEmails = MailService.getEmailList().filter(email => email.isStarred);
    
    return (
        <div>
            <h2>Starred Mail</h2>
        <ul>
            {starredEmails.map((email) => (
                <div key={email.id}>
                    <li className="trash-mail">
                        <strong className="sender">{email.sender}</strong>
                        <div className="subject">{email.subject}</div>
                        <div className="date">{email.date}</div>
                    </li>
                </div>
            ))}
        </ul>
    </div>
    );
}
