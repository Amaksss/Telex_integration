import axios from 'axios';
import { config } from '../config/telexConfig';

export const fetchStackOverflowQuestions = async () => {
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

    for (const question of questions) {
      await axios.post(config.telexWebhookUrl, {
        event_name: 'New StackOverflow Question',
        username: 'StackOverflow Bot',
        status: 'success',
        message: `💡 *${question.title}*\n🔗 ${question.link}`
      });
    }

    console.log('✅ Questions sent to Telex!');
  } catch (error) {
    console.error('❌ Error fetching questions:', error);
  }
};

    /*const questions = response.data.items.slice(0, 5) // Get top 5 questions
      .map((q: any) => `• [${q.title}](${q.link})`)
      .join('\n');

    return questions || 'No questions found.';
  } catch (error) {
    console.error('StackOverflow API Error:', error);
    throw new Error('Could not fetch questions');
  }
};*/
