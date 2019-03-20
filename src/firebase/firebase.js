import * as firebase from 'firebase';
import moment from 'moment';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });

// //     console.log(expenses);
// //   });

// // database.ref('expenses').on('value', (snapshot) => {
// //   const expenses = [];

// //   snapshot.forEach((childSnapshot) => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     });
// //   });

// //   console.log(expenses);
// // });

// // const expenses = [{
// //   description: 'Gum',
// //   note: '',
// //   amount: 195,
// //   createdAt: 0
// // },{
// //   description: 'Rent',
// //   note: '',
// //   amount: 109500,
// //   createdAt: moment(0).subtract(4, 'days').valueOf()
// // }, {
// //   description: 'Creditcard',
// //   note: '',
// //   amount: 4500,
// //   createdAt: moment(0).add(4, 'days').valueOf()
// // }];

// // let i;

// // for (i = 0; i < expenses.length; i++) {
// //   database.ref('expenses').push({
// //     description: expenses[i].description,
// //     note: expenses[i].note,
// //     amount: expenses[i].amount,
// //     createdAt: expenses[i].createdAt
// //   });
// // };


// // database.ref('notes/-LaQ5HHhT_T3yZkFj1xx').remove();

// // database.ref('notes').push({
// //   title: 'Course topics',
// //   body: 'React native, Angular, Python'
// // });



// // database.ref().set({
// //   name: 'Koen Stynen',
// //   age: 36,
// //   stressLevel: 6,
// //   job: {
// //     title: 'Software developer',
// //     company: 'Google'
// //   },
// //   location: {
// //     city: 'Geel',
// //     country: 'Belgium'
// //   }
// // }).then(() => {
// //   console.log('Data is saved');
// // }).catch((e) => {
// //   console.log('This failed.', e);
// // });

// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Seattle'
// // });


// // database.ref('isSingle')
// //   .remove()
// //   .then(() => {
// //     console.log('Data is removed');
// //   }).catch((e) => {
// //     console.log('Remove failed.', e);
// //   });
