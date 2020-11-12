const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        data: {
            name: 'Alex',
            id: 1,
            message: 'Show all bootcamps',
        }
    })
});

router.post('/', (req, res) => {
    res.status(200).json({
        success: true,
        data: {
            name: 'Alex',
            id: 1,
            message: 'Create new bootcamps',
        }
    })
});

router.put('/:id', (req, res) => {
    res.status(200).json({
        success: true,
        data: {
            name: 'Alex',
            id: 1,
            message: `Update bootcamp ${req.params.id}`,
        }
    })
});

router.get('/:id', (req, res) => {
    res.status(200).json({
        success: true,
        data: {
            name: 'Alex',
            id: 1,
            message: `Get bootcamp ${req.params.id}`,
        }
    })
});

router.delete('/:id', (req, res) => {
    res.status(200).json({
        success: true,
        data: {
            name: 'Alex',
            id: 1,
            message: `Delete bootcamp ${req.params.id}`,
        }
    })
});

module.exports = router;
