Template.standings.helpers({
    groups: function() {
        var allGroupNames = ['A', 'B', 'C', 'D'];
        var countries = Countries.find({});
        var groups = [];

        _.each(allGroupNames, function(name) {
            groups.push(new Group(name, countries.map(function(country) {
                if (name === country.group) {
                    return country;    
                }
            }).filter(Boolean)))
        });

        return groups;
    }
});
