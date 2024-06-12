const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const searchRoutes=require('./routes')
app.use('/yakshagana/search',searchRoutes)

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT,'0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
