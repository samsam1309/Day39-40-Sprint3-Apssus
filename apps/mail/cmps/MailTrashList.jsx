const { useState, useEffect } = React
import { MailService } from '../services/mail.service.js';

export function MailTrashList() {
  const [deletedEmailList, setDeletedEmailList] = useState([]);

  useEffect(() => {
    setDeletedEmailList(MailService.getDeletedEmailList());
  }, []); 
  const handleDelete = (emailId) => {
    const isConfirmed = window.confirm('Are you sure you want to permanently delete this email?');
    if (isConfirmed) {
      MailService.definitivelyDeleteMail(emailId);
      setDeletedEmailList([...MailService.getDeletedEmailList()]); // Mettre à jour avec une nouvelle référence
    }
  };

  return (
    <ul>
      {deletedEmailList.map((email) => (
        <div key={email.id}>
          <li className="trash-mail">
            <strong className="sender">{email.sender}</strong>
            <div className="subject">{email.subject}</div>
            <div className="date">{email.date}</div>
            <button className="delete-trash-button" onClick={() => handleDelete(email.id)}><i className="fa-regular fa-trash-can"></i></button>
          </li>
        </div>
      ))}
    </ul>
  );
}