const blogController = require('../controller/blogs');

const routes = [{
        method: 'GET',
        url: '/api/blogs',
        handler: blogController.getAllPosts
    },
    {
        method: 'POST',
        url: '/api/blogs',
        handler: blogController.addPost
    },
    {
        method: 'DELETE',
        url: '/api/blogs/:id',
        handler: blogController.deletePost
    }
]
module.exports = routes
