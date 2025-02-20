import express from 'express';
import axios from 'axios';
//import integrationRouter from '../docs/integration';

//import tickRouter from './routes/tick';
import { fetchStackOverflowQuestions } from './services/stackoverflow';



const app = express();
const port = 3000;

app.use(express.json());

// Routes
//app.use('/', integrationRouter);
//app.use('/', tickRouter);




app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/tick', async (req, res) => {
  await fetchStackOverflowQuestions();
  res.json({ message: 'Stack Overflow questions fetched and sent to Telex!' });
});


app.post('/tick', async (req, res) => {
  const { return_url } = req.body;

  const payload = {
    event_name: 'New StackOverflow Question',
    username: 'StackOverflow Bot',
    status: 'success',
    message: '💡 Fetched new StackOverflow questions!'
  };

  try {
    const response = await axios.post(return_url, payload);
    console.log('✅ Sent to Telex:', response.data);
    res.status(202).json({ status: 'accepted' });
  } catch (error) {
    console.error('❌ Error sending to Telex:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to send to Telex' });
  }
});


/*app.get('/integration-spec', (req, res) => {
  res.json(integrationSpec)
})*/

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
}); 
