export type Node<T> = {
  data: T;
  priority: number;
};

export class PriorityQueue<T = unknown> {
  nodes: Node<T>[] = [];

  /**
   * Adds a value to the queue with given priority.
   * Higher priority values are dequeued first.
   * If priority already exists, last one in is dequeued first.
   */
  enqueue(item: T, priority: number): void {
    // Not implemented
    //   this.nodes.push({ data: item, priority });
    //   this.nodes.sort((a, b) => b.priority - a.priority);
    //   const nums = { data: item, priority };
    //   nums.findIndex(num);
    //   function num(num) {
    //     return node.priority <= priority;
    //   }
    // }
    const index = this.nodes.findIndex((n) => n.priority <= priority);
    if (index >= 0) {
      this.nodes.splice(index, 0, { data: item, priority });
    } else {
      this.nodes.push({ data: item, priority });
    }
  }

  /**
   * Removes and returns highest priority value in the queue.
   * Returns `undefined` if queue is empty.
   */
  dequeue(): T | undefined {
    const node = this.nodes.shift();
    return node?.data;
  }

  /**
   * Returns highest priority value in the queue without removing it.a
   * Returns `undefined` if queue is empty.
   */
  peek(): T | undefined {
    return this.nodes[0]?.data;
  }
}
