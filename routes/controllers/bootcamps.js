// @desc Get all bootcamps
// @route GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({
        success: true,
        data: {
            name: 'Alex',
            id: 1,
            message: 'Show all bootcamps',
        }
    })
}

// @desc Get single bootcamps
// @route GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        data: {
            name: 'Alex',
            id: 1,
            message: `Get bootcamp ${req.params.id}`,
        }
    })
}

// @desc Create a new bootcamp
// @route POST /api/v1/bootcamps
// @access Private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        data: {
            name: 'Alex',
            id: 1,
            message: 'Create new bootcamps',
        }
    })
}

// @desc Update  bootcamp
// @route PUT /api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        data: {
            name: 'Alex',
            id: 1,
            message: `Update bootcamp ${req.params.id}`,
        }
    })
}

// @desc Delete bootcamp
// @route DELETE /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        data: {
            name: 'Alex',
            id: 1,
            message: `Delete bootcamp ${req.params.id}`,
        }
    })
}