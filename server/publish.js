Meteor.publish('users', function (group) {
  if (Roles.userIsInRole(this.userId, ['admin'])) {

    return Meteor.users.find({});

  } else {

    // user not authorized. do not publish secrets
    this.stop();
    return;

  }
});