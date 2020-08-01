// this is the object that is executing the current function
var guide = {
    title : 'Quide to Programming',
    content : 'Content will go here',
    visibleToUser: function (viewingUserRole) {
      if (viewingUserRole === 'paid') {
        return true;
      } 
    },
    renderContent: function(userRole) {
      if (this.visibleToUser(userRole)) {
        console.log(this.title + '-' + this.content);
      } else {
        this.content = '';
        console.log(this.title + '-' + this.content);
      }
    }
  }
  
  user = {role: 'paid'};
  guide.renderContent(user.role); // "Quide to Programming-Content will go here"
  user = {role: 'free'};
  guide.renderContent(user.role); // "Quide to Programming-"

//   if the function is inside an object , that is called a method and This refers to that object
// if the function is a regular function, noyt part of an object then This refers to a global object (Window in browsers andGlobal in node)
