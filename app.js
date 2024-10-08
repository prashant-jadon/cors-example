const express = require('express');
const app = express();

//CORS Cross origin resource sharing
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8000');  
  res.header('Access-Control-Allow-Credentials', 'true');  
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/reset-password', (req, res) => {
  const token = 'i234ni243i243i'; 
  res.json({ success: true, token: token });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Vulnerable server running on http://localhost:${PORT}`);
});
