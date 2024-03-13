// MailTrash.jsx

import { MailTrashList } from "../apps/mail/cmps/MailTrashList.jsx";

export function MailTrash() {
  return (
    <div className ="trash-list">
      <h2>Trash</h2>
      <MailTrashList />
    </div>
  );
}
