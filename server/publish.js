Meteor.publish('users', function (group) {
  if (Roles.userIsInRole(this.userId, ['admin'])) {

    return Meteor.users.find({});

  } else {
    this.stop();
    return;
  }
});

Meteor.publish("countries", function () {
    return Countries.find();
});
