class Block {
  constructor (index, previousHash, timestamp, data, hash, nonce) {
    this.index = index;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.data = data;
    this.hash = hash;
    this.nonce = nonce;
  }
  
  createHash() {
    
  }
  
  mine() {
    
  }
}

class Blockchain {
  constructor() {
    this.blockchain = [this.createGenesis()];
  }
  
  createGenesis(){
    return new Block();
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
