describe('Group ::', function() {
    it('Name should be prefixed with "Group"', function() {
        var group = new Group('A');

        expect(group.getName()).toBe("Group A");
    });

    it('List of countries should be amendable', function() {
        var countries = [{name: 'Norway'}];
        var group = new Group('A', countries);
        group.addCountry({name: 'England'});

        expect(group.getCountries()).toBeDefined();
        expect(group.getCountries().length).toBe(2);
    });
});
