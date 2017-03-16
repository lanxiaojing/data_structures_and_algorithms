// 基础节点类
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

List.prototype.clear = function () {
    // 清空链表
    this.length = 0;
    this.currNode = this.head = null;
};

List.prototype.toString = function () {
    // 打印链表
    var curr = this.head,
        str = curr.val + ' ';
    while (curr.next) {
        str += curr.next.val + ' ';
        curr = curr.next;
    }
    return str
};

List.prototype.insert = function (ele, after) {
    // 将给定值插入到after之后
    var newNode = new Node(ele);
    this._moveTo(after);
    newNode.prev = this.currNode;
    newNode.next = this.currNode.next;
    this.currNode.next = newNode;
    ++this.length;
};

List.prototype.append = function (ele) {
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
};

List.prototype.remove = function (ele) {
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
};

List.prototype.find = function (ele) {
    // 寻找一个值，如果值在链表里则返回该值，否则返回false
    this._front();
    while (this.currNode.val !== ele) {
        this._next();
    }
    return this.currNode;
};

List.prototype.advance = function (n) {
    // 向前移动n个节点
};

List.prototype.back = function (n) {
    // 向后移动n个节点
};

List.prototype.show = function () {
    // 显示当前节点
};

List.prototype._contains = function (ele) {
    // 判断给定值是否在链表里
    if (this._indexOf(ele) > -1) {
        return true
    }
    return false
};

List.prototype._indexOf = function (ele) {
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
};

List.prototype._front = function () {
    // 将链表当前位置移动到第一位
    this.currNode = this.head;
};

List.prototype._end = function () {
    // 将链表当前位置移动到最后一位
    while (this._hasNext()) {
        this._next();
    }
};

List.prototype._prev = function () {
    // 将当前位置前移一位
    this.currNode = this.currNode.prev;
};

List.prototype._next = function () {
    // 将当前位置后移一位
    this.currNode = this.currNode.next;
};

List.prototype._moveTo = function (ele) {
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
};

List.prototype._hasNext = function () {
    if (this.currNode.next) {
        return true
    }
    return false
};

List.prototype._hasPrev = function () {
    if (this.currNode.prev) {
        return true
    }
    return false
};

List.prototype._compare = function (ele1, ele2) {
    if (ele1.val === ele2.val && ele1.prev === ele2.prev && ele1.next === ele2.next) {
        return true
    }
    return false
}

// 练习：使用单向链表纪录用户输入的一组测试成绩
// 四十个人围成一个圈，从一个人开始，数到第三个人人时将第三个人杀死，然后再数，直到杀光所有人。计算两个位置，站在这两个位置的人得以幸存。写一段程序，将n个人
// 围 一圈，第m个人会被杀死，计算一圈人中哪两个人会存活。