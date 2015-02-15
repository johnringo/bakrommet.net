Group = function(name) {
    this.name = name;
    this.countries = [];
}

Group = function(name, countries) {
    this.name = name;
    this.countries = countries;
}

Group.prototype.getName = function() {
    return "Group " + this.name;
}

Group.prototype.addCountry = function(country) {
    if (!this.countries) {
        countries = [];
    }
    this.countries.push(country);
}

Group.prototype.getCountries = function() {
    return this.countries;
}