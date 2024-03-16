const { useParams } = ReactRouterDOM;

import { MailService } from "../apps/mail/services/mail.service.js";

export function MailDetail() {
    const { emailId } = useParams();
    const emailDetails = MailService.getEmailById(emailId);

    return (
        <div className="mail-details-container">
            <h2>Email Details</h2>
            {emailDetails && (
                <div className="mail-details">
                    <section>
                        <header>Sender:</header>
                        <div>{emailDetails.sender}</div>
                    </section>
                    <section>
                        <header>Subject:</header>
                        <div>{emailDetails.subject}</div>
                    </section>
                    <section>
                        <header>Date:</header>
                        <div>{emailDetails.date}</div>
                    </section>
                    <section>
                        <header>Content:</header>
                        <div>{emailDetails.content}</div>
                    </section>
                </div>
            )}
        </div>
    );
}