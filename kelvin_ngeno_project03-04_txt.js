/*    JavaScript 7th Edition
      Chapter 3
      Project 03-04

      Application to write a list of customer reviews
      Author: kelvin ngeno
      Date:   

      Filename: project03-04.js
*/

let reviewers = ["WillHa85", "GoldFry26", "Mittens41", "Tompkins8"];
let reviewType = ["P", "N", "", ""];
let stars = [5, 2, 1, 4];
let reviewDates = ["11/18/2024", "11/17/2024", "11/15/2024", "11/10/2024"];
let reviews = [
   "I've owned all of the Dance Off games from the beginning. I have lost 6 pounds since I started playing.",
   "A so-so release of this well-established game. Where this release fails is in the choreography. Many of the moves follow predictable patterns. I hope the next release improves the choreography.",
   "The installation was buggy and kept crashing my gaming console. I spent several hours on tech support with no solution to my problem. I finally returned it and got my money back. I wish I could give it a zero star rating.",
   "The latest version of Dance Off improves upon the 8th Edition only slightly; still is one of the best dance-style games on the market.",
];
let reviewTitles = ["My Favorite Workout Game", "Poor Choreography", "Buggy with Poor Tech Support", "Nice Improvement"];


function starImages(rating) {
   var imageText = "";  
   for (let i = 1; i <= rating; i++) {  
      imageText += "<img src='star.png' alt='star'>";  
   }
   return imageText;  
}


for (var i = 0; i < reviews.length; i++) {
   var reviewCode = "";
   if (reviewType[i] === "P") {
      reviewCode += "<table class='prime'>";
   } else if (reviewType[i] === "N") {
      reviewCode += "<table class='new'>";
   } else {
      reviewCode += "<table>";
   }

   reviewCode += "<tr><th>Reviewer</th><td>" + reviewers[i] + "</td></tr>";
   reviewCode += "<tr><th>Date</th><td>" + reviewDates[i] + "</td></tr>";
   reviewCode += "<tr><th>Stars</th><td>" + starImages(stars[i]) + "</td></tr>";  
   reviewCode += "<tr><th>Review</th><td>" + reviews[i] + "</td></tr>";
   reviewCode += "</table><br>";


   document.getElementsByTagName('article')[0].insertAdjacentHTML('beforeend', reviewCode);
};