const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  db.getUser(userId, (err, user) => {
    if (err) {
      console.error('Error fetching user:', err);
      res.status(500).json({ error: 'Failed to fetch user' }); //Improved error response
      return; // Important: Stop further execution
    } else if (!user) {
        res.status(404).json({ error: 'User not found' });
        return;
    } else {
      res.json(user);
    }
  });
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});