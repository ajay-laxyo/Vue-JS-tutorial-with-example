var myapp = new Vue({
	el:"#my-app",
	data:{
		char:"",
		name:"",
		email:"",
		// lecture 11 computed properties
		fname:"",
		lname:"",
		cm:"",
		//mathametical expression
		maths:0,
		science:0,
		english:0,
		// dynamic CSS classes
		isActive:false
	},
	
	methods:{
		keypressFunction: function(event){
			//console.log("simple message......");
			this.char = event.key;
		},
		// toggleClass dynamic css
		toggleClass : function(){
			this.isActive = !this.isActive;
		}
	},
			/// lecture 11 computed properties
	computed:{
		getFullName : function(){
			return this.fname+" "+this.lname;
		},

		convertToFeet : function(){
			return this.cm/12;
		},
		totalMarks : function(){
			total = parseInt(this.maths)+parseInt(this.science)+parseInt(this.english);
			return total/3;
		}
	}
});