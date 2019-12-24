var myapp = new Vue({
	el:"#my-app",
	data:{
		isActive:true,
		count:0,
		students:["ajay", "kisan", "pratik", "abhishek"],
		teachers:[
			{name:"teacher 1", subject:"subject 1", location:{street:"street 1", city:"INDB"}},
			{name:"teacher 2", subject:"subject 2", location:{street:"street 2", city:"BPL"}},
			{name:"teacher 3", subject:"subject 3", location:{street:"street 3", city:"JBP"}},
			{name:"teacher 4", subject:"subject 4", location:{street:"street 4", city:"GWL"}}
		]
	},

	methods:{
		countValue : function(){
			this.count++;
		}
	}
});