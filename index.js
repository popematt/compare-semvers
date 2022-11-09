const core = require('@actions/core');
const compare = require('compare-versions').compare
const compareVersions = require('compare-versions').compareVersions

// most @actions toolkit packages have async methods
async function run() {
  try {
    const first = core.getInput('first', { required: true });
    const second = core.getInput('second', { required: true });
    const op = core.getInput('op')

    if (op) {
      core.setOutput('result', compare(first, second, op))
    } else {
      core.setOutput('result', compareVersions(first, second))
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
