const { useState } = React

import { MailService } from '../services/mail.service.js';
export function ComposeEmail() {
    const [recipient, setRecipient] = useState('');
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const [isSent, setIsSent] = useState(false); // Ajout de l'état pour vérifier si le message a été envoyé

    const handleSend = () => {
        if (!recipient || !subject || !content) {
            alert('Please fill all of the input.');
            return;
        }

        // ... Code pour envoyer le message ...

        setIsSent(true); // Déclencher l'animation lorsque le message est envoyé

        // Effacer les champs après l'envoi
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

                {/* Appliquer la classe CSS conditionnellement */}
                <button type="button" className={isSent ? 'sent-button' : ''} onClick={handleSend}>Send</button>
            </form>
        </div>
    );
}