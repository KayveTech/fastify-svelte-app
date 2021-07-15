const app = require('fastify')({logger: true})

// handle CORS
app.register(require('fastify-cors'), { 
    // put your options here
    origin: true,
    methods: ["GET","POST", "DELETE", "PUT", "PATCH"]
  })

//Handle Content-Type
app.addContentTypeParser('*', function (request, payload, done) {
    var data = ''
    payload.on('data', chunk => { data += chunk })
    payload.on('end', () => {
      done(null, data)
    })
  })  

// Add the index route  
app.get('/', (req, res)=>{
    res.send('You are in Index route')
})

// Register routes to handle blog posts
const blogRoutes = require('./routes/blogs')

blogRoutes.forEach((route, index) => {
    app.route(route)
})

app.listen(3000, (err, address)=>{

    if(err){
        app.log.error(err)
        process.exit(1)
    }
    app.log.info(`Server listening on ${address}`)
})
