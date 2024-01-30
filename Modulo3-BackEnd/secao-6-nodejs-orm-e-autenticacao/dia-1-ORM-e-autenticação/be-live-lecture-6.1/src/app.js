const express = require('express');
const { Course } = require('./models');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  console.log('hello my friend');
  return res.json({
    message: 'working',
  });
});

app.get('/courses', async (req, res) => {
  const courses = await Course.findAll();
  return res.json(courses);
});

app.post('/courses', async (req, res) => {
  const newCourse = await Course.create(req.body);
  return res.status(201).json({
    message: `New course created: ${newCourse.name}`,
  });
});

module.exports = app;
