Vue.component("jo-bhi-dena-hai", {
	template:"<div><p> this is called my first markup or component and my name is : <b> {{ name }} </b> </p><p> and my Git Username is : <b> {{ uname }} </b></p><p> and Methods Running : <b> {{ method1() }} </b> , computed : <b> {{ computed1 }} </b> </p><br><button @click='fireMe'> Click me</button></div>",
	data : function(){
		return {
			name : "Ajay Magarde",
			uname : "ajay-laxyo"

		}
	},

	methods : {
		method1 : function(){
			return "this is vue component";
		},

		fireMe : function(){
			alert("fire me successfully running");
		}
	},

	computed : {
		computed1 : function(){
			return "simple message";
		}
	}
});

var myapp1 = new Vue({
	el:"#my-app-1",
	data:{
		fname :"",
		lname :"",
		channelName : "OWT"
	},

	methods:{
		
	},

	computed :{   ////////////////////////getter and setter function,,, computed property contain basically two functions
		fullName : {
			get : function(){ //setter function of full name
				return this.fname+" "+this.lname;
			},
			set :function(){ //getter funnction of full name
				this.channelName = "updated OWT"
			}
		}
	}
});

//////////////////////////  second instance /////////////////////////////////////////

var myapp2 = new Vue({
	el:"#my-app-2",
	data:{

	},

	methods:{
		btnSubmit : function(){
			//console.log(this.$refs);
			var name = 'Name :- '+this.$refs.name.value;
			alert(name);
			alert('Name :- '+this.$refs.email.value);
			alert('Name :- '+this.$refs.para.innerHTML);
		}
	}
});