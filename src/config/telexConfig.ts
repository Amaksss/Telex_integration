
import dotenv from 'dotenv';
dotenv.config();

export const config = {
  telexWebhookUrl: process.env.TELEX_WEBHOOK_URL || 'https://ping.telex.im/v1/webhooks/01952380-e2c6-7921-89ea-aa6d1d6ee1b5',
  channelId: process.env.TELEX_CHANNEL_ID || '01952380-e2c6-7921-89ea-aa6d1d6ee1b5',  // <-- Hardcoded Channel ID
  tag: 'javascript', // <-- Default Stack Overflow tag
  interval: 60000,   // <-- Default interval (e.g., every 60 seconds)
  responseTimeThreshold: process.env.RESPONSE_TIME_THRESHOLD 
    ? parseInt(process.env.RESPONSE_TIME_THRESHOLD, 10) 
    : 500,
  port: process.env.PORT || 3000
};

