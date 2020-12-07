import { SecretsManager } from '../../deno/client-secrets-manager/mod.ts'

const secrets = new SecretsManager({})

const { SecretList = [] } = await secrets.listSecrets({
  Filters: [
    {
      Key: 'name',
      Values: ['github-token'],
    },
  ],
})
SecretList.forEach(secret => console.log(secret.Name))
