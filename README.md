# Daily Vietnamese

Daily Vietnamese is an autonomously posting LLM generated content application for Vietnamese language learning practice. It leverages generative LLMs to create conversation topics, and uses GCP cloud functions, text-to-speech API, Pub/Sub, and cloud storage to asynchronously process the creation of conversation dialog audio files and images based on a given topic, and then publish a new conversation each day.

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
- [Next.js](https://nextjs.org/) client using server components for rendering
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Vercel](https://vercel.com/) for hosting the client application

## Architecture

### Topic Generation

[![](https://mermaid.ink/img/pako:eNpNkMuKwzAMRX9FaNWB5geyKLTJZlZdpLt6FsZWm0D8QJY7DEn-fdwxU6qV4B7ORVrQBEvY4p11HOHSKw9ljstgRrJ5Jt6gaQ6rYdJCjQn-QZy0TME3aZL8twE9yMsKp2vFujdq-Ie-nh5YIwcXC9vtzpH88fOjFnY1fSmLrAanGlQxvPrfxMDhe4V-iSHJnSltyuMeHbHTky2XLU-RQhnJkcK2rJZuOs-iUPmtoDpLGH68wVY40x5ztKWrn3T5icP2pudE2y-lp2gu?type=png)](https://mermaid.live/edit#pako:eNpNkMuKwzAMRX9FaNWB5geyKLTJZlZdpLt6FsZWm0D8QJY7DEn-fdwxU6qV4B7ORVrQBEvY4p11HOHSKw9ljstgRrJ5Jt6gaQ6rYdJCjQn-QZy0TME3aZL8twE9yMsKp2vFujdq-Ie-nh5YIwcXC9vtzpH88fOjFnY1fSmLrAanGlQxvPrfxMDhe4V-iSHJnSltyuMeHbHTky2XLU-RQhnJkcK2rJZuOs-iUPmtoDpLGH68wVY40x5ztKWrn3T5icP2pudE2y-lp2gu)

### Content Generation and Indexing

[![](https://mermaid.ink/img/pako:eNptVMtunDAU_RXLq4kU_8CoijRhHp1JJo00lbph4-ILuAJfZEySCvj32thEOAU2GJ_XPTL0NEMBdEsLzZuS_Nynithr19-yEkRXgR4JYw9kyMFkJctQvYFuuZGoWCtN559y1CzTYBeqYELyCgsCb6DMQB43EzNZEG8z74g6Caz9RLrz7o_k2-S5dCOfbgO5zjCPchLwxTbZ-NckEk48I0AbjXVjsc_9jwbU7jx60PMSZJUialANChrfh2v_iq0pNLQjiaArjXlaG_fFOyFxzr3_vy4_Qbsoa-cYdyu5ggGTNS8gSB5CE17m7HYC9eCpHvxZRlTCtDeQw8pgweodtYgHCr5HP4m3_eVQiwlCgmMU3knNPbyE1I4YwC8ePKF8Z7msbLjzvD0dmmu0-u5X-7WSot5PUUvLgk9BqT8lr8TAh2EGWdsAZOU4I5anKorWJxV2gtwMalvkuNJ7NENQkkrAhzs5xmYLCS-b6a09GHYVol2ikS9k_mgmGv7-A5md7KnfVQVWkpOzE7AZ3E3vaQ265lLYb793Aik1JdSQ0q19FJDzrjIpTdVoobwzePurMro1uoN72jXCd2X_GjXd5rxqYfwH08dvkw?type=png)](https://mermaid.live/edit#pako:eNptVMtunDAU_RXLq4kU_8CoijRhHp1JJo00lbph4-ILuAJfZEySCvj32thEOAU2GJ_XPTL0NEMBdEsLzZuS_Nynithr19-yEkRXgR4JYw9kyMFkJctQvYFuuZGoWCtN559y1CzTYBeqYELyCgsCb6DMQB43EzNZEG8z74g6Caz9RLrz7o_k2-S5dCOfbgO5zjCPchLwxTbZ-NckEk48I0AbjXVjsc_9jwbU7jx60PMSZJUialANChrfh2v_iq0pNLQjiaArjXlaG_fFOyFxzr3_vy4_Qbsoa-cYdyu5ggGTNS8gSB5CE17m7HYC9eCpHvxZRlTCtDeQw8pgweodtYgHCr5HP4m3_eVQiwlCgmMU3knNPbyE1I4YwC8ePKF8Z7msbLjzvD0dmmu0-u5X-7WSot5PUUvLgk9BqT8lr8TAh2EGWdsAZOU4I5anKorWJxV2gtwMalvkuNJ7NENQkkrAhzs5xmYLCS-b6a09GHYVol2ikS9k_mgmGv7-A5md7KnfVQVWkpOzE7AZ3E3vaQ265lLYb793Aik1JdSQ0q19FJDzrjIpTdVoobwzePurMro1uoN72jXCd2X_GjXd5rxqYfwH08dvkw)

## Features

- Autonomously creates conversation topics
- Generates Vietnamese language audio and a related image based on the conversation topic
- Publishes a new conversation each day
- Users can search and filter indexed content
- Users can listen to audio files of each conversation
- Users can listen to audio files of each individual word in a conversation
- Users can subscribe to get conversations emailed to them daily

## Roadmap

- Add speech tonal analysis for practicing pronunciation of Vietnamese tones. Give user visual feedback based on adherence to the tone curve as compared to the reference audio files
- Add a flashcard feature for practicing vocabulary from the conversations
  - Track user progress and suggest flashcards based on the user's performance based on spaced repetition algorithms
