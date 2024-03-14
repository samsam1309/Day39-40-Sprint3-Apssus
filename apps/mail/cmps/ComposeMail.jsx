const { useState } = React

import { MailService } from '../services/mail.service.js';
export function ComposeEmail() {
    const [recipient, setRecipient] = useState('');
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');

    const handleSend = () => {
        if (!recipient || !subject || !content) {
            alert('Please fill all of the input.');
            return;
        }

        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('en-GB');

        const newMail = {
            id: MailService.getNextId(),
            sender: 'user@example.com',
            recipient,
            subject,
            content,
            date: formattedDate,
            isRead: false,
        };

        MailService.sendMail(newMail);

        setRecipient('');
        setSubject('');
        setContent('');

    };

    return (
        <div>
            <h2>New message:</h2>
            <form className="form-newMsg">
                <label>To:</label>
                <input type="text" value={recipient} onChange={(e) => setRecipient(e.target.value)} />

                <label>Subject:</label>
                <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />

                <label>Object:</label>
                <textarea value={content} onChange={(e) => setContent(e.target.value)} />

                <button type="button" onClick={handleSend}>Send</button>
            </form>
        </div>
    );
}