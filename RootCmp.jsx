const { Route, Routes } = ReactRouterDOM;
const Router = ReactRouterDOM.HashRouter;

import { AppHeader } from "./cmps/AppHeader.jsx";
import { About } from "./views/About.jsx";
import { Home } from "./views/Home.jsx";
import { MailIndex } from "./apps/mail/views/MailIndex.jsx";
import { MailInbox } from "./views/MailInBox.jsx";
import { MailTrash } from "./views/MailTrash.jsx";
import { MailSent } from "./views/MailSent.jsx";
import { MailStarred } from "./views/MailStarred.jsx";
import { MailDetail } from "./views/MailDetail.jsx";
import { ComposeEmail } from "./apps/mail/cmps/ComposeMail.jsx";

export function App() {
    return <Router>
        <section className="app">
            <AppHeader />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/mail" element={<MailIndex />}>
                    <Route path="/mail/inbox" element={<MailInbox />} />
                    <Route path="/mail/starred" element={<MailStarred />} />
                    <Route path="/mail/sent" element={<MailSent />} />
                    <Route path="/mail/trash" element={<MailTrash />} />
                    <Route path="/mail/compose" element={<ComposeEmail />} />
                    <Route path="/mail/:emailId" element={<MailDetail />} />
                </Route>

            </Routes>
        </section>
    </Router>
}
