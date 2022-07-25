let features =
{
  "amenityFeature": {
    "badmintonCourt": true,
    "basketBall": false,
    "broadband": true,
    "cafeteria": true,
    "communityHall": false,
    "clubHouse": true,
    "gymnasium": false,
    "garden": false,
    "healthFacilities": false,
    "indoorGames": false,
    "intercom": false,
    "lift": false,
    "tennisCourt": true,
    "wifi": true,
    "dth": true
  }

};


function getFeaturesAvailable(obj) {

  return Object.keys(obj).filter((key) => {
    return (typeof (obj[key]) == "object" ? getFeaturesAvailable(obj[key]) : obj[key] === true);
  }
  )
}

console.log(getFeaturesAvailable(features));
  /*{

if(typeof(obj[key]) == "object"){
  return getFeaturesAvailable(obj[key]);
}
else{
  return obj[key] === true;
}
 
}
)

}
 
let arr = [];
 
Object.keys(obj).forEach((key) => {
 
  if (typeof (obj[key]) == "object") {
    arr = getFeaturesAvailable(obj[key]);
  }
 
  if (obj[key] === true) {
  
    arr.push(key);
  }
});
 
return arr;
 



console.log(getFeaturesAvailable(features));
*/