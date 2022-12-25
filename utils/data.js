const usernames = [
    'Aaran',
    'Alvin',
    'Aarez',
    'Aarman',
    'Aaron'
  ];
  
  const thoughts = [
    'Decision Tracker',
    'Find My Phone',
    'Learn Piano',
    'Starbase Defender',
    'Tower Defense'
  ];
  
  const reaction = [
    'Nice',
    'Happy',
    'Sad',
    'Awesome',
    'Cool'
  ];

  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random full name
  const getRandomUserName = () =>
    `${getRandomArrItem(usernames)} ${getRandomArrItem(usernames)}`;
  
  // Function to generate random assignments that we can add to student object.
  const getRandomThoughts = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtText: getRandomArrItem(thoughts), 
        username: getRandomUserName(),
        reactions: [...getRandomReactions(2)]
      });
    }
    return results;
  };
  const getRandomReactions = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        reactionBody: getRandomArrItem(reaction), 
        username: getRandomUserName(),
        
      });
    }
    return results;
  };
  // Export the functions for use in seed.js
  module.exports = { getRandomUserName, getRandomThoughts };
  