# Daily Vietnamese

Daily Vietnamese is an autonomously posting LLM generated content application for Vietnamese language learning practice. It leverages generative LLMs to create conversation topics, and uses GCP cloud functions, text-to-speech API, Pub/Sub, and cloud storage to asynchronously process the creation of conversation dialog audio files and images based on a given topic, and publishes a new conversation each day.

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

[![](https://mermaid.ink/img/pako:eNptU9FuozAQ_BXLT4kU_0B0qpSSJpc06VXKSffCi4UXsAQ2MibtCfj3s1lzwm3ghbVnZmfHuKeZFkC3tDC8KcnvfaqIe3b9LStBdBWYkTD2RIYcbFayTKs7mJZbqRVrpe3wK9eGZQZcoQomJK90QeAOyg7keTUxkwXxNvMO2iSBtZ9Ia-z-TH5MPZfdyP9uA7nOMER5CfjSNlnhMomEE2Q0RteNA136Xw2o3WnE3QvuopCTiDhBLnQx-mO49u-6tYWBdiQR9EFUSGvjoHgnpJ4N77_nhNbbRUo7z1g_8BUaMFnzAoLkS4gAZU5-Z_3AZ2B-aCNif0HmgMZQ5Y9HLQwFwUPkxUvNY70FE54YwG8InlAYQS4rGMhp3p4O_xpVP7HaP5o5ivEYDb3M6xiU-mPyTix8WmY1axuArBxnxOL8Y2t9UulOkJvVxsUY8C-Ix8yjGYKSVAI-_Y9gnbfg8LyaVt05uypYO0cjnyfya7-rCl1J7pr5l25oDabmUrjL2ntkSm0JNaR06z4F5LyrbEpTNToo76y-_VUZ3VrTwYZ2jcBQ3DWv6TbnVQvjP2ZNVeM?type=png)](https://mermaid.live/edit#pako:eNptU9FuozAQ_BXLT4kU_0B0qpSSJpc06VXKSffCi4UXsAQ2MibtCfj3s1lzwm3ghbVnZmfHuKeZFkC3tDC8KcnvfaqIe3b9LStBdBWYkTD2RIYcbFayTKs7mJZbqRVrpe3wK9eGZQZcoQomJK90QeAOyg7keTUxkwXxNvMO2iSBtZ9Ia-z-TH5MPZfdyP9uA7nOMER5CfjSNlnhMomEE2Q0RteNA136Xw2o3WnE3QvuopCTiDhBLnQx-mO49u-6tYWBdiQR9EFUSGvjoHgnpJ4N77_nhNbbRUo7z1g_8BUaMFnzAoLkS4gAZU5-Z_3AZ2B-aCNif0HmgMZQ5Y9HLQwFwUPkxUvNY70FE54YwG8InlAYQS4rGMhp3p4O_xpVP7HaP5o5ivEYDb3M6xiU-mPyTix8WmY1axuArBxnxOL8Y2t9UulOkJvVxsUY8C-Ix8yjGYKSVAI-_Y9gnbfg8LyaVt05uypYO0cjnyfya7-rCl1J7pr5l25oDabmUrjL2ntkSm0JNaR06z4F5LyrbEpTNToo76y-_VUZ3VrTwYZ2jcBQ3DWv6TbnVQvjP2ZNVeM)
