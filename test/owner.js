contract('owner', function(accounts) {
  it("should assert true", function(done) {
    var owner = owner.at(owner.deployed_address);
    assert.isTrue(true);
    done();
  });
});
