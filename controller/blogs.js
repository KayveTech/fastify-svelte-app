// Demo data

let posts = [
    {
        id: 1,
        title: 'This is an experiment',
    },
    {
        id: 2,
        title: 'Fastify is pretty cool',
    },
    {
        id: 3,
        title: 'Just another post, yea!',
    }
];

// Handlers

const addPost = async (req, res) => {
    const id = posts.length + 1 // generate new ID
    const newpost = {
        id,
        title: req.body.title,
    }

    posts.push(newpost)
    return res.send(newpost)
}

const getAllPosts = async (req, res) => {
    return posts
}

const deletePost = async (req, res) => {
    const id = Number(req.params.id)

    posts = posts.filter(blog => blog.id !== id)
    return { msg: `Post with ID - ${id} is deleted` }
}

module.exports = {
    addPost,
    getAllPosts,
    deletePost
}
