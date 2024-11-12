


 // Tracking function
 

     



import express from 'express';
import cors = from 'cors
const app = express()
const port = 3000
let impressionCount = 0;
let startCount = 0;
let completeCount  = 0;
let midpointCount = 0;
let firstQuartileCount = 0;

app.use(cors()); // Enable cross-origin requests

// Impression endpoint
app.get('/impression', (req, res) => {
    impressionCount++;
    console.log("Impression event tracked");
    res.json({ count: impressionCount });
});

// Start event endpoint
app.get('/start', (req, res) => {
    startCount++;
    console.log("Start event tracked");
    res.json({ status: 'success', event: 'start', count: startCount });
});

// Complete event endpoint
app.get('/complete', (req, res) => {
    completeCount++;
    console.log("Complete event tracked");
    res.json({ status: 'success', event: 'complete', count: completeCount });
});

/*app.use(cors())
app.get('/impression', (req,res)=>{
    impressionCount++
    console.log("Impression event tracked")
  
    res.json({
     count:impressionCount,
  
    })
})

app.get('/midpoint', (req, res) => {
    midpointCount++;
    res.json({ status: 'success', event: 'midpoint', count: midpointCount });
});

app.get('/firstQuartile', (req, res) => {
    firstQuartileCount++;
    res.json({ status: 'success', event: 'firstQuartile', count: firstQuartileCount });
});


app.get('/start', (req, res)=>{
    startCount++
    console.log("Start event tracked")
   
    res.json({
       
        event: 'start',
        count: startCount,  // Send the current start count
      
    });
})





app.get('/complete', (req, res) => {
    completeCount++;  // Increment the complete count
    console.log("Complete event tracked, total count:", completeCount);
    res.json({
   
        event: 'complete',
        count: completeCount,  // Send the current complete count
  
    });
});
*/


app.listen(port,()=>{
    console.log(`Tracking server running on port ${port}`)
})








//check

