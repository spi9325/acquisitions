//  this file is for managing like server is running correct
import app from './app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`listing on http://localhost: ${PORT}`);
});
