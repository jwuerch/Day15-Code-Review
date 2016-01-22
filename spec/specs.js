describe("pingPong", function() {
  it("detects if the input is a number", function() {
    expect(pingPong("hi")).to.equal(false);
  });

  it("checks to see if a number is divisible by both 5 and 3", function() {
    expect(pingPong(15)).to.equal("pingpong");
  });

  it("checks to see if a number is divisible by just 5", function() {
    expect(pingPong(5)).to.equal("pong");
  });

  it("checks to see if a number is divisible by just 3", function() {
    expect(pingPong(3)).to.equal("ping");
  });

  it("returns number if not meeting any of the previous spec conditions, not divisible by 5 or 3", function() {
    expect(pingPong(4)).to.equal(4);
  });
});
