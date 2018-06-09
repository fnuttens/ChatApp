const _ = require('lodash');

class Users {
  constructor() {
    this.users = [];
  }

  addUser(id, name, room) {
    var user = {id, name, room};
    this.users.push(user);

    return user;
  }

  removeUser(id) {
    return _.remove(this.users, (user) => user.id === id)[0];
  }

  getUser(id) {
    return this.users.filter((user) => user.id === id)[0];
  }

  getUsersList(room) {
    var roomUsers = this.users.filter((user) => user.room === room);
    return roomUsers.map((user) => user.name);
  }
}

module.exports = {Users};
