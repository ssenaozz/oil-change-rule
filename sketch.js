/* 
Next Oil Change

The purpose of the *next_oil_change()* function (defined below) is to estimate when it is time for an oil change. 

It uses several pieces of information about a car and driver to make a recommendation.

The specific implementation details are based on a blog post from Angie's List:
http://web.archive.org/web/20201227221708/https://www.angieslist.com/articles/how-often-should-you-change-your-oil.htm

_According to Ford Motor Company, drivers with typical driving habits that own 2008 and newer models should change their engine oil every 7,500 miles or six months, or whichever comes first. Meanwhile, drivers should change the oil in vehicles 2007 and older every 5,000 miles or six months, or whichever comes first._

_Drivers with less typical driving habits should change engine oil every 5,000 miles or six months for vehicles 2008 and newer, and every 3,000 miles or three months for cars 2007 and older. According to Ford, less typical driving habits include frequent off-road driving or driving in dusty conditions, towing or carrying heavy loads, excessive idling or driving at low speeds for long distances._

*/

function setup() {
  
  createCanvas(400, 400);
  background("black");
  
  textAlign(LEFT);
  textFont("arial");
  textSize(18);
  fill("blue");
  
  noLoop();
}

function draw() {
  
  var miles = 100000;
  var days = 18;
  var year = 2005;
  var typical = true;
  
  text("Miles since last oil change " + miles, 20, 20);
  text("Days since last oil change  " + days, 20, 40);
  text("Year of car                 " + year, 20, 80);
  
  rec = next_oil_change(miles, days, year);
  text(rec, 20, 120, 380);
  
}

function next_oil_change(miles_driven, days_elapsed, vehicle_year, typical_driver=true) {
  
  // Validate the arguments
    if (miles_driven < 0) {
    console.log("ERROR: Miles driven must be greater than zero.")
  }
  if (days_elapsed < 0) {
    console.log("ERROR: Days elapsed must be greater than zero.")
  }
  
  var recommended_mileage;
  var recommended_days;
  var miles_left;
  var days_left;
  var recommendation;
  
  
  if (vehicle_year >= 2008) {
    if (typical_driver) {
      recommended_mileage = 7500;
      recommended_days = 6 * 30;
    } else {
      recommended_mileage = 5000;
      recommended_days = 6 * 30;
    } 
  } else {
    if (typical_driver) {
      recommended_mileage = 5000;
      recommended_days = 6 * 30;
    } else {
      recommended_mileage = 3000;
      recommended_days = 3 * 30;
    }
  }
  
  miles_left = recommended_mileage - miles_driven;
  days_left = recommended_days - days_elapsed;
  
  if ((miles_left <= 0) || (days_left <= 0)) {
    recommendation = "Get your oil changed ASAP!"
  } else {
    recommendation = "Change your oil in " + miles_left + " miles or " + days_left + " days, whichever comes first."
  }
  return recommendation;

}