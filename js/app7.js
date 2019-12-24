// Syntax of custom directive :-
// Vue.directive('directive_name', {directive_function});

Vue.directive('my_directive', {
	bind : function(el, binding, vnode){
		console.log(el);//refers to DOM elements 
		el.style.backgroundColor = "blue";
		el.style.fontSize = "20px";
		el.style.color = "green";
		el.title = "Now title is updated";
		console.log(binding);	//refers to properties of directive
	},

	update : function(oblect1, oblect2){

	},

	unbind : function(){

	}
});

///////////////////////////// new directive //////////////////////////////////

Vue.directive('my_owt', function(el, binding){
	// console.log(el);
	// console.log(binding);
	var dir_arg = binding.arg;
	if(dir_arg=="red")
	{
		el.style.backgroundColor = "red";
		el.style.fontSize = "20px";
		el.style.color = "white";
	}
	if(dir_arg=="blue")
	{
		var mod = binding.modifiers.change;
		if(mod == true)
		{
			el.style.backgroundColor = "orange";
			el.style.fontSize = "20px";
			el.style.color = "white";
		}
		else
		{
			el.style.backgroundColor = "blue";
			el.style.fontSize = "20px";
			el.style.color = "white";
		}
	}
});

var myapp1 = new Vue({
	el : "#my-app-1",
	data : {
		message : "this is custom call"
	},

	methods : {

	},

	computed : {

	}

});

var myapp2 = new Vue({
	el : "#my-app-2",
	data : {
		channelName : "Online Web Tutor"
	},

	methods : {

	},

	computed : {

	}

});