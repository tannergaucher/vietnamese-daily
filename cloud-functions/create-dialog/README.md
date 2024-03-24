# Create Dialog Cloud Function

## Deploy locally with gcloud CLI

```bash
gcloud functions deploy createDialog \
  --gen2 \
  --region=us-east1 \
  --runtime=nodejs18 \
  --source="." \
  --entry-point="createDialog" \
  --allow-unauthenticated \
  --trigger-http \
  --env-vars-file=".env.yaml"
```
