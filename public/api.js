/* eslint-disable no-unused-vars */
// public/api.js
const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = s * a % m) / m;
    };
  };
  
  const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());
  
    for(let i = 17; i <= 23; i++) {
      if(random() < 0.5) {
        result.push(i + ':00');
      }
      if(random() < 0.5) {
        result.push(i + ':30');
      }
    }
    return result;
  };
  
  const submitAPI = function(formData) {
    console.log('form submited');
    
    return true;
  };
  
  // Make the functions globally accessible
  window.fetchAPI = fetchAPI;
  window.submitAPI = submitAPI;
  