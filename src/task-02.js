const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

// const toggleUserStateOLD = (allUsers, userName, callback) => {
//   const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user,
//   );

//   callback(updatedUsers);
// };

const toggleUserState = (allUsers, userName) =>
  new Promise((resolve, reject) => {
    const updatedUsers = allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user,
    );
    resolve(updatedUsers);
  });

const logger = updatedUsers => console.table(updatedUsers);

/*
 * Сейчас работает так
 */
// toggleUserStateOLD(users, 'Mango', logger);
// toggleUserStateOLD(users, 'Lux', logger);

/*
 * Должно работать так
 */
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
