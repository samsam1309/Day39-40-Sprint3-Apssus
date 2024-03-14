const { useState } = React
const { Link } = ReactRouterDOM;
import { MailService } from '../services/mail.service.js';

export function MailList() {
    const [searchQuery, setSearchQuery] = useState('');
    const [showUnread, setShowUnread] = useState(false); // Par défaut, ne montre que les e-mails lus
    const [deletedEmailList, setDeletedEmailList] = useState([]);

    const handleDeleteClick = (emailId) => {
        MailService.deleteMail(emailId);
        const deletedEmail = MailService.getDeletedEmailList()[0]; // Obtenez le dernier e-mail supprimé
        setDeletedEmailList([deletedEmail, ...deletedEmailList]); // Mettre à jour la liste des e-mails supprimés
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value); // Met à jour la requête de recherche lors de la saisie dans le champ de recherche
    };

    const handleToggleUnread = () => {
        setShowUnread(!showUnread); // Inverse l'état d'affichage des e-mails non lus
    };

    // Filtrer la liste des e-mails en fonction de la requête de recherche et de l'état d'affichage des e-mails non lus
    const filteredEmails = MailService.getEmailList().filter((email) => {
        const matchesSearchQuery = email.subject.toLowerCase().includes(searchQuery.toLowerCase()); // Vérifie si le sujet de l'e-mail correspond à la requête de recherche
        const matchesUnread = showUnread ? !email.isRead : true; // Vérifie si l'e-mail est lu ou non en fonction de l'état d'affichage des e-mails non lus
        return matchesSearchQuery && matchesUnread;
    });

    return (
        <div className="pr-list">
            <div className="filters">
                <input
                    type="text"
                    placeholder="Search by subject..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <label>
                    <input
                        type="checkbox"
                        checked={showUnread}
                        onChange={handleToggleUnread}
                    />
                    Show Unread Emails
                </label>
            </div>
            <ul className="mail-list">
                {filteredEmails.map((email) => (
                    <li key={email.id} className="mail">

                        <Link to={`/mail/${email.id}`} className={`mail-link ${email.isRead ? "read" : "unread"}`}>
                            <strong className="sender">{email.sender}</strong>
                            <div className="subject">{email.subject}</div>
                            <div className="date">{email.date}</div>
                        </Link>
                        <button className="delete-button" onClick={() => handleDeleteClick(email.id)}>
                            <i className="fa-regular fa-trash-can"></i>
                        </button>
                        <button className="delete-button" >
                            <i className="fa-regular fa-star"></i>
                        </button>
                        <button className="delete-button" >
                            <i className="fa-regular fa-paper-plane"></i>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}






