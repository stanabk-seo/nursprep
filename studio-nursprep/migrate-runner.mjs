// Runs the one-time 11ty → Sanity import with your Sanity CLI login:
//   npx sanity exec migrate-runner.mjs --with-user-token            (first run)
//   npx sanity exec migrate-runner.mjs --with-user-token -- --force  (overwrite existing exams)
import {getCliClient} from 'sanity/cli'
import {migrate} from '../scripts/sanity/migrate.mjs'

const client = getCliClient({apiVersion: '2025-02-19'})
await migrate(client, {force: process.argv.includes('--force')})
