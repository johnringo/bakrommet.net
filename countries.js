Countries = new Mongo.Collection("countries");

if (Meteor.isServer) {
    Meteor.methods({
        addCountry: function(countryName, countryCode, group) {
            Countries.insert({
                name: countryName,
                code: countryCode,
                group: group
            })
        },
        deleteCountry: function(id) {
            Countries.remove(id);
        }
    });
}

if (Meteor.isClient) {
    Template.addCountry.events({
        'submit .add-country': function(event, template) {
            event.preventDefault();

            var country = {
                name: template.find('#name'),
                code: template.find('#code'),
                group: template.find('#group')
            };

            Meteor.call('addCountry', country.name.value, country.code.value, 
                country.group.value);

            country.name.value = '';
            country.code.value = '';
            country.group.value = '';
        }
    });

    Template.countryList.helpers({
        countries: function() {
            return Countries.find({},{sort: {group: 1}});
        }
    });

    Template.country.events({
       'click .delete': function() {
           Meteor.call('deleteCountry', this._id);
       }
    });
}