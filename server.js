const express = require('express');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({path: './config/config.env'});
const app = express();

app.get('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({
        success: true,
        data: {
            name: 'Alex',
            id: 1,
            message: 'Show all bootcamps',
        }
    })
});

app.post('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({
        success: true,
        data: {
            name: 'Alex',
            id: 1,
            message: 'Create new bootcamps',
        }
    })
});

app.put('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({
        success: true,
        data: {
            name: 'Alex',
            id: 1,
            message: `Update bootcamp ${req.params.id}`,
        }
    })
});

app.get('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({
        success: true,
        data: {
            name: 'Alex',
            id: 1,
            message: `Get bootcamp ${req.params.id}`,
        }
    })
});

app.delete('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({
        success: true,
        data: {
            name: 'Alex',
            id: 1,
            message: `Delete bootcamp ${req.params.id}`,
        }
    })
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
