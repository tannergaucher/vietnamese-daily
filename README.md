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
- [Next.js](https://nextjs.org/) client and server components for rendering
- [Tailwind CSS](https://tailwindcss.com/) for styling

## Architecture

### Topic Generation

[![](https://mermaid.ink/img/pako:eNpNkMuKwzAMRX9FaNWB5geyKLTJZlZdpLt6FsZWm0D8QJY7DEn-fdwxU6qV4B7ORVrQBEvY4p11HOHSKw9ljstgRrJ5Jt6gaQ6rYdJCjQn-QZy0TME3aZL8twE9yMsKp2vFujdq-Ie-nh5YIwcXC9vtzpH88fOjFnY1fSmLrAanGlQxvPrfxMDhe4V-iSHJnSltyuMeHbHTky2XLU-RQhnJkcK2rJZuOs-iUPmtoDpLGH68wVY40x5ztKWrn3T5icP2pudE2y-lp2gu?type=png)](https://mermaid.live/edit#pako:eNpNkMuKwzAMRX9FaNWB5geyKLTJZlZdpLt6FsZWm0D8QJY7DEn-fdwxU6qV4B7ORVrQBEvY4p11HOHSKw9ljstgRrJ5Jt6gaQ6rYdJCjQn-QZy0TME3aZL8twE9yMsKp2vFujdq-Ie-nh5YIwcXC9vtzpH88fOjFnY1fSmLrAanGlQxvPrfxMDhe4V-iSHJnSltyuMeHbHTky2XLU-RQhnJkcK2rJZuOs-iUPmtoDpLGH68wVY40x5ztKWrn3T5icP2pudE2y-lp2gu)

### Content Generation and Indexing

[![](https://mermaid.ink/img/pako:eNptVN1qpDAUfpWQqyk0LzAsC1PnpzPb6Ram0BtvgjlqQBOJse2ivvsmnlhMq94Y8_2dj2hPMy2AbmlheFOS132qiLt2_S0rQXQVmJEw9psMOdisZJlW72BabqVWrJW2w6dcG5YZcAtVMCF5pQsC76DsQB42EzNZEG8z76hNElj7iXSH7g_k1-S5dCNfbgO5zjBEeQn4Zpts8DWJhBNkBGhjdN047FP_twG1O48IelqCnFJEDapBweiP4dq_6NYWBtqRRNCVxpDWxn3xTkg9597_rAsnaBdl7TzjbiVXMGCy5gUEyUNoAmXOfidQD0hF8FcZUQnT3kAOK4MFqw9tRDxQ8D3iJGj75lGLCUKCYxTeS809PIfUnhjAzwieUNhZLisX7jxvT4fmGq0ecbVfKynq_RS1tCz4FJT6U_JCLHxaZjVrG4CsHGfE8lRF0fqk0p0gN6uNK3Jc6T2aIShJJeDTnxzrsoWEl8301h0MtwrRLtHIl4n8p99Vha4kd2b-pve0BlNzKdxH3ntkSm0JNaR06x4F5LyrbEpTNToo76y-_VMZ3VrTwT3tGoGluN9DTbc5r1oY_wPetGbR?type=png)](https://mermaid.live/edit#pako:eNptVN1qpDAUfpWQqyk0LzAsC1PnpzPb6Ram0BtvgjlqQBOJse2ivvsmnlhMq94Y8_2dj2hPMy2AbmlheFOS132qiLt2_S0rQXQVmJEw9psMOdisZJlW72BabqVWrJW2w6dcG5YZcAtVMCF5pQsC76DsQB42EzNZEG8z76hNElj7iXSH7g_k1-S5dCNfbgO5zjBEeQn4Zpts8DWJhBNkBGhjdN047FP_twG1O48IelqCnFJEDapBweiP4dq_6NYWBtqRRNCVxpDWxn3xTkg9597_rAsnaBdl7TzjbiVXMGCy5gUEyUNoAmXOfidQD0hF8FcZUQnT3kAOK4MFqw9tRDxQ8D3iJGj75lGLCUKCYxTeS809PIfUnhjAzwieUNhZLisX7jxvT4fmGq0ecbVfKynq_RS1tCz4FJT6U_JCLHxaZjVrG4CsHGfE8lRF0fqk0p0gN6uNK3Jc6T2aIShJJeDTnxzrsoWEl8301h0MtwrRLtHIl4n8p99Vha4kd2b-pve0BlNzKdxH3ntkSm0JNaR06x4F5LyrbEpTNToo76y-_VMZ3VrTwT3tGoGluN9DTbc5r1oY_wPetGbR)
