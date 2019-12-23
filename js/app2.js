var myapp = new Vue({
	el: "#my-app",
	data:{
		counter: 0,
		x:0,
		y:0
	},
	methods:{
		increment : function(inc){
			this.counter += inc;
		},
		decrement : function(desc){
			this.counter -= desc;
		},
		moveFunction : function(event){
			this.x = event.offsetX;
 			this.y = event.offsetY;
 		},
 		overFunction : function(){
 			console.log("this is msg due to mouse over");
 		},
 		outFunction : function(){
 			console.log("this is msg due to mouse Out");
 		},
 		pressFunction : function(event){
 			console.log(event.key);
 		},
 		upFunction : function(){
 			console.log("key up function.....");
 		},
 		downFunction : function(event){
 			console.log(event.key);
 		}
	}
});
