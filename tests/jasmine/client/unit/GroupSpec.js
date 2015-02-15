describe('When creating a group', function() {
    it('Should have a name starting with "Group"', function() {
        var group = new Group("A");

        expect(group.getName()).toBe("Group A");
    });
});
