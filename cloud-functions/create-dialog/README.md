# Create Dialog Cloud Function

## Run function locally with the Functions Framework on port 8080

```
npm start
```

## Send request to the locally running function

```
curl localhost:8080 \
  -X POST \
  -H "Content-Type: application/json" \
  -H "ce-id: 123451234512345" \
  -H "ce-specversion: 1.0" \
  -H "ce-time: 2020-01-02T12:34:56.789Z" \
  -H "ce-type: google.cloud.pubsub.topic.v1.messagePublished" \
  -H "ce-source: //pubsub.googleapis.com/projects/MY-PROJECT/topics/create-dialog" \
  -d '{
        "message": {
          "data": "ewogICJzaXR1YXRpb25JZCI6ICI5MWNhZGRjMi1kODAyLTQ5NjUtYjRlOS1jZjE2ZmQ4MjRkZGEiCn0=",
          "attributes": {
             "attr1":"attr1-value"
          }
        },
        "subscription": "projects/daily-vietnamese/subscriptions/create-dialog"
      }'

```
