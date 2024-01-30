const app = require('./app');

const PORT = process.env.PORT || 3000;
const MODE = process.env.NODE_ENV || 'development';

app.listen(PORT, async () => {
  try {
    console.log(`[${MODE}]Server listening on port ${PORT}`);
  } catch (err) {
    console.error('Unable to connect to the database:', err);
    process.exit(1);
  }
});