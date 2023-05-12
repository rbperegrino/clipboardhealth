const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => { 
  const TRIVIAL_PARTITION_KEY = "0";
  if (!event) return TRIVIAL_PARTITION_KEY;
  const candidate = getCandidateByEvent(event);
  return candidate;
};


const hashDigest = (data) => crypto.createHash("sha3-512").update(data).digest("hex");

const getCandidateByEvent = (event) => {
  if (event.partitionKey) return event.partitionKey;
  const data = typeof event === 'string' ? event : JSON.stringify(event);
  return hashDigest(data);
}


