Meteor.methods({
    addCountry: function(countryName, countryCode, group) {
        Countries.insert({
            name: countryName,
            code: countryCode,
            group: group
        });
    },
    deleteCountry: function(id) {
        Countries.remove(id);
    }
});
