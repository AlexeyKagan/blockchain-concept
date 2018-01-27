class Block {
  constructor (index, previousHash, timestamp, data, hash, nonce) {
    this.index = index;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.data = data;
    this.hash = hash;
    this.nonce = nonce;
  }

  static genesis() {
    return new Block(
      0,
      "0",
      1508270000000,
      "Block data!",
      "HASH-123456-HASH", // todo create hash
      0
    );
  }
}

class Blockchain {
  constructor() {
    this.blockchain = [Block.genesis()];
  }

  get() {
    return this.blockchain;
  }

  get latestBlock() {
    return this.blockchain[this.blockchain.length - 1];
  }

  calculateHash(index, previousHash, timestamp, data) {

  }

  addBlock(newBlock) {

  }


}
