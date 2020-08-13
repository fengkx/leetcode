type TireNode = {
  val: string;
  children: { [k: string]: TireNode };
  isEnd: boolean;
};

function NewTrieNode(val = ""): TireNode {
  return {
    val,
    children: {},
    isEnd: false,
  };
}

class Trie {
  root: TireNode;
  constructor() {
    this.root = NewTrieNode();
  }

  insert(word: string): void {
    let cur = this.root;
    for (const c of word) {
      if (!cur.children[c]) {
        cur.children[c] = NewTrieNode(c);
      }
      cur = cur.children[c];
    }
    cur.isEnd = true;
  }

  search(word: string): boolean {
    let cur = this.root;
    for (const c of word) {
      if (!cur.children[c]) {
        return false;
      }
      cur = cur.children[c];
    }
    return cur.isEnd;
  }

  startsWith(prefix: string): boolean {
    let cur = this.root;
    for (const c of prefix) {
      if (!cur.children[c]) {
        return false;
      }
      cur = cur.children[c];
    }
    return true;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
