const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '0',
      name: 'Mike',
      room: 'Node Course'
    }, {
      id: '1',
      name: 'Jen',
      room: 'React Course'
    }, {
      id: '2',
      name: 'Julie',
      room: 'Node Course'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Florent',
      room: 'La taverne'
    };

    var res = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
    expect(res).toEqual(user);
  });

  it('should remove a user', () => {
    const userId = '0';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove unknown user', () => {
    expect(users.removeUser('10')).toBeUndefined();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    expect(users.getUser('1')).toEqual(users.users[1]);
  });

  it('should not find unknown user', () => {
    expect(users.getUser('10')).toBeUndefined();
  });

  it('should return names for node course', () => {
    var userList = users.getUsersList('Node Course');

    expect(userList).toEqual(['Mike', 'Julie']);
  });
});
