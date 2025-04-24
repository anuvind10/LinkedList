class LinkedList {
  constructor(head, tail, count) {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  //   Add a new node at the end of the linked list
  append(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.count++;
    return this;
  }

  //   add a new node at the begenning of the linked list
  prepend(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.count++;
    return this;
  }

  //   return the node at the requested index
  at(index) {
    let counter = 0;
    let i = this.head;
    while (i) {
      if (counter === index) {
        return i;
      }
      i = i.next;
      counter++;
    }
  }

  //   Remove the last node of the linked list
  pop() {
    if (this.tail === this.head) {
      this.tail = null;
      this.head = null;
    } else {
      let newTailIndex = this.count - 2;
      let counter = 0;
      let i = this.head;
      while (i) {
        if (counter === newTailIndex) {
          let removedElement = i.next;
          this.tail = i;
          i.next = null;
          this.count--;
          return removedElement;
        }
        i = i.next;
        counter++;
      }
    }
  }

  //   checks if a value is present in the linked list
  contains(value) {
    let i = this.head;
    while (i) {
      if (i.value === value) {
        return true;
      }
      i = i.next;
    }
    return false;
  }

  //   returns the index of the value
  find(value) {
    let index = 0;
    let i = this.head;

    while (i) {
      if (i.value === value) {
        return index;
      }
      index++;
      i = i.next;
    }
    return null;
  }

  //   returns the linked as a string
  toString() {
    let i = this.head;
    let listString = "";
    while (i) {
      listString += ` (${i.value})` + " ->";
      i = i.next;
    }
    listString += " null";
    return listString;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
