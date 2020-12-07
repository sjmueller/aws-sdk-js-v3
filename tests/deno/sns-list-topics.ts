import { SNS } from '../../deno/client-sns/mod.ts'

const sns = new SNS({})

const { Topics = [] } = await sns.listTopics({})
Topics.forEach(topic => console.log(topic.TopicArn))
