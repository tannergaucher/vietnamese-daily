# Daily Vietnamese

## Uses

- [Typechat](https://github.com/microsoft/TypeChat) for topic and dialog generation
- [OpenAI](https://platform.openai.com/docs/overview) for image generation based on the conversation topic
- [GCP text-to-speech AI](https://cloud.google.com/text-to-speech) for Vietnamese language audio generation
- [GCP Cloud Functions](https://cloud.google.com/functions) for serverless execution
- [GCP Pub/Sub](https://cloud.google.com/pubsub) for asynchronous processing
- [GCP Cloud Scheduler](https://cloud.google.com/scheduler) for scheduling the creation of new topics and posting a new conversation each day
- [GCP Cloud Storage](https://cloud.google.com/storage) for audio and image storage
- [Algolia](https://www.algolia.com/) for searching and filtering content
- [Sendgrid](https://sendgrid.com/) for emailing the daily conversation
- [Prisma](https://www.prisma.io/), [Postgres](https://www.postgresql.org/), and [CockroachDB](https://www.cockroachlabs.com/) for modeling and storing application data
- [Next.js](https://nextjs.org/) client using server components for rendering the content
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Vercel](https://vercel.com/) for hosting the client application
