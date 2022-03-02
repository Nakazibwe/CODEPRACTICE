// app.get()
// app.post()
// app.put()
// app.delete()

const express = require('express');
const app = express();
app.use(express.json());
//PORT
const port = process.env.PORT || 3000;

const courses = [
    { id: 1, name: "Node" },
    { id: 2, name: "Java" },
    { id: 3, name: "JavaScript" }
];


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) {//404
        res.status(404).send('The course requested is not available')
        
    } else {
        res.send(` The course you requested for is : ${course}`);
    }
});



app.listen(port, () => {
    console.log(`We are listening on port ${port}`);

});