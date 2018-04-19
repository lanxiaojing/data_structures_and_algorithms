function Node (data, left, right) {
    this.data = data;
    this.left = left || null;
    this.right = right || null;
}

Node.prototype = {
    show: function () {
        return this.data;
    }
}


function Binary (data) {
    this.root = new Node(data, null, null) || null;
}

Binary.prototype = {
    insert: function (data, node) {
        var curr = this.root, parent;
        
        if (!data) return false;

        if (this.root === null) {
            this.root = new Node(data, null, null);
            return
        }
        
        while(true) {
            parent = curr;
            if (data < curr.data) {
                curr = curr.left;
                if (!curr) {
                    parent.left = new Node(data, null, null);
                    break;
                }
            } else {
                curr = curr.right;
                if (!curr) {
                    parent.right = new Node(data, null, null);
                    break;
                }
            }

        }

    },

    find: function (data, node) {
        if (!data) return false;

        var curr = new Node(node, null, null) || this.root;
        if (data > curr) {
            this.find(data, curr.right)
        } else if (data < curr) {
            this.find(data, curr.left)
        } else {
            return curr
        }
    },
    remove: function () {

    }
}