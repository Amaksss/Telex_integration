## StackOverflow Telex Integration
This repository provides the JSON specification and implementation details for integrating StackOverflow updates into Telex channels. The integration fetches recent StackOverflow questions tagged with specified topics and posts them to Telex, facilitating real-time knowledge sharing and collaboration.

# Features
Automated Updates: Periodically fetches and posts the latest StackOverflow questions based on specified tags.
Customizable Settings: Configure tags, update intervals, and webhook URLs to tailor the integration to your needs.
Real-time Collaboration: Enhances team communication by bringing relevant StackOverflow discussions directly into Telex channels.

#Integration JSON Specification
The integration is defined by the following JSON structure:


{
  "data": {
    "date": {
      "created_at": "2025-02-19",
      "updated_at": "2025-02-19"
    },
    "descriptions": {
      "app_name": "StackOverflow Fetcher",
      "app_description": "Fetches recent StackOverflow questions based on specific tags and sends them to Telex.",
      "app_url": "https://amaksss.github.io/Telex_integration/", 
      "app_logo": "https://i.imgur.com/lZqvffp.png",
      "background_color": "#f48024"
    },
    "integration_category": "Communication & Collaboration",
    "integration_type": "interval",
    "is_active": true,
    "tick_url": "https://ping.telex.im/v1/return/01952380-e2c6-7921-89ea-aa6d1d6ee1b5", 
    "target_url": "https://www.postb.in/1724516582457-0098453621723"
,
    "key_features": [
      "Fetches the latest StackOverflow questions",
      "Supports tag-based filtering",
      "Sends top 3 questions to Telex at regular intervals"
    ],
    "permissions": {
      "stackoverflow_bot": {
        "always_online": true,
        "display_name": "StackOverflow Bot"
      }
    },
    "settings": [
      {
        "label": "Tag",
        "type": "text",
        "required": true,
        "default": "javascript"
      },
      {
        "label": "Interval (ms)",
        "type": "number",
        "required": true,
        "default": 60000
      },
      {
        "label": "Message",
        "type": "text",
        "required": true,
        "default": "💡 Fetched new StackOverflow questions!"
      },
      {
        "label": "Event Name",
        "type": "text",
        "required": true,
        "default": "new_stackoverflow_question"
      },
      {
        "label": "Status",
        "type": "text",
        "required": true,
        "default": "success"
      },
      {
        "label": "Username",
        "type": "text",
        "required": false,
        "default": "StackOverflow Bot"
      }
    ]
  }
}


# Setup
To integrate this with Telex, follow these steps:

Fork this repository (if necessary).
Update the JSON file with any custom settings required.
Host the JSON file on GitHub Pages or any public URL.
Submit the JSON URL to Telex's integration platform.
  


# Endpoints
Tick URL: https://your-deployment-url.com/api/tick
Triggered at specified intervals to fetch the latest StackOverflow questions.

Target URL: https://www.postb.in/1724516582457-0098453621723
Receives and processes incoming data from Telex.


License
This project is licensed under the MIT License. See the LICENSE file for details.
