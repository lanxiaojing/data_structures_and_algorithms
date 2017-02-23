var data1 = [{
	"name": "yijidaohang1",
	"url": "1111",
	"id": "nav1",
	"child": [{
		"name": "erji1",
		"url": "222",
		"id": "cnav1"
	},{
		"name": "erji2",
		"url": "333",
		"id": "cnav2"
	}]
}]

var data2 = [{
	"name": "yijidaohang1",
	"url": "1111",
	"id": "nav1",
	"parent_id": "null"
},{
	"name": "erji1",
	"url": "222",
	"id": "cnav1",
	"parent_id": "nav1"
},{
	"name": "erji2",
	"url": "333",
	"id": "cnav2",
	"parent_id": "nav1"
}]


// 写两个函数 实现data1 data2互转


function oneToTwo(data) {
	var result = [];

	function callMyself(data,parent_id){
		parent_id = parent_id || null;
		var node = {'name':null,'url':null,'_id':null,'parent_id':parent_id};
		for(var i = 0;i < data.length;i++){
			node.name = data[i].name;
			node.url = data[i].url;
			node._id = data[i]._id;
			result.push(node);
			if(data[i].child){
				callMyself(data[i].child,node._id);
			}
		}
	}

	callMyself(data);
	return result;
}

function twoToOne(data,parentid){
	var nodeList = [], parentnode = {};
	parentid = parentid || null;
	for(var i=0;i<data.length;i++){
		if (data[i].parent_id === parentid){
		    parentnode = {'name':data[i].name,'url':data[i].url,'_id':data[i]._id}
			parentnode.child = rightToLeft(data,parentnode._id)
			nodeList.push(parentnode)
		} 
	}
	return nodeList
}











