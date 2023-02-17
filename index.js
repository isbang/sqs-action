const core = require("@actions/core");
const aws = require("aws-sdk");

async function run() {
  try {
    const sqsUrl = core.getInput("sqs-url", { required: false });
    const message = core.getInput("message", { required: true });
    const messageAttributes = core.getInput("message-attributes", {
      required: false,
    });

    const params = {
      QueueUrl: sqsUrl,
      MessageBody: message,
      MessageAttributes: messageAttributes ? JSON.parse(messageAttributes) : {},
    };

    const sqs = new aws.SQS();
    sqs.sendMessage(params, (err, resp) => {
      if (err) {
        throw err;
      } else {
        console.log(`Message successfully sent`);
      }
    });
  } catch (error) {
    core.setFailed(error.message);
  }
}

module.exports = run;

/* istanbul ignore next */
if (require.main === module) {
  run();
}
