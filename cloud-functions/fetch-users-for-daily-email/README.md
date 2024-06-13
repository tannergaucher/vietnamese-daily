# Fetch user for daily email

## Run locally

```bash
npm install && npm start
```

## Invoke with curl

Data is base64 encoded JSON string. For example, the following data is `{}`.

```bash
curl -m 70 -X POST localhost:8080 \
-H "Authorization: bearer $(gcloud auth print-identity-token)" \
-H "Content-Type: application/json" \
-H "ce-id: 1234567890" \
-H "ce-specversion: 1.0" \
-H "ce-type: google.cloud.pubsub.topic.v1.messagePublished" \
-H "ce-time: 2020-08-08T00:11:44.895529672Z" \
-H "ce-source: //pubsub.googleapis.com/projects/daily-vietnamese/topics/send-daily-email" \
-d '{
"message": {
"data": "e30="
}
}'

```
