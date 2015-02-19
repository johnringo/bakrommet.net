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

    console.log("Inserted " + Countries.find({}).count() + " countries");
}

if (Matches.find({}).count() === 0) {
    var matches = [
        {
            date: new Date(2012, 5, 8, 18, 0),
            stage: 'group',
            group: 'A',
            homeTeamCode: 'PL',
            homeTeamGoalsFt: 1,
            awayTeamCode: 'GR',
            awayTeamGoalsFt: 1
        },
        {
            date: new Date(2012, 5, 8, 20, 45),
            stage: 'group',
            group: 'A',
            homeTeamCode: 'RU',
            homeTeamGoalsFt: 4,
            awayTeamCode: 'CZ',
            awayTeamGoalsFt: 1
        },
        {
            date: new Date(2012, 5, 12, 18, 0),
            stage: 'group',
            group: 'A',
            homeTeamCode: 'GR',
            homeTeamGoalsFt: 1,
            awayTeamCode: 'CZ',
            awayTeamGoalsFt: 2
        },
        {
            date: new Date(2012, 5, 12, 20, 45),
            stage: 'group',
            group: 'A',
            homeTeamCode: 'PL',
            homeTeamGoalsFt: 1,
            awayTeamCode: 'RU',
            awayTeamGoalsFt: 1
        },
        {
            date: new Date(2012, 5, 16, 18, 0),
            stage: 'group',
            group: 'A',
            homeTeamCode: 'CZ',
            homeTeamGoalsFt: 1,
            awayTeamCode: 'PL',
            awayTeamGoalsFt: 0
        },
        {
            date: new Date(2012, 5, 12, 20, 45),
            stage: 'group',
            group: 'A',
            homeTeamCode: 'GR',
            homeTeamGoalsFt: 1,
            awayTeamCode: 'RU',
            awayTeamGoalsFt: 0
        },
        {
            date: new Date(2012, 5, 9, 18, 0),
            stage: 'group',
            group: 'B',
            homeTeamCode: 'NL',
            homeTeamGoalsFt: 0,
            awayTeamCode: 'DK',
            awayTeamGoalsFt: 1
        },
        {
            date: new Date(2012, 5, 9, 20, 45),
            stage: 'group',
            group: 'B',
            homeTeamCode: 'DE',
            homeTeamGoalsFt: 1,
            awayTeamCode: 'PT',
            awayTeamGoalsFt: 0
        },
        {
            date: new Date(2012, 5, 13, 18, 0),
            stage: 'group',
            group: 'B',
            homeTeamCode: 'DK',
            homeTeamGoalsFt: 2,
            awayTeamCode: 'PT',
            awayTeamGoalsFt: 3
        },
        {
            date: new Date(2012, 5, 13, 20, 45),
            stage: 'group',
            group: 'B',
            homeTeamCode: 'NL',
            homeTeamGoalsFt: 1,
            awayTeamCode: 'DE',
            awayTeamGoalsFt: 2
        },
        {
            date: new Date(2012, 5, 17, 18, 0),
            stage: 'group',
            group: 'B',
            homeTeamCode: 'PT',
            homeTeamGoalsFt: 2,
            awayTeamCode: 'NL',
            awayTeamGoalsFt: 1
        },
        {
            date: new Date(2012, 5, 17, 20, 45),
            stage: 'group',
            group: 'B',
            homeTeamCode: 'DK',
            homeTeamGoalsFt: 1,
            awayTeamCode: 'DE',
            awayTeamGoalsFt: 2
        },
        {
            date: new Date(2012, 5, 10, 18, 0),
            stage: 'group',
            group: 'C',
            homeTeamCode: 'ES',
            homeTeamGoalsFt: 1,
            awayTeamCode: 'IT',
            awayTeamGoalsFt: 1
        },
        {
            date: new Date(2012, 5, 10, 20, 45),
            stage: 'group',
            group: 'C',
            homeTeamCode: 'IE',
            homeTeamGoalsFt: 1,
            awayTeamCode: 'HR',
            awayTeamGoalsFt: 3
        },
        {
            date: new Date(2012, 5, 14, 18, 0),
            stage: 'group',
            group: 'C',
            homeTeamCode: 'IT',
            homeTeamGoalsFt: 1,
            awayTeamCode: 'HR',
            awayTeamGoalsFt: 1
        },
        {
            date: new Date(2012, 5, 14, 20, 45),
            stage: 'group',
            group: 'C',
            homeTeamCode: 'ES',
            homeTeamGoalsFt: 4,
            awayTeamCode: 'IE',
            awayTeamGoalsFt: 0
        },
        {
            date: new Date(2012, 5, 18, 18, 0),
            stage: 'group',
            group: 'C',
            homeTeamCode: 'HR',
            homeTeamGoalsFt: 0,
            awayTeamCode: 'ES',
            awayTeamGoalsFt: 1
        },
        {
            date: new Date(2012, 5, 18, 20, 45),
            stage: 'group',
            group: 'C',
            homeTeamCode: 'IT',
            homeTeamGoalsFt: 2,
            awayTeamCode: 'IE',
            awayTeamGoalsFt: 0
        },
        {
            date: new Date(2012, 5, 11, 19, 0),
            stage: 'group',
            group: 'D',
            homeTeamCode: 'FR',
            homeTeamGoalsFt: 1,
            awayTeamCode: '_england',
            awayTeamGoalsFt: 1
        },
        {
            date: new Date(2012, 5, 11, 20, 45),
            stage: 'group',
            group: 'D',
            homeTeamCode: 'UA',
            homeTeamGoalsFt: 2,
            awayTeamCode: 'SE',
            awayTeamGoalsFt: 1
        },
        {
            date: new Date(2012, 5, 15, 18, 0),
            stage: 'group',
            group: 'D',
            homeTeamCode: 'UA',
            homeTeamGoalsFt: 0,
            awayTeamCode: 'FR',
            awayTeamGoalsFt: 2
        },
        {
            date: new Date(2012, 5, 15, 20, 45),
            stage: 'group',
            group: 'D',
            homeTeamCode: 'SE',
            homeTeamGoalsFt: 2,
            awayTeamCode: '_england',
            awayTeamGoalsFt: 3
        },
        {
            date: new Date(2012, 5, 19, 18, 0),
            stage: 'group',
            group: 'D',
            homeTeamCode: '_england',
            homeTeamGoalsFt: 1,
            awayTeamCode: 'UA',
            awayTeamGoalsFt: 0
        },
        {
            date: new Date(2012, 5, 19, 20, 45),
            stage: 'group',
            group: 'D',
            homeTeamCode: 'SE',
            homeTeamGoalsFt: 2,
            awayTeamCode: 'FR',
            awayTeamGoalsFt: 0
        }
    ]; 

    _.each(matches, function(match) {
        Matches.insert(match);
    });

    console.log("Inserted " + Matches.find({}).count() + " matches");
}