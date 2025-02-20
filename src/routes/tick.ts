/*import { Router, Request, Response } from 'express';
import { fetchStackOverflowQuestions } from '../services/stackoverflow';

const router = Router();

router.post('/tick', async (req: Request, res: Response) => {
  const { return_url, settings } = req.body;

  // Extract tag from settings
  const tagSetting = settings.find((s: any) => s.label === 'tag');
  const tag = tagSetting ? tagSetting.default : 'javascript';

  try {
    const questions = await fetchStackOverflowQuestions(tag);

    // Format data for Telex
    const data = {
      message: `Top StackOverflow questions for tag: ${tag}\n\n${questions}`,
      username: 'StackOverflow Bot',
      event_name: 'New Questions',
      status: 'success'
    };

    // Send back to Telex
    await fetch(return_url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    res.status(202).json({ status: 'accepted' });
  } catch (error) {
    console.error('Error fetching StackOverflow questions:', error);
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
});

export default router; */

import axios from 'axios';
import { config } from '../config/telexConfig';

export const fetchStackOverflowQuestions = async (tag: string) => {
  try {
    const response = await axios.get('https://api.stackexchange.com/2.3/questions', {
      params: {
        order: 'desc',
        sort: 'creation',
        tagged: config.tag,
        site: 'stackoverflow'
      }
    });

    const questions = response.data.items.slice(0, 3); // Top 3 questions

    // ✅ Format the message with actual questions
    const formattedQuestions = questions.map((q: any) => `💡 *${q.title}*\n🔗 ${q.link}`).join('\n\n');

    // Send to Telex
    await axios.post(config.telexWebhookUrl, {
      event_name: 'New StackOverflow Question',
      username: 'StackOverflow Bot',
      status: 'success',
      message: formattedQuestions || 'No new questions found.'
    });

    console.log('✅ Questions sent to Telex!');
  } catch (error) {
    console.error('❌ Error fetching questions:', error);
  }
};

