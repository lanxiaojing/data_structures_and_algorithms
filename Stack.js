// 栈
function Stack() {
    this.length = 0;
    this.head = this.top = null;
}

// todo: test
Stack.prototype.clear = function () {
    this.length = 0;
    this.head = this.top = null;
};

Stack.prototype.push = function (node) {
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
};

Stack.prototype.pop = function () {
    // 出栈
    var curr = this.top;
    this.top = this.top.prev;
    this.top.next = null;
    --this.length;
    return curr;
};

Stack.prototype.peek = function () {
    // 返回栈顶元素，不删除它
    return this.top;
};

Stack.prototype.toString = function () {
    var curr = this.head.next,
        str = this.head.val + ' ';
    for (var i = 1; i < this.length; i++) {
        str += curr.val + ' ';
        curr = curr.next;
    }
    return str
};

// 栈的应用：判断回文
function isPalindrome(word) {
    var stack = new Stack(),
        rewo;
    for (var i = word.length - 1; i >= 0; i++) {
        stack.push(word[i])
    }
    console.log(stack.toString().split(' ').join(''), word);
    if (stack.toString().split(' ').join('') === word) {
        return true
    }
    return false
}

// 练习： 用栈判断一个算术表达式中括号是否匹配。写一个函数，接受一个算术表达式作为参数，返回括号却是的位置，如：2.3 + 23 / 12 + (1.3 *
// 2; 一个算术表达式的后缀表达式形式如下：  op1 op2 operator
// 用两个栈，一个存操作数，一个存操作符，设计并实现一个js函数，该函数可以将中缀表达式转换为后缀表达式，然后利用栈对该表达式求值。
// 佩茨糖果盒。不改变和内其他糖果叠放顺序基础上移除盒中的黄色糖。
function moveOut() {}