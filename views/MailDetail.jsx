const { useParams } = ReactRouterDOM;

import { MailService } from "../apps/mail/services/mail.service.js";

export function MailDetail() {
    const { emailId } = useParams();
    const emailDetails = MailService.getEmailById(emailId);

    return (
        <div>
            <h2>Email Details</h2>
            {emailDetails && (
                <div>
                    <strong>Sender: </strong>{emailDetails.sender}<br />
                    <strong>Subject: </strong>{emailDetails.subject}<br />
                    <strong>Date: </strong>{emailDetails.date}<br />
                    <p>Content: {emailDetails.content}</p>
                </div>
            )}
        </div>
    );
}