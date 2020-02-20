package lru_cache

type CacheNode struct {
	key   int
	value int
	prev  *CacheNode
	next  *CacheNode
}

type LRUCache struct {
	size     int
	capacity int
	head     *CacheNode
	tail     *CacheNode
	cache    map[int]*CacheNode
}

func Constructor(capacity int) LRUCache {
	return LRUCache{
		size:     0,
		capacity: capacity,
		cache:    make(map[int]*CacheNode, capacity),
	}
}

func (this *LRUCache) Get(key int) int {
	if vn, ok := this.cache[key]; ok {
		this.moveToHead(vn)
		return vn.value
	} else {
		return -1
	}
}

func (this *LRUCache) Put(key int, value int) {
	if vn, ok := this.cache[key]; ok {
		vn.value = value
		this.moveToHead(vn)
	} else {
		n := &CacheNode{
			key:   key,
			value: value,
			prev:  nil,
			next:  this.head,
		}

		if this.head != nil {
			this.head.prev = n
		} else {
			this.tail = n
		}
		this.head = n
		this.cache[key] = n

		if this.size >= this.capacity {
			this.evictKey()
		} else {
			this.size++
		}
	}
}

func (this *LRUCache) moveToHead(vn *CacheNode) {
	// already is head
	if vn == this.head {
		return
	}
	//       -->     -->
	//     1      2       3
	//       <--     <--
	if vn == this.tail {
		this.tail = vn.prev
		this.tail.next = nil
		vn.prev = nil
		vn.next = this.head
		this.head.prev = vn
		this.head = vn
		return
	}

	// P <---> V <---> N
	// P <---\> V <\---> N
	vn.prev.next = vn.next
	vn.next.prev = vn.prev
	vn.next = this.head
	vn.prev = nil
	this.head.prev = vn
	this.head = vn

	return
}

func (this *LRUCache) evictKey() {
	delete(this.cache, this.tail.key)
	if this.tail != nil {
		this.tail = this.tail.prev
		this.tail.next = nil
	}
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * obj := Constructor(capacity);
 * param_1 := obj.Get(key);
 * obj.Put(key,value);
 */
