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

    const removeFromSortedEmails = (emailId) => {
        setSortedEmails(sortedEmails.filter(email => email.id !== emailId));
    };

    const handleDeleteClick = (emailId) => {
        MailService.deleteMail(emailId);
        removeFromSortedEmails(emailId); // Supprime également l'e-mail de sortedEmails
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

    const handleToggleStarred = (emailId) => {
        // Inverser l'état de l'étoile pour l'e-mail avec l'ID donné dans la liste des e-mails
        const updatedEmailList = sortedEmails.map(email => {
            if (email.id === emailId) {
                return { ...email, isStarred: !email.isStarred };
            }
            return email;
        });
    
        // Mettre à jour l'état de la liste des e-mails triés
        setSortedEmails(updatedEmailList);
    
        // Appeler la méthode toggleStarred de MailService pour mettre à jour la liste des e-mails
        MailService.toggleStarred(emailId);


        setHighlightedEmailId(emailId);

        // Supprimer la mise en surbrillance après 2 secondes
        setTimeout(() => {
            setHighlightedEmailId(null);
        }, 2000);
    
    
    };


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
                        <button className="export-btn delete-button" onClick={() => handleDeleteClick(email.id)}>
                            <i className="fa-regular fa-trash-can"></i>
                        </button>
                        <button className="export-btn starred-button" onClick={() => handleToggleStarred(email.id)}>
                            {email.isStarred ?  <i className="fa-solid fa-star"></i>:<i className="fa-regular fa-star"></i>}
                        </button>
                        <button className="export-btn sented-button">
                            <i className="fa-regular fa-paper-plane"></i>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
