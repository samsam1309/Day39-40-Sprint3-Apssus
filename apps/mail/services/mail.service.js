const emailList = [
  { id: 1, sender: 'john.doe@example.com', subject: 'Meeting Tomorrow', date: '2024-03-13', isRead: false, content: "Hello, I would like to discuss the agenda for tomorrow's meeting.",isStarred: false },
  { id: 2, sender: 'jane.smith@example.com', subject: 'Project Update', date: '2024-03-14', isRead: true, content: "Hi everyone, just a quick update on the project progress.",isStarred: false },
  { id: 3, sender: 'info@companyxyz.com', subject: 'Action Required: Account Verification', date: '2024-03-14', isRead: false, content: "Dear customer, your account verification is pending. Please take action.",isStarred: false },
  { id: 4, sender: 'support@serviceprovider.com', subject: 'Important Announcement', date: '2024-03-8', isRead: true, content: "Dear valued customer, we have an important announcement regarding our services.",isStarred: false },
  { id: 5, sender: 'notif@socialnework.com', subject: 'New Message Notification', date: '2022-03-8', isRead: false, content: "You have received a new message from a friend.",isStarred: false },
  { id: 6, sender: 'marketing@compabc.com', subject: 'Special Offer Inside!', date: '2022-03-8', isRead: true, content: "Exclusive offer for our loyal customers! Don't miss out.",isStarred: false },
  { id: 7, sender: 'noreply@surveypder.com', subject: 'Feedback Request', date: '2024-03-8', isRead: true, content: "We would appreciate your feedback on our recent service.",isStarred: false },
  { id: 8, sender: 'newsletter@newswsite.com', subject: 'Weekly Newsletter', date: '2024-03-14', isRead: false, content: "Here's your weekly dose of news and updates.",isStarred: false },
  { id: 9, sender: 'billing@utilitycompany.com', subject: 'Monthly Statement', date: '2024-03-14', isRead: true, content: "Your monthly utility bill statement is now available.",isStarred: false },
  { id: 10, sender: 'admin@webapp.com', subject: 'Account Notification', date: '2024-01-14', isRead: true, content: "Important notification regarding your account settings.",isStarred: false },
  { id: 11, sender: 'contact@entreprise.com', subject: 'Invitation à un événement d\'entreprise', date: '2020-01-13', isRead: false, content: "Contenu du mail...",isStarred: false },
  { id: 12, sender: 'support@plateforme.com', subject: 'Assistance pour votre compte', date: '2020-01-14', isRead: true, content: "Contenu du mail...",isStarred: false },
  { id: 13, sender: 'info@newsletter.com', subject: 'Dernières actualités et mises à jour', date: '2020-01-14', isRead: false, content: "Contenu du mail...",isStarred: false },
  { id: 14, sender: 'commandes@boutique.com', subject: 'Confirmation de votre commande', date: '2020-01-14', isRead: true, content: "Contenu du mail...",isStarred: false },
  { id: 15, sender: 'serviceclient@service.com', subject: 'Réponse à votre demande d\'assistance', date: '2020-03-14', isRead: false, content: "Contenu du mail...",isStarred: false },
  { id: 16, sender: 'notifications@res.com', subject: 'Notification de message reçu', date: '2024-03-14', isRead: true, content: "Contenu du mail...",isStarred: false },
  { id: 17, sender: 'contact@blog.com', subject: 'Nouvel article sur notre blog', date: '2024-03-14', isRead: true, content: "Contenu du mail...",isStarred: false },
  { id: 18, sender: 'promo@magasin.com', subject: 'Offre spéciale pour nos clients fidèles', date: '2024-03-14', isRead: true, content: "Contenu du mail...",isStarred: false },
  { id: 19, sender: 'newsletter@site-web.com', subject: 'Abonnement à notre newsletter', date: '2024-03-14', isRead: true, content: "Contenu du mail...",isStarred: false },
  { id: 20, sender: 'info@organisme.com', subject: 'Informations importantes concernant votre compte', date: '2024-03-14', isRead: true, content: "Contenu du mail...",isStarred: false },
  { id: 21, sender: 'jane@example.com', subject: 'Project Update', date: '2017-03-14', isRead: true, content: "HELLO MR JHON, curhcycbuybcuzbczhcuizehcezcbuzbcyurbcrycbryubcuyrzcbcbdbchjuyzbcjhzbcuy",isStarred: false },
  { id: 22, sender: 'jane@example.com', subject: 'Project Update', date: '2017-03-14', isRead: true, content: "HELLO MR JHON, curhcycbuybcuzbczhcuizehcezcbuzbcyurbcrycbryubcuyrzcbcbdbchjuyzbcjhzbcuy",isStarred: false },
  { id: 23, sender: 'jane@example.com', subject: 'Project Update', date: '2017-03-14', isRead: true, content: "HELLO MR JHON, curhcycbuybcuzbczhcuizehcezcbuzbcyurbcrycbryubcuyrzcbcbdbchjuyzbcjhzbcuy",isStarred: false },
  { id: 24, sender: 'jane@example.com', subject: 'Project Update', date: '2017-03-14', isRead: true, content: "HELLO MR JHON, curhcycbuybcuzbczhcuizehcezcbuzbcyurbcrycbryubcuyrzcbcbdbchjuyzbcjhzbcuy",isStarred: false },
  { id: 25, sender: 'jane@example.com', subject: 'Project Update', date: '2017-03-14', isRead: true, content: "HELLO MR JHON, curhcycbuybcuzbczhcuizehcezcbuzbcyurbcrycbryubcuyrzcbcbdbchjuyzbcjhzbcuy",isStarred: false },
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
  toggleStarred: (emailId) => {
    const email = emailList.find(email => email.id === parseInt(emailId, 10));
    if (email) {
      email.isStarred = !email.isStarred; 
    }
  }
};
