// MailTrashList.jsx

const {useState} = React
import { MailService } from '../services/mail.service.js';

export function MailTrashList() {
  const [deletedEmailList, setDeletedEmailList] = useState(MailService.getDeletedEmailList());

  const handleDelete = (emailId) => {
    MailService.definitivelyDeleteMail(emailId);
    setDeletedEmailList(MailService.getDeletedEmailList());
  };

  return (
    <ul>
      {deletedEmailList.map((email) => (
        <div key={email.id}>
          <li className="trash-mail">
            <strong className="sender">{email.sender}</strong>
            <div className="subject">{email.subject}</div>
            <div className="date">{email.date}</div>
            <button className="delete-button" onClick={() => handleDelete(email.id)}><i className="fa-regular fa-trash-can"></i></button>

          </li>
        </div>
      ))}
    </ul>
  );
}
