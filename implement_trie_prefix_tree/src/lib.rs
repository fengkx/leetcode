use std::collections::{hash_map::Entry, HashMap};
#[derive(Debug, Default, Clone)]
struct Node {
    value: Option<Box<str>>,
    tails: HashMap<char, TrieNode>,
}
#[derive(Debug, Default, Clone)]
struct Leaf {
    value: Box<str>,
}
#[derive(Debug, Clone)]
enum TrieNode {
    Node(Node),
    Leaf(Leaf),
}

impl TrieNode {
    fn leaf(val: &str) -> Self {
        let leaf = Leaf { value: val.into() };
        TrieNode::Leaf(leaf)
    }
    fn unwrap_leaf(self) -> Leaf {
        match self {
            TrieNode::Leaf(leaf) => leaf,
            TrieNode::Node(_) => panic!("expect leaf found node"),
        }
    }
    fn unwrap_node(self) -> Node {
        match self {
            TrieNode::Node(node) => node,
            TrieNode::Leaf(_) => panic!("expect node found leaf"),
        }
    }
    fn unwrap_node_mut(&mut self) -> &mut Node {
        match self {
            TrieNode::Leaf(_) => panic!("expect node found leaf"),
            TrieNode::Node(node) => node,
        }
    }
    fn add(&mut self, word: &str) {
        let self_node: &mut Node = match self {
            TrieNode::Node(node) => node,
            TrieNode::Leaf(leaf) => {
                let node = Node::default();
                let leaf = std::mem::replace(self, TrieNode::Node(node));
                let Leaf { value } = leaf.unwrap_leaf();
                let node = self.unwrap_node_mut();
                let mut chars = value.chars();
                if let Some(hash_key) = chars.next() {
                    let suffix = chars.as_str();
                    node.tails.insert(hash_key, TrieNode::leaf(suffix));
                } else {
                    node.value = Some(value);
                }
                node
            }
        };

        let mut chars = word.chars();
        if let Some(hash_key) = chars.next() {
            let suffix = chars.as_str().into();
            match self_node.tails.entry(hash_key) {
                Entry::Vacant(entry) => {
                    entry.insert(TrieNode::leaf(suffix));
                }
                Entry::Occupied(mut entry) => {
                    entry.get_mut().add(suffix);
                }
            };
        } else {
            self_node.value = Some(word.into());
        }
    }
    fn search(&self, word: &str) -> bool {
        let mut chars = word.chars();
        if let Some(ch) = chars.next() {
            match self {
                TrieNode::Leaf(leaf) => *leaf.value == *word,
                TrieNode::Node(node) => match node.tails.get(&ch) {
                    Some(node) => {
                        let suffix = chars.as_str();
                        node.search(suffix)
                    }
                    None => false,
                },
            }
        } else {
            match self {
                TrieNode::Node(node) => node.value.as_ref().map(|s| s.is_empty()).unwrap_or(false),
                TrieNode::Leaf(leaf) => leaf.value.is_empty(),
            }
        }
    }

    #[cfg(feature = "prefix-loop")]
    fn prefix(&self, prefix: &str) -> bool {
        let mut chars = prefix.chars();
        let mut cur = self;
        loop {
            match cur {
                TrieNode::Node(node) => {
                    let ch = chars.next();
                    if ch.is_none() {
                        return true;
                    }
                    if let Some(n) = node.tails.get(&ch.unwrap()) {
                        cur = n;
                    } else {
                        return false;
                    }
                }
                TrieNode::Leaf(leaf) => {
                    let suffix = chars.as_str();
                    return leaf.value.starts_with(suffix);
                }
            }
        }
    }

    #[cfg(feature = "prefix-recursive")]
    fn prefix(&self, prefix: &str) -> bool {
        if prefix.is_empty() {
            return true;
        }
        let mut chars = prefix.chars();
        if let Some(ch) = chars.next() {
            match self {
                TrieNode::Leaf(leaf) => leaf.value.starts_with(prefix),
                TrieNode::Node(node) => match node.tails.get(&ch) {
                    Some(node) => {
                        let suffix = chars.as_str();
                        node.prefix(suffix)
                    }
                    None => false,
                },
            }
        } else {
            true
        }
    }
}
struct Trie {
    root: TrieNode,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl Trie {
    /** Initialize your data structure here. */
    fn new() -> Self {
        let node = Node::default();
        Trie {
            root: TrieNode::Node(node),
        }
    }

    /** Inserts a word into the trie. */
    fn insert(&mut self, word: String) {
        self.root.add(&word);
        // println!("{:#?}", self.root);
    }

    /** Returns if the word is in the trie. */
    fn search(&self, word: String) -> bool {
        self.root.search(&word)
    }

    /** Returns if there is any word in the trie that starts with the given prefix. */
    fn starts_with(&self, prefix: String) -> bool {
        self.root.prefix(&prefix)
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * let obj = Trie::new();
 * obj.insert(word);
 * let ret_2: bool = obj.search(word);
 * let ret_3: bool = obj.starts_with(prefix);
 */

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn it_works() {
        let mut t = Trie::new();
        t.insert("word".to_string());
        t.insert("hello".to_string());
        t.insert("hel".to_string());
        assert!(!t.starts_with("a".to_string()));

        t.insert("a".to_string());
        assert!(t.starts_with("a".to_string()));
        assert!(t.search("hel".to_string()));
        assert!(t.search("word".to_string()));
        assert!(!t.search("wor".to_string()));
        assert!(t.starts_with("hell".to_string()));
        assert!(!t.starts_with("prefix".to_string()));
        assert!(t.starts_with("wo".to_string()));
    }

    #[test]
    fn one_char() {
        let mut t = Trie::new();
        t.insert("a".to_string());
        assert!(t.search("a".to_string()));
        assert!(t.starts_with("a".to_string()));
    }

    #[test]
    fn starts_with() {
        let mut t = Trie::new();
        t.insert("hello".to_string());
        println!("{:#?}", t.root);
        assert!(t.starts_with("hell".to_string()))
    }

    #[test]
    fn fuck_oj() {
        let mut t = Trie::new();
        t.insert("A".to_string());
        t.insert("B".to_string());
        t.insert("C".to_string());
        t.insert("ABC".to_string());
        t.insert("ABCD".to_string());
        t.insert("DDD".to_string());
        t.insert("BB".to_string());

        assert!(t.search("A".to_string()));
        assert!(t.search("B".to_string()));
        assert!(t.search("C".to_string()));
        assert!(t.search("ABC".to_string()));

        assert!(!t.search("AQ".to_string()));
        assert!(!t.search("BQ".to_string()));
        assert!(!t.search("CQ".to_string()));
        assert!(!t.search("ABCQ".to_string()));

        assert!(t.starts_with("A".to_string()));
        assert!(t.starts_with("B".to_string()));
        assert!(t.starts_with("C".to_string()));
        assert!(t.starts_with("ABC".to_string()));
    }
}
