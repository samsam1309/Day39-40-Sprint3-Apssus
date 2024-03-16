const { useState, useEffect } = React
import { MailService } from '../services/mail.service.js';

export function MailTrashList() {
  const [deletedEmailList, setDeletedEmailList] = useState([]);

  useEffect(() => {
    setDeletedEmailList(MailService.getDeletedEmailList());
  }, []); 
  const handleDelete = (emailId) => {
    const isConfirmed = window.confirm('Are you sure you want to permanently delete this mail?');
    if (isConfirmed) {
      MailService.definitivelyDeleteMail(emailId);
      setDeletedEmailList([...MailService.getDeletedEmailList()]); // Mettre à jour avec une nouvelle référence
    }
  };


  const handleDeleteAll = () => {
    const isConfirmed = window.confirm('Are you sure you want to permanently delete all emails?');
    if (isConfirmed) {
        // Supprimer tous les e-mails de la corbeille
        deletedEmailList.forEach((email) => {
            MailService.definitivelyDeleteMail(email.id);
        });
        // Mettre à jour la liste de la corbeille
        setDeletedEmailList([]);
    }
};

  return (
    <div>
        <button className="delte-all-btn" onClick={handleDeleteAll}>Delete All</button>
        <ul>
            {deletedEmailList.map((email) => (
                <div key={email.id}>
                    <li className="trash-mail">
                        <strong className="sender">{email.sender}</strong>
                        <div className="subject">{email.subject}</div>
                        <div className="date">{email.date}</div>
                        <button className="delete-trash-button" onClick={() => handleDelete(email.id)}>
                            <i className="fa-regular fa-trash-can"></i>
                        </button>
                    </li>
                </div>
            ))}
        </ul>
    </div>
  );
}