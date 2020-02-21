package lfu_cache

type CacheNode struct {
	key    int
	value  int
	prev   *CacheNode
	next   *CacheNode
	parent *FreqNode
}

func (n *CacheNode) moveAddOneFreq(key int, value int) *CacheNode {
	var newFreqNode *FreqNode
	curFreqNode := n.parent

	if curFreqNode.next != nil && curFreqNode.next.freq == (curFreqNode.freq + 1) {
		newFreqNode = curFreqNode.next
	} else {
		newFreqNode = NewFreqNode(curFreqNode.freq + 1, curFreqNode, curFreqNode.next)
	}

	newCacheNode := &CacheNode{
		key:    key,
		value:  value,
		prev:   nil,
		next:   newFreqNode.head,
		parent: newFreqNode,
	}
	if newFreqNode.head == nil {
		newFreqNode.tail = newCacheNode
	} else {
		newFreqNode.head.prev = newCacheNode
	}

	newFreqNode.head = newCacheNode

	n.evictNode()
	return newCacheNode
}

type FreqNode struct {
	freq int
	head *CacheNode
	tail *CacheNode
	prev *FreqNode
	next *FreqNode
}

func (node *FreqNode) removeFreqNode() {
	if node.freq == 0 {
		panic("should not remove the head")
	}
	node.prev.next = node.next
	if node.next != nil {
		node.next.prev = node.prev
	}
}

func NewFreqNode(freq int, prev *FreqNode, next *FreqNode) *FreqNode {
	nn :=  &FreqNode{
		freq: freq,
		prev: prev,
		next: next,
	}
	if prev != nil {
		prev.next = nn
	}
	if next != nil {
		next.prev = nn
	}
	return nn
}

type LFUCache struct {
	size int
	capacity int
	cache map[int]*CacheNode
	lfuHead *FreqNode
}


func Constructor(capacity int) LFUCache {
	zeroFreqHead := &FreqNode{
		freq: 0, // head freq is true
	}
	return LFUCache{
		capacity: capacity,
		cache:    make(map[int]*CacheNode, capacity),
		lfuHead:zeroFreqHead,
	}
}


func (this *LFUCache) Get(key int) int {
	if found, ok := this.cache[key]; ok {
		newCacheNode := found.moveAddOneFreq(key, found.value)
		this.cache[key] = newCacheNode
		return found.value
	} else {
		return -1
	}
}


func (this *LFUCache) Put(key int, value int)  {
	if this.capacity == 0 {
		return
	}
	if found, ok := this.cache[key]; ok {
		newCacheNode := found.moveAddOneFreq(key, value)
		this.cache[key] = newCacheNode
	} else {
		if this.size >= this.capacity {
			lfuNode := this.lfuHead.next.tail
			delete(this.cache, lfuNode.key)
			lfuNode.evictNode()
		} else {
			this.size++
		}

		var oneFreqNode *FreqNode
		if this.lfuHead.next != nil && this.lfuHead.next.freq == 1 {
			oneFreqNode = this.lfuHead.next
		} else {
			oneFreqNode = NewFreqNode(1, this.lfuHead, this.lfuHead.next)
		}


		newCacheNode := &CacheNode{
			key:    key,
			value:  value,
			prev:   nil,
			next:   oneFreqNode.head,
			parent: oneFreqNode,
		}
		this.cache[key] = newCacheNode
		if oneFreqNode.head == nil {
			oneFreqNode.tail = newCacheNode
		} else {
			oneFreqNode.head.prev = newCacheNode
		}
		oneFreqNode.head = newCacheNode
	}

}

func (node *CacheNode) evictNode() {
	// remove the cache node from the linkedList
	// remove the freqNode(parent) if it is empty
	// do nothing to the map
	curFreqNode := node.parent
	if node.prev != nil {
		node.prev.next = node.next
	} else {
		curFreqNode.head = node.next
	}

	if node.next != nil {
		node.next.prev = node.prev
	} else {
		curFreqNode.tail = node.prev
	}

	if curFreqNode.head == nil {
		curFreqNode.removeFreqNode()
	}
}


/**
 * Your LFUCache object will be instantiated and called as such:
 * obj := Constructor(capacity);
 * param_1 := obj.Get(key);
 * obj.Put(key,value);
 */