# AWS SQS javascript action

This action send message to AWS SQS.

## Inputs

### `sqs-url`

**Required** The aws sqs url to send message.

### `message`

**Required** The message to send.

## Example usage

```yaml
- uses: aws-actions/configure-aws-credentials@v1
  with:
    aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
    aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
    aws-region: us-east-2

- uses: isbang/sqs-action@v0.1.1
  with:
    sqs-url: https://sqs.us-east-2.amazonaws.com/somewhere
    message: 'message body here'
```
