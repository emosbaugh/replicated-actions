import * as github from '@actions/github';

function main() {
  console.log(github.context.action)
}

main();
