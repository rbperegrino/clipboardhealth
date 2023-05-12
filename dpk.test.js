const {deterministicPartitionKey} = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the partitionKey when given it on object input", () => {
    const event = { partitionKey: 'testing' };
    const key = deterministicPartitionKey(event);
    expect(key).toBe(event.partitionKey);
  });

  it("Returns a new hash when given it a hash with more than 256 characters", () => {
    const event = new Array(512);
    const key = deterministicPartitionKey(event.join());
    expect(key.length).toBe(128);
  });
});


