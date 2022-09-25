/**
 * @param {number} k
 */
class MyCircularQueue {
  queue = [];
  maxSize = 0;
  
  constructor(k) {
    this.maxSize = k;
  }

  isFull() {
    return this.queue.length === this.maxSize;
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  enQueue(value) {
    if(this.isFull()) {
      return false;
    }
    this.queue = [...this.queue, value];
    return true;
  }

  deQueue() {
    if(this.isEmpty()) return false;
    
    const [first, ...rest] = this.queue;
    this.queue = rest;
    
    return true;
  }

  Front() {
    if(this.isEmpty()) return -1;
    
    return this.queue[0]
  }

  Rear() {
    if(this.isEmpty()) return -1;
    
    return this.queue[this.queue.length - 1];
  }
}

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */