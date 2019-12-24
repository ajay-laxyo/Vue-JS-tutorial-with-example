var myapp1 = new Vue({
	el:"#my-app-1",
	data:{
		title:"My Peoject",
		fullname: "Ajay Magarde"
	},

	methods:{
		secondApp : function(){   // method same but working both for diff diff instance
			return "this is first instance ";
		}
	},
	computed:{
		fullName : function(){
		    return this.fullname;
		}
 	}
});

///////////////////////////////////////////////////////////////////

var myapp2 = new Vue({
	el:"#my-app-2",
	data:{
		author:"Ajay",
		title:myapp1.title
	},

	methods:{
		secondApp : function(){
			return "this is second instance ";
		},
		thirdAppFn : function(){
			return myapp1.secondApp();
		},
		accessComputedApp1 : function(){
			return myapp1.fullName;
		}
	}
});