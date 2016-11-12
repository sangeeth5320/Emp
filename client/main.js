import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.info.events({
  'submit #form1'(event, template) {

  	 event.preventDefault();
     console.log("Inserting data to the collection");

     let name =  event.target.name.value();
     let empId = event.target.empId.value();

     Emp.insert({"name":name, "empId":empId});

  },
});
