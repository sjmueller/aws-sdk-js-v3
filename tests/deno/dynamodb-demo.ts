import { generate as uuidv4 } from 'https://deno.land/std@0.79.0/uuid/v4.ts'
import { delay } from 'https://deno.land/std@0.79.0/async/delay.ts'
import { pooledMap } from 'https://deno.land/std@0.79.0/async/pool.ts'

import { DynamoDB } from '../../deno/client-dynamodb/mod.ts'
import { marshall, unmarshall } from '../../deno/util-dynamodb/mod.ts'

const print = (s: string) => Deno.stdout.write(new TextEncoder().encode(s))
const println = (s: string) => print(`${s}\n`)
const range = (n: number) => [...Array(n).keys()]

const dynamodb = new DynamoDB({})

const TABLENAME = 'deno-test-table'

await print('Creating table...')

try {
  await dynamodb.createTable({
    TableName: TABLENAME,
    BillingMode: 'PAY_PER_REQUEST',
    AttributeDefinitions: [
      {
        AttributeName: 'id',
        AttributeType: 'S',
      },
    ],
    KeySchema: [
      {
        AttributeName: 'id',
        KeyType: 'HASH',
      }
    ],
  })
} catch(err) {
  println(`Failed: ${err.message}`)
}

const waitForTableCreation = async () : Promise<void> => {
  await delay(500)

  const response = await dynamodb.describeTable({
    TableName: TABLENAME,
  }) as any
  const {
    Table: {
      TableStatus: tableStatus,
    },
  } = response

  switch (tableStatus) {
    case 'CREATING':
      await print('.')
      return waitForTableCreation()
    case 'ACTIVE':
      await print('\n')
      return
    default:
      throw new Error(`Unexpected table status: ${tableStatus}`)
  }
}

await waitForTableCreation()

println('Populating with items ...')

const items = range(10).map((index: number) => marshall({
  id: uuidv4(),
  index,
}))

for await (const item of pooledMap(1, items, async item => {
  await dynamodb.putItem({
    TableName: TABLENAME,
    Item: item,
  })
  return item
})) {
  println(`Wrote: ${JSON.stringify(unmarshall(item))}`)
}

println('Table scan...')

const { Items: readItems = [] } = await dynamodb.scan({
  TableName: TABLENAME,
  ConsistentRead: true,
})
readItems.map(item => println(`Read: ${JSON.stringify(unmarshall(item))}`))

println('Deleting table...')

await dynamodb.deleteTable({
  TableName: TABLENAME,
})

println('Done!')
