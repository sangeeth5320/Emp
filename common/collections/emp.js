// Collection declaration

Emp = new Meteor.Collection('emp');


// Schema declaration

empschema= new SimpleSchema({
	
    // Adding fields to the schema

    "name":{
    	type:String,
    	optional:true
    },
    

    "empId":{
    	type:Number,
    	optional:true
    }
    
});

//Emp.attachSchema('empschema');


if (Meteor.isClient) {
  Meteor.subscribe("Emp");
} 