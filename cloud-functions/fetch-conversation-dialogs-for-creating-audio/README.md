# Fetch Conversation Dialogs for Creating Audio

## Deploy

```bash
gcloud functions deploy fetchConversationDialogsForCreatingAudio \
  --gen2 \
  --region="us-east1" \
  --runtime="nodejs18" \
  --source="." \
  --entry-point="fetchConversationDialogsForCreatingAudio" \
  --trigger-topic="fetch-conversation-dialogs-for-creating-audio"
```
