Math.dotproduct=function(a,b){
	if(a.length==b.length){
		dotproduct=0;
		for(var x=0;x<a.length;x++){
			dotproduct+=a[x]*b[x];
		}
		return dotproduct;
	}
	else{
		console.log("Arrays are not equal length");
		return;
	}
}
Math.matrix={};
Math.matrix.analyse=function(a){
	if(Array.isArray(a)){
		var a={matrix:a};
		a.rows=a.matrix.length;
		a.cols=a.matrix[0].length;
		for(var x=1;x<a.rows;x++){
			if(a.cols!=a.matrix[x].length){
				console.log("Inconsistent number of columns in matrix");
				return;
			}
		}
		return a;
	}
	else if(!Array.isArray(a) && typeof(a)=="object"){
		return a;
	}
}
Math.matrix.transpose=function(a){
	var a=Math.matrix.analyse(a);
	transpose=[];
	for(var x=0;x<a.cols;x++){
		transpose[x]=[];
		for(var y=0;y<a.rows;y++){
			transpose[x][y]=a.matrix[y][x];
		}
	}
	return transpose;
}
Math.matrix.add=function(a,b){
	var a=Math.matrix.analyse(a);
	var b=Math.matrix.analyse(b);
	if(a.rows==b.rows){
		if(a.cols==b.cols){
			var add=[];
			for(var x=0;x<a.rows;x++){
				add[x]=[];
				for(var y=0;y<b.cols;y++){
					add[x][y]=a.matrix[x][y]+b.matrix[x][y];
				}
			}
			return add;
		}
		else{
			console.log("Matrices do not have an equal number of columns");
			return;
		}
	}
	else{
		console.log("Matrices do not have an equal number of rows");
		return;
	}
	
}
Math.matrix.multiply=function(a,b){
	var a=Math.matrix.analyse(a);
	var b=Math.matrix.analyse(b);
	if(a.cols==b.rows){
		multiply=[];
		for(var x=0;x<a.rows;x++){
			multiply[x]=[];
			for(var y=0;y<b.cols;y++){
				multiply[x][y]=Math.dotproduct(a.matrix[x],Math.matrix.transpose(b)[y]);
			}
		}
		return multiply;
	}
	else{
		console.log("Matrices are not mulitplicable")
	}
}
Math.array={};
Math.array.max=function(arr){
	var max = arr.reduce(function(a, b) {
		return Math.max(a, b);
	});
	return max;
}
Math.isInt=function(a){
	return Math.round(a)===a;
}
Math.factors=function(a){
	var factors=[];
	for(var x=1;x<=a;x++){
		if(Math.isInt(a/x)){
			factors.push(x);
		}
	}
	return factors;
}
Math.hcf=function(a,b){
	
}
