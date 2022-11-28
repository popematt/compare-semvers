const core = require('@actions/core');
const compareVersions = require('compare-versions').compareVersions

// most @actions toolkit packages have async methods
async function run() {
  try {
    const first = core.getInput('first', { required: true });
    const second = core.getInput('second', { required: true });

    core.setOutput('result', compareVersions(first, second))
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
