// mail.service.js

const emailList = [
    { id: 1, sender: 'john@example.com', subject: 'Meeting Tomorrow', date: '2024-03-13', isRead: false, content: "HELLO MR JHON, curhcycbuybcuzbczhcuizehcezcbuzbcyurbcrycbryubcuyrzcbcbdbchjuyzbcjhzbcuy" },
    { id: 2, sender: 'jane@example.com', subject: 'Project Update', date: '2024-03-14', isRead: true, content: "HELLO MR JHON, curhcycbuybcuzbczhcuizehcezcbuzbcyurbcrycbryubcuyrzcbcbdbchjuyzbcjhzbcuy" },
    { id: 3, sender: 'jane@example.com', subject: 'Project Update', date: '2024-03-14', isRead: false, content: "HELLO MR JHON, curhcycbuybcuzbczhcuizehcezcbuzbcyurbcrycbryubcuyrzcbcbdbchjuyzbcjhzbcuy" },
    { id: 4, sender: 'jane@example.com', subject: 'Project Update', date: '2024-03-14', isRead: true, content: "HELLO MR JHON, curhcycbuybcuzbczhcuizehcezcbuzbcyurbcrycbryubcuyrzcbcbdbchjuyzbcjhzbcuy" },
    { id: 5, sender: 'jane@example.com', subject: 'Project Update', date: '2024-03-14', isRead: false, content: "HELLO MR JHON, curhcycbuybcuzbczhcuizehcezcbuzbcyurbcrycbryubcuyrzcbcbdbchjuyzbcjhzbcuy" },
    { id: 6, sender: 'jane@example.com', subject: 'Project Update', date: '2024-03-14', isRead: true, content: "HELLO MR JHON, curhcycbuybcuzbczhcuizehcezcbuzbcyurbcrycbryubcuyrzcbcbdbchjuyzbcjhzbcuy" },
    { id: 7, sender: 'jane@example.com', subject: 'Project Update', date: '2024-03-14', isRead: true, content: "HELLO MR JHON, curhcycbuybcuzbczhcuizehcezcbuzbcyurbcrycbryubcuyrzcbcbdbchjuyzbcjhzbcuy" },
    { id: 8, sender: 'jane@example.com', subject: 'Project Update', date: '2024-03-14', isRead: true, content: "HELLO MR JHON, curhcycbuybcuzbczhcuizehcezcbuzbcyurbcrycbryubcuyrzcbcbdbchjuyzbcjhzbcuy" },
    { id: 9, sender: 'jane@example.com', subject: 'Project Update', date: '2024-03-14', isRead: true, content: "HELLO MR JHON, curhcycbuybcuzbczhcuizehcezcbuzbcyurbcrycbryubcuyrzcbcbdbchjuyzbcjhzbcuy" },
    { id: 10, sender: 'jane@example.com', subject: 'Project Update', date: '2024-03-14', isRead: true, content: "HELLO MR JHON, curhcycbuybcuzbczhcuizehcezcbuzbcyurbcrycbryubcuyrzcbcbdbchjuyzbcjhzbcuy" },
    { id: 11, sender: 'jane@example.com', subject: 'Project Update', date: '2024-03-14', isRead: true, content: "HELLO MR JHON, curhcycbuybcuzbczhcuizehcezcbuzbcyurbcrycbryubcuyrzcbcbdbchjuyzbcjhzbcuy" },
    { id: 12, sender: 'jane@example.com', subject: 'Project Update', date: '2024-03-14', isRead: true, content: "HELLO MR JHON, curhcycbuybcuzbczhcuizehcezcbuzbcyurbcrycbryubcuyrzcbcbdbchjuyzbcjhzbcuy" },
    { id: 13, sender: 'jane@example.com', subject: 'Project Update', date: '2024-03-14', isRead: true, content: "HELLO MR JHON, curhcycbuybcuzbczhcuizehcezcbuzbcyurbcrycbryubcuyrzcbcbdbchjuyzbcjhzbcuy" },
    { id: 14, sender: 'jane@example.com', subject: 'Project Update', date: '2024-03-14', isRead: true, content: "HELLO MR JHON, curhcycbuybcuzbczhcuizehcezcbuzbcyurbcrycbryubcuyrzcbcbdbchjuyzbcjhzbcuy" },
    { id: 15, sender: 'jane@example.com', subject: 'Project Update', date: '2024-03-14', isRead: true, content: "HELLO MR JHON, curhcycbuybcuzbczhcuizehcezcbuzbcyurbcrycbryubcuyrzcbcbdbchjuyzbcjhzbcuy" },
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
