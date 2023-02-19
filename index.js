// Question 3

let scienceSubjects = "Physics, Chemistry, Biology, Technical Drawing";
let socialScienceSubjects = "Accounting, Commerce, Marketing, Geography";
let artsSubjects = "Government, Economics, Literature, History";
let generalSubjects = "Maths, English";

let classGroup = "Arts";

if (classGroup === "Science") {
  console.log(generalSubjects + " ," + scienceSubjects);
} else if (classGroup === "Social science") {
  console.log(generalSubjects + " ," + socialScienceSubjects);
} else if (classGroup === "Arts") {
  console.log(generalSubjects + " ," + artsSubjects);
} else {
  console.log(generalSubjects);
}


// Question 5

const num = 3;
const nearestPowerOfTwo = num => {
   let base = 1;
   while(base < num){
      if(num - base < Math.floor(base / 2)){
         return base;
      };
      base *= 2;
   };
   return base;
};
const pwr = nearestPowerOfTwo(num);
console.log("The number " + pwr + " is the power of 2 nearest to " + num);