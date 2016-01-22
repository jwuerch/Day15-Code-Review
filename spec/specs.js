describe("pingPong", function() {
  it("detects if the input is a number", function() {
    expect(pingPong("hello", "hi there", "383!83")).to.equal(false);
  });

  it("checks to see if a number is divisible by both 5 and 3", function() {
    expect(pingPong(15, 30, 45)).to.equal("pingpong");
  });
});
