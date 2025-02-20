

  import { Router, Request, Response } from 'express';

const router = Router();

router.get('/integration.json', (req: Request, res: Response) => {
  const baseUrl = `${req.protocol}://${req.get('host')}`;

  res.json({
    data: {
      descriptions: {
        app_name: 'StackOverflow Fetcher',
        app_description: 'Fetches recent StackOverflow questions',
        app_url: baseUrl,
        app_logo: 'https://i.imgur.com/lZqvffp.png',
        background_color: '#f48024' // StackOverflow color
      },
      integration_type: 'interval',
      settings: [
        { label: 'tag', type: 'text', required: true, default: 'javascript' },
        { label: 'interval', type: 'text', required: true, default: '* * * * *' } // every minute
      ],
      tick_url: `${baseUrl}/tick`
    }
  });
});

export default router;

  