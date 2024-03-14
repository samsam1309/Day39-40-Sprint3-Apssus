// MailTrash.jsx

import { MailTrashList } from "../apps/mail/cmps/MailTrashList.jsx";

export function MailTrash() {
  return (
    <div className ="trash-list">
      <h2> <i className="fa-regular fa-trash-can"></i> Trash:</h2>
      <MailTrashList />
    </div>
  );
}
