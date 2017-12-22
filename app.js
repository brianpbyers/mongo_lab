var mongo = require('mongodb').MongoClient;
var prompt = require('prompt-sync')();
var url = ('mongodb://localhost:27017/restaurant_db');

// mongo.connect(url, function(err, db){
//   var collection = db.collection('restaurants');
//   var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
//   if(allChoice == "all"){
//     collection.find().toArray(function(err, doc){
//       console.log(doc);
//     });
//   } else {
//     console.log("Aw, you don't want to see the restaurants?");
//   }
// });

//FIND
// mongo.connect(url, function(err, db){
//   var collection = db.collection('restaurants');
//   var which = prompt("Which restaurant would you like to see? ");
//   collection.find({name: which}).toArray(function(err,doc){
//   	if(err) console.log('There has been an error.',err);
//   	if(doc[0]) console.log(doc);
//   	else console.log("We could not find any restaurants by that name.");
//   });
//  });

// INSERT
// mongo.connect(url, function(err, db){
//   var collection = db.collection('restaurants');
//   var myRestaurant = prompt("What is the name of the restaurant you're adding? ");
//   var myAddress = prompt("What is the street address? ");
//   var zip = prompt("What is the zip code? ");
//   var yelp = prompt("what is the yelp url? ");
//   collection.insert({
//   	name:myRestaurant, 
//   	address:{
//   		street: myAddress, 
//   		zipcode: zip
//   		}, 
//   	yelp: yelp},
// 	function(err, res){
// 		if(err) console.log('There has been an error.', err);
// 		else console.log(res);
// 	});

// 	});

// UPDATE
// mongo.connect(url,function(err,db ){
// 	var collection = db.collection('restaurants');
// 	var which = prompt("Which restaurant would you like to change? ");
// 	collection.find({name: which}).toArray(function(err,doc){
// 		if(err) console.log("There has been an error", err);
// 		else if(doc[0]){
// 			console.log("Updating", doc[0]);
// 			var toPrompt = prompt("What would you like to update? N for name, A for Address, Z for Zip, Y for yelp").toUpperCase();
// 			if(toPrompt === 'N') doc[0].name = prompt("What would you like the name to be? ");
// 			else if(toPrompt === 'A') doc[0].address.street = prompt("What is the new street address? ");
// 			else if(toPrompt === 'Z') doc[0].address.zipcode = prompt("What is the new Zip code? ");
// 			else if(toPrompt === 'Y') doc[0].yelp = prompt("What is the new yelp page? ");
// 			else console.log("Error:  Invalid Entry");
// 			collection.update({name: which},doc[0], function(err, res){
// 				if(err) console.log('There has been an error updating.',err);
// 				else console.log('Successfully updated!',res);
// 			});

// 		}
// 	});
// });


// REMOVE
mongo.connect(url,function(err,db){
	var collection = db.collection('restaurants');
	var which = prompt("Which restaurant would you like to DESTROY? ");
	collection.remove({name: which},function(err,res){
		if(err) console.log("There has been an error in destroying your restaurant.",err);
		else console.log("Congratulations! The Restaurant has been destoyed");
	});
});
// comment out each one