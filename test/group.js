contract('Group', function(accounts) {
  it("should assert true", function(done) {
    var group = Group.at(Group.deployed_address);
    assert.isTrue(true);
    done();
  });
});
