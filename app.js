import express from 'express';
import fetch from 'node-fetch';
import { JSDOM } from 'jsdom';

const app = express();

app.get('/', async (req, res) => {
  try {
    const response = await fetch('https://catfact.ninja/fact');
    const data = await response.json();
    const fact = data.fact;
    const plainText = JSDOM.fragment(fact).textContent;

    res.send(`${plainText}`);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('An error occurred');
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
