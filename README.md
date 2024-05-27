# Daily Vietnamese

Daily Vietnamese is an autonomously posting application for Vietnamese language conversation practice. It leverages generative LLMs to generate conversation topics, and creates and posts a daily conversation dialog based on a topic.

## Uses

- Typechat for topic and dialog generation
- OpenAI for image generation based on the conversation topic
- GCP text-to-speech for Vietnamese language audio generation
- GCP Cloud Functions for serverless execution
- GCP Cloud Storage for audio and image storage
- GCP Pub/Sub for asynchronous processing and scheduling of tasks
- Algolia for searching and filtering content
- Sendgrid for emailing the daily conversation
- Prisma, Postgres, and CockroachDB for modeling and storing application data
- Next.js client and server components for rendering
- Tailwind CSS for styling

## Architecture

### Topic

[![](https://mermaid.ink/img/pako:eNpNkMuKwzAMRX9FaNWB5geyKLTJZlZdpLt6FsZWm0D8QJY7DEn-fdwxU6qV4B7ORVrQBEvY4p11HOHSKw9ljstgRrJ5Jt6gaQ6rYdJCjQn-QZy0TME3aZL8twE9yMsKp2vFujdq-Ie-nh5YIwcXC9vtzpH88fOjFnY1fSmLrAanGlQxvPrfxMDhe4V-iSHJnSltyuMeHbHTky2XLU-RQhnJkcK2rJZuOs-iUPmtoDpLGH68wVY40x5ztKWrn3T5icP2pudE2y-lp2gu?type=png)](https://mermaid.live/edit#pako:eNpNkMuKwzAMRX9FaNWB5geyKLTJZlZdpLt6FsZWm0D8QJY7DEn-fdwxU6qV4B7ORVrQBEvY4p11HOHSKw9ljstgRrJ5Jt6gaQ6rYdJCjQn-QZy0TME3aZL8twE9yMsKp2vFujdq-Ie-nh5YIwcXC9vtzpH88fOjFnY1fSmLrAanGlQxvPrfxMDhe4V-iSHJnSltyuMeHbHTky2XLU-RQhnJkcK2rJZuOs-iUPmtoDpLGH68wVY40x5ztKWrn3T5icP2pudE2y-lp2gu)

### Content Generation
