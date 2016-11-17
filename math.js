Math.matrix={};
Math.matrix.add=function(a,b){
	if(a.length==b.length){
		var equalcolumns=0;
		for(var x=0;x<a.length;x++){
			if(a[x].length==b[x].length){equalcolumns++}
		}
		if(equalcolumns==a.length){
			var c=[];
			for(var x=0;x<a.length;x++){
				c[x]=[];
				for(var y=0;y<a[x].length;y++){
					c[x][y]=a[x][y]+b[x][y];
				}
			}
			return c;
		}
		else{
			console.log("Matrices do no have an equal number of columns")
		}
	}
	else{
		console.log("Matrices do not have an equal number of rows")
	}
	
}