import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '4u3xakge',
    dataset: 'production'
  },
  // Hosted at https://nursprep.sanity.studio (npx sanity deploy)
  studioHost: 'nursprep',
  deployment: {
    appId: 'i6mrpoqsvyd9gd1ntjx7gky3',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
})
