# Create Dialog Audio Cloud Function

## Deploy locally with gcloud CLI

```bash
gcloud functions deploy createDialogAudio \
  --gen2 \
  --region="us-east1" \
  --runtime="nodejs18" \
  --source="." \
  --entry-point="createDialogAudio" \
  --trigger-topic="create-dialog-audio"
```
