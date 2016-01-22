describe("pingPong", function() {
  it("detects if the input is an integer for all characters in a string", function() {
    expect(pingPong(1.2)).to.equal("Please enter an integer.");
  });

  it("returns number if not meeting any of the previous spec conditions, not divisible by 5 or 3", function() {
    expect(pingPong(1)).to.eql([1]);
  });

  it("checks to see if a number is divisible by just 3", function() {
    expect(pingPong(3)).to.eql([ 1, 2, 'ping' ]);
  });

  it("checks to see if a number is divisible by just 5", function() {
    expect(pingPong(5)).to.eql([ 1, 2, 'ping', 4, 'pong' ]);
  });

  it("checks to see if a number is divisible by both 5 and 3", function() {
    expect(pingPong(15)).to.equal([1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", "pong", 11, "ping", 13, 14,"pingpong"]);
  });


});
