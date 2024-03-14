// mail.service.js


const emailList = [
  { id: 1, sender: 'john.doe@example.com', subject: 'Meeting Tomorrow', date: '2024-03-13', isRead: false, content: "Hello, I would like to discuss the agenda for tomorrow's meeting." },
  { id: 2, sender: 'jane.smith@example.com', subject: 'Project Update', date: '2024-03-14', isRead: true, content: "Hi everyone, just a quick update on the project progress." },
  { id: 3, sender: 'info@companyxyz.com', subject: 'Action Required: Account Verification', date: '2024-03-14', isRead: false, content: "Dear customer, your account verification is pending. Please take action." },
  { id: 4, sender: 'support@serviceprovider.com', subject: 'Important Announcement', date: '2024-03-14', isRead: true, content: "Dear valued customer, we have an important announcement regarding our services." },
  { id: 5, sender: 'notif@socialnework.com', subject: 'New Message Notification', date: '2024-03-14', isRead: false, content: "You have received a new message from a friend." },
  { id: 6, sender: 'marketing@compabc.com', subject: 'Special Offer Inside!', date: '2024-03-14', isRead: true, content: "Exclusive offer for our loyal customers! Don't miss out." },
  { id: 7, sender: 'noreply@surveypder.com', subject: 'Feedback Request', date: '2024-03-14', isRead: true, content: "We would appreciate your feedback on our recent service." },
  { id: 8, sender: 'newsletter@newswsite.com', subject: 'Weekly Newsletter', date: '2024-03-14', isRead: false, content: "Here's your weekly dose of news and updates." },
  { id: 9, sender: 'billing@utilitycompany.com', subject: 'Monthly Statement', date: '2024-03-14', isRead: true, content: "Your monthly utility bill statement is now available." },
  { id: 10, sender: 'admin@webapp.com', subject: 'Account Notification', date: '2024-03-14', isRead: true, content: "Important notification regarding your account settings." },
  { id: 11, sender: 'contact@entreprise.com', subject: 'Invitation à un événement d\'entreprise', date: '2024-03-13', isRead: false, content: "Contenu du mail..." },
  { id: 12, sender: 'support@plateforme.com', subject: 'Assistance pour votre compte', date: '2024-03-14', isRead: true, content: "Contenu du mail..." },
  { id: 13, sender: 'info@newsletter.com', subject: 'Dernières actualités et mises à jour', date: '2024-03-14', isRead: false, content: "Contenu du mail..." },
  { id: 14, sender: 'commandes@boutique.com', subject: 'Confirmation de votre commande', date: '2024-03-14', isRead: true, content: "Contenu du mail..." },
  { id: 15, sender: 'serviceclient@service.com', subject: 'Réponse à votre demande d\'assistance', date: '2024-03-14', isRead: false, content: "Contenu du mail..." },
  { id: 16, sender: 'notifications@res.com', subject: 'Notification de message reçu', date: '2024-03-14', isRead: true, content: "Contenu du mail..." },
  { id: 17, sender: 'contact@blog.com', subject: 'Nouvel article sur notre blog', date: '2024-03-14', isRead: true, content: "Contenu du mail..." },
  { id: 18, sender: 'promo@magasin.com', subject: 'Offre spéciale pour nos clients fidèles', date: '2024-03-14', isRead: true, content: "Contenu du mail..." },
  { id: 19, sender: 'newsletter@site-web.com', subject: 'Abonnement à notre newsletter', date: '2024-03-14', isRead: true, content: "Contenu du mail..." },
  { id: 20, sender: 'info@organisme.com', subject: 'Informations importantes concernant votre compte', date: '2024-03-14', isRead: true, content: "Contenu du mail..." },
  { id: 21, sender: 'jane@example.com', subject: 'Project Update', date: '2024-03-14', isRead: true, content: "HELLO MR JHON, curhcycbuybcuzbczhcuizehcezcbuzbcyurbcrycbryubcuyrzcbcbdbchjuyzbcjhzbcuy" },
  { id: 22, sender: 'jane@example.com', subject: 'Project Update', date: '2024-03-14', isRead: true, content: "HELLO MR JHON, curhcycbuybcuzbczhcuizehcezcbuzbcyurbcrycbryubcuyrzcbcbdbchjuyzbcjhzbcuy" },
  { id: 23, sender: 'jane@example.com', subject: 'Project Update', date: '2024-03-14', isRead: true, content: "HELLO MR JHON, curhcycbuybcuzbczhcuizehcezcbuzbcyurbcrycbryubcuyrzcbcbdbchjuyzbcjhzbcuy" },
  { id: 24, sender: 'jane@example.com', subject: 'Project Update', date: '2024-03-14', isRead: true, content: "HELLO MR JHON, curhcycbuybcuzbczhcuizehcezcbuzbcyurbcrycbryubcuyrzcbcbdbchjuyzbcjhzbcuy" },
  { id: 25, sender: 'jane@example.com', subject: 'Project Update', date: '2024-03-14', isRead: true, content: "HELLO MR JHON, curhcycbuybcuzbczhcuizehcezcbuzbcyurbcrycbryubcuyrzcbcbdbchjuyzbcjhzbcuy" },
];

const deletedEmailList = [];


export const MailService = {
  getEmailList: () => emailList,
  getEmailById: (emailId) => emailList.find(email => email.id === parseInt(emailId, 10)),
  markAsRead: (emailId) => {
    const email = emailList.find(email => email.id === parseInt(emailId, 10));
    if (email) {
      email.isRead = true;
    }
  },
  getUnreadCount: () => emailList.filter(email => !email.isRead).length,
  getNextId: () => emailList.length + 1,
  sendMail: (newMail) => {
    emailList.unshift(newMail);
    return emailList;
  },
  deleteMail: (emailId) => {
    const index = emailList.findIndex(email => email.id === parseInt(emailId, 10));
    if (index !== -1) {
      const deletedEmail = emailList.splice(index, 1)[0];
      deletedEmailList.unshift(deletedEmail);
    }
  },
  getDeletedEmailList: () => deletedEmailList,
  definitivelyDeleteMail: (emailId) => {
    const index = deletedEmailList.findIndex((email) => email.id === parseInt(emailId, 10));
    if (index !== -1) {
      deletedEmailList.splice(index, 1);
      console.log("deletedEmailList", deletedEmailList)
    }
  },

};
