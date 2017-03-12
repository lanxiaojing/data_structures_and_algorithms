function Node(val) {
    this.prev = null;
    this.next = null;
    this.val = val;
}

// 双向链表
function List() {
    this.head = null;
    this.currNode = this.head;
    this.length = 0;
}

List.prototype = {
    clear: function() {
        // 清空链表
        this.length = 0;
        this.currNode = this.head = null;
    },
    toString: function() {
        // 打印链表
        var curr = this.head,
            str = curr.val + ' ';
        while (curr.next) {
            str += curr.next.val + ' ';
            curr = curr.next;
        }
        console.log(str);
    },
    insert: function(ele, after) {
        // 将给定值插入到after之后
        var newNode = new Node(ele);
        this._moveTo(after);
        newNode.prev = this.currNode;
        newNode.next = this.currNode.next;
        this.currNode.next = newNode;
        ++this.length;
    },
    append: function(ele) {
        // 在链表尾部添加新节点
        var newNode = new Node(ele);
        if (!this.head) {
            this.head = newNode;
            this.currNode = this.head;
        } else {
            this._end();
            this.currNode.next = newNode;
            newNode.prev = this.currNode;
        }
        ++length;
    },
    remove: function(ele) {
        // 删除给定值
        var ndoe;
        if (!this._contains(ele)) {
            return false
        }
        if (this.head.val === ele) {
            node = this.head;
            this.head = this.head.next;
            this.head.prev = null;
            --length;

            node.next = null;
            return true
        }
        this._front();
        while (this.currNode.val !== ele) {
            if (!this.currNode.next) {
                break;
            }
            this._next();
        }
        node = this.currNode;
        if (!this.currNode.next) {
            this.currNode.prev.next = null;
        } else {
            var prevNode = this.currNode.prev,
                nextNode = this.currNode.next;
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
        }
        --length;
        node.prev = null;
        node.next = null;
        return true
    },
    find: function(ele) {
        // 寻找一个值，如果值在链表里则返回该值，否则返回false
        this._front();
        while (this.currNode.val !== ele) {
            this._next();
        }
        return this.currNode;
    },
    _contains: function(ele) {
        // 判断给定值是否在链表里
        if (this._indexOf(ele) > -1) {
            return true
        }
        return false
    },
    _indexOf: function(ele) {
        // 返回给定值在链表中的位置，若不在链表中返回－1
        var i = 0,
            curr = this.head;
        if (curr.val === ele) {
            return i;
        }
        while (curr.next) {
            i++;
            if (curr.next.val === ele) {
                return i
            }
            curr = curr.next;
        }
        return -1
    },
    _front: function() {
        // 将链表当前位置移动到第一位
        this.currNode = this.head;
    },
    _end: function() {
        // 将链表当前位置移动到最后一位
        while (this._hasNext()) {
            this._next();
        }
    },
    _prev: function() {
        // 将当前位置前移一位
        this.currNode = this.currNode.prev;
    },
    _next: function() {
        // 将当前位置后移一位
        this.currNode = this.currNode.next;
    },
    _moveTo: function(ele) {
        // 将当前位置移动到指定位置
        this._front();
        if (this.currNode.val === ele) {
            return this.currNode;
        }
        while (this.currNode.next) {
            if (this.currNode.next.val === ele) {
                return this.currNode
            }
            this._next();
        }
        return false
    },
    _hasNext: function() {
        if (this.currNode.next) {
            return true
        }
        return false
    },
    _hasPrev: function() {
        if (this.currNode.prev) {
            return true
        }
        return false
    },
    _compare: function(ele1, ele2) {
        if (ele1.val === ele2.val && ele1.prev === ele2.prev && ele1.next === ele2.next) {
            return true
        }
        return false
    }
}

// 栈
function Stack() {
    this.length = 0;
    this.head = this.top = null;
}
// todo: test
Stack.prototype = {
    clear: function() {
        this.length = 0;
        this.head = this.top = null;
    },
    push: function(node) {
        // 入栈
        var newNode = new Node(node);
        if (!this.head) {
            this.top = this.head = newNode;
        } else {
            this.top.next = newNode;
            newNode.prev = this.top;
            this.top = this.top.next;
        }
        ++this.length;
    },
    pop: function() {
        // 出栈
        var curr = this.top;
        this.top = this.top.prev;
        this.top.next = null;
        --this.length;
        return curr;
    },
    peek: function() {
        // 返回栈顶元素，不删除它
        return this.top;
    },
    toString: function() {
        var curr = this.head.next,
            str = this.head.val + ' ';
        for (var i = 1; i < this.length; i++) {
            str += curr.val + ' ';
            curr = curr.next;
        }
        console.log(str)
    }
}

// 栈的应用：判断回文
function isPalindrome(word) {

}

// 练习：
// 用栈判断一个算术表达式中括号是否匹配。写一个函数，接受一个算术表达式作为参数，返回括号却是的位置，如：2.3 + 23 / 12 + (1.3 * 2;

// 一个算术表达式的后缀表达式形式如下：
//  op1 op2 operator
//  用两个栈，一个存操作数，一个存操作符，设计并实现一个js函数，该函数可以将中缀表达式转换为后缀表达式，然后利用栈对该表达式求值。

// 佩茨糖果盒。不改变和内其他糖果叠放顺序基础上移除盒中的黄色糖。


// 队列
function Queue() {

}

Queue.prototype = {
    clear: function() {

    },
    enqueue: function(node) {
        //入队
    },
    dequeue: function() {
        // 出队
    },
    peek: function() {
        // 读取队头元素
    },
    toString: function() {

    },
    _empty: function() {

    },
    _front: function() {

    },
    _end: function() {

    }
}

// 字典
function Dist() {

}
Dist.prototype = {

}

// 集合
function Set() {

}
Set.prototype = {

}

//散列表
function HashTable() {

}
HashTable.prototype = {

}

// 二叉树

function BST() {

}
BST.prototype = {

}


// 图


// 算法

// 排序算法

// 冒泡

// 选择

// 插入

// 希尔

// 归并

// 快排

// 检索算法

// 顺序查找

// 二分查找

// 动态规划

// 贪心算法