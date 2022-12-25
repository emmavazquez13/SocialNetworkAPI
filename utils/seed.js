const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUserName, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing courses
  await User.deleteMany({});

  // Drop existing students
  await Thought.deleteMany({});

  // Create empty array to hold the students
  const user = [];
  const thoughts = getRandomThoughts(10)

  // Loop 20 times -- add students to the students array
  for (let i = 0; i < 10; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data

    const username = getRandomUserName();
    const email = `${username}@gmail.com`
    user.push({
      username, 
      email
    });
  }

  // Add students to the collection and await the results
  await User.collection.insertMany(user);

  // Add courses to the collection and await the results
  await Thought.collection.insertMany(thoughts);
  // Log out the seed data to indicate what should appear in the database
  console.table(user);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
