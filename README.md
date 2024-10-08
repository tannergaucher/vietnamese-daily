# Daily Vietnamese

Daily Vietnamese is a full stack web application for practicing converational Vietnamese language, using content created by generative AI. It autonomously creates conversation topics, dialog, audio, and corresponding images, and publishes a new conversation every day.

## Uses

- [Typechat](https://github.com/microsoft/TypeChat) for topic and dialog generation
- [OpenAI](https://platform.openai.com/docs/overview) for image generation based on the conversation topic
- [GCP text-to-speech AI](https://cloud.google.com/text-to-speech) for generating dialog audio files
- [GCP Cloud Functions](https://cloud.google.com/functions) for serverless execution
- [GCP Pub/Sub](https://cloud.google.com/pubsub) for asynchronous event processing
- [GCP Cloud Scheduler](https://cloud.google.com/scheduler) for scheduling the content creation pipelines
- [GCP Cloud Storage](https://cloud.google.com/storage) for conversation audio and image storage
- [Algolia](https://www.algolia.com/) for content search and filtering
- [Sendgrid](https://sendgrid.com/) daily conversation email sending
- [Prisma](https://www.prisma.io/), [Postgres](https://www.postgresql.org/), and [CockroachDB](https://www.cockroachlabs.com/) for modeling and storing application data
- [Next.js](https://nextjs.org/) client using server components for rendering the content
- [Tailwind CSS](https://tailwindcss.com/) for UI styling
- [Vercel](https://vercel.com/) for hosting the client application

## Content Pipelines

### Conversation situation creation

### Conversation dialog creation

### Conversation publishing
