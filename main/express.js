const express = require('express');
const Joi = require('joi');

const app = express();

app.use(express.json());// request .json
// app.get();
// app.post();
// app.put();
// app.delete();
const courses = [  
    { id: 1, name: 'NODEJS' },
    { id: 2, name: 'JavaScript' },
    { id: 3, name: 'Python' }
];

app.get('/', (req, res) => {
    res.send('Welcome to my landing page')
});
app.get('/api/courses', (req, res) => {
    res.send(courses);
})
app.get('/api/courses/:id', (req, res) => {
    // res.send(req.params.id);
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course)return res.status(404).send('Course not found ');//404  
    res.send(course);
});

app.post('/api/courses', (req, res) => {
    const { error } = validateCourse(req.body);

    if (error) return res.status(400).send(error.details[0].message);


    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});
app.put('/api/courses/:id', (req, res) => {
    // Look up the course
    //if not existing , return 404
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send('Course not found ');//404  
        

    const { error } = validateCourse(req.body);
    //Validate
    // If invalid, return 400- Bad reques
    if (error) return res.status(400).send(error.details[0].message);
        
    //Update course
    course.name = req.body.name;
    //Return the updated course 
    res.send(course);


});
function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()

    };
    return Joi.validate(req.body, schema);
}
app.delete('/api/courses/:id', (req, res) => {
    // Look up the course
    // Not existing, return 404 .
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send('Course not found ');//404  
    
    // Delete
    const index = courses.indexOf(courses);
    course.splice(index, 1);
    res.send(course);

    //Return
})

//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on ${port}....`)
});
