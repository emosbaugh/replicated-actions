import yargs from "yargs";
import {actionRemoveCluster} from "./remove-cluster";

async function main() {
  await yargs(process.argv.slice(2))
    .command('remove-cluster', "Remove cluster action", async () => {
        await actionRemoveCluster();
    })
    .demandCommand(1)
    .argv;
}

main();
