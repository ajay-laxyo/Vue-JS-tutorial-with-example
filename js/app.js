var myview = new Vue({
	el:"#our-app",
	data:{
		fname:"Ajay", 
		addr:"Laxyo House mahalakshmi nagar Indore",

		name:"YouTube", // lecture 3 start from here data binding 1st
		ulink:"https://www.youtube.com",
		title:"this is youtube link",
		imageLink:"../img/avt.png",
		isActive:"1", 
		textName:"Ajay",
		textEmail:"ajay@laxyo.org",
		paragraph:"<p> This is my paragraph set from JS file </p>"

	},
	// new Vue called new instance
	// lecture2 methods

	methods:{
		run : function(message, name){
			return "I am running "+message +" and my name is :"+ name;
		},
		welcome : function(dayTime){
			return "Good "+dayTime;
		},
		valueAccess : function(){
			return this.fname+", "+this.addr;
		}
		

	}
});