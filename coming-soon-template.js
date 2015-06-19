if (Meteor.isClient) {


  // I need to figure where to put this code its not in the html 
  // $.backstretch("http://dl.dropbox.com/u/515046/www/garfield-interior.jpg");


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
