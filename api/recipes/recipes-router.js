const router = require('express/lib/response')

router.use('*', (req, res) => {
    res.json({api: 'up'})
})

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        customerMessage: 'something went wrong inside the recipes router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router
