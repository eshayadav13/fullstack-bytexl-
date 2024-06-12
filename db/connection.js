const M=require('mongoose')
M.connect('mongodb+srv://yadavesha03:1CM6PwhiZHnW1eW0@cluster0.0qie7cb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then( ()=>{
    console.log("server is connected to database")
})
.catch( ()=>{
    console.log("database is not connected")
})
