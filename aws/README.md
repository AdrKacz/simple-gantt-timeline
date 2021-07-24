# Setup your database

## AWS

### Price Estimate

Service | Upfront | Monthly | First 12 months total | Currency | Configuration summary
------- | ------- | ------- | --------------------- | -------- | ---------------------
Amazon API Gateway | 0 | 0.0042 | 0.05 | USD | HTTP API, 4,000 request per month, 2kB per request
AWS Lambda | 0 | 0 | 0.00 | USD | 4,000 request per month
DynamoDB on-demand capacity | 0 | 0| 0.00 | USD | 25GB of storage (AWS Free Tier, always free), 1kB per item
**Total** | **0** | **0.0042** | **0.05** | **USD**

AWS Free Tier offers 1 Million Amazon API Gateway request per month for the first 12 months. **So, the total price for the first 12 months is $0.00.**

### Deployment

1. Download the file [cloud-formation-template](./cloud-formation-template.yaml).

2. Create an AWS Account or use an existing one.

3. Go to your [AWS Console](https://console.aws.amazon.com/console/home).

4. Search for [Cloud Formation](https://console.aws.amazon.com/cloudformation/home) *(you will use Cloud Formation to create your API Cloud Architecture)*.

5. Click on [Create Stack](https://console.aws.amazon.com/cloudformation/home?#/stacks/create/template).

6. Select **Template is ready** and **Upload a template file**, and upload the file [cloud-formation-template](./cloud-formation-template.yaml) downloaded.

7. Click on **Next**, and enter a name for your stack (*example: mystack001*).

8. Click on **Next**, you are on the *Configure stack options* page, click on **Next**.

9. You are on the *Review* page, scroll down and check the box **I acknowledge that AWS CloudFormation might create IAM resources** *(your need to give permission to your API to perform action on your database)*.

10. Click on **Create Stack**, and wait 2-3 minutes.

11. When you see **CREATE_COMPLETED** in green under your stack name, click on the **Outputs** tab.

12. You can use **InvokeURL** in the *Connect to your database* form at [https://adrkacz.github.io/simple-gantt-timeline/](https://adrkacz.github.io/simple-gantt-timeline/).

## Deletion

1. Go to your [AWS Console](https://console.aws.amazon.com/console/home).

2. Search for [Cloud Formation](https://console.aws.amazon.com/cloudformation/home) *(you will use Cloud Formation to create your API Cloud Architecture)*.

3. Click on [Stacks](https://console.aws.amazon.com/cloudformation/home?#/stacks).

4. Select your stack, and click on the **Delete** button on the top right corner.
