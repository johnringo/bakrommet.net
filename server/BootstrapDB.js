// Bootstrap countries collection if empty
if (Countries.find({}).count() === 0) {
    var countries = [
        {name: 'Czech Republic', code: 'CZ', group: 'A'},
        {name: 'Greece',code: 'GR',group: 'A'},
        {name: 'Russia',code: 'RU',group: 'A'},
        {name: 'Poland',code: 'PL',group: 'A'},
        {name: 'Germany',code: 'DE',group: 'B'},
        {name: 'Portugal',code: 'PT',group: 'B'},
        {name: 'Denmark',code: 'DK',group: 'B'},
        {name: 'Netherlands',code: 'NL',group: 'B'},
        {name: 'Spain',code: 'ES',group: 'C'},
        {name: 'Italy',code: 'IT',group: 'C'},
        {name: 'Croatia',code: 'HR',group: 'C'},
        {name: 'Republic of Ireland',code: 'IE',group: 'C'},
        {name: 'England',code: '_england',group: 'D'},
        {name: 'Ukraine',code: 'UA',group: 'D'},
        {name: 'France',code: 'FR',group: 'D'},
        {name: 'Sweden',code: 'SE',group: 'D'}
    ];

    _.each(countries, function(country) {
        Countries.insert(country);
    });
}