// while mongoose stores it stores as: "ToDo" to "todos"

import express from "express"
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT 
const app = express()

app.get('/', (req, res)=>
{
    res.send('Home Page')
})

app.get('/api/jokes', (req, res)=>
{
   const jokes= [
        {
          "id": 1,
          "setup": "Why don't scientists trust atoms?",
          "punchline": "Because they make up everything!"
        },
        {
          "id": 2,
          "setup": "Why did the math book look sad?",
          "punchline": "Because it had too many problems."
        },
        {
          "id": 3,
          "setup": "What do you call fake spaghetti?",
          "punchline": "An impasta!"
        },
        {
          "id": 4,
          "setup": "Why was the computer cold?",
          "punchline": "It left its Windows open!"
        },
        {
          "id": 5,
          "setup": "What did one ocean say to the other ocean?",
          "punchline": "Nothing, they just waved."
        }
      ];
      res.send(jokes);
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })