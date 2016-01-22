describe("pingPong", function() {
  it("detects if the input is a number", function() {
    expect(pingPong("hello", "hi there", "383!83")).to.equal(false);
  });
});
