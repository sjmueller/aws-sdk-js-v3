import { DynamoDB } from '../../deno/client-dynamodb/mod.ts';

const dynamodb = new DynamoDB({})

const { TableNames = [] } = await dynamodb.listTables({})
TableNames.forEach(tableName => console.log(tableName))
