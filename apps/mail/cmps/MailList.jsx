const { useState, useEffect } = React
const { Link } = ReactRouterDOM;
import { MailService } from '../services/mail.service.js';

export function MailList() {
    const [searchQuery, setSearchQuery] = useState('');
    const [showUnread, setShowUnread] = useState(false);
    const [deletedEmailList, setDeletedEmailList] = useState([]);
    const [sortedEmails, setSortedEmails] = useState([]); // Nouvel état pour stocker les e-mails triés

    useEffect(() => {
        // Tri des e-mails par date lors du montage initial
        sortEmailsByDate();
    }, []);

    const handleDeleteClick = (emailId) => {
        MailService.deleteMail(emailId);
        const deletedEmail = MailService.getDeletedEmailList()[0];
        setDeletedEmailList([deletedEmail, ...deletedEmailList]);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleToggleUnread = () => {
        setShowUnread(!showUnread);
    };

    const sortEmailsByDate = () => {
        const emails = MailService.getEmailList().slice(); // Copie de la liste d'e-mails
        const sortedEmails = emails.sort((a, b) => new Date(b.date) - new Date(a.date)); // Tri par date décroissante
        setSortedEmails(sortedEmails);
    };

    const sortEmailsByTitle = () => {
        const emails = MailService.getEmailList().slice(); // Copie de la liste d'e-mails
        const sortedEmails = emails.sort((a, b) => a.subject.localeCompare(b.subject)); // Tri par titre
        setSortedEmails(sortedEmails);
    };

    // Filtrer et afficher les e-mails selon la requête de recherche et l'état d'affichage des e-mails non lus
    const filteredEmails = sortedEmails.filter((email) => {
        const matchesSearchQuery = email.subject.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesUnread = showUnread ? !email.isRead : true;
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


                <button onClick={sortEmailsByDate}>Sort by Date</button>
                <button onClick={sortEmailsByTitle}>Sort by Title</button>

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
                        <button className="delete-button">
                            <i className="fa-regular fa-star"></i>
                        </button>
                        <button className="delete-button">
                            <i className="fa-regular fa-paper-plane"></i>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}






