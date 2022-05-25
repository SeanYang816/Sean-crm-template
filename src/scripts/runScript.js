const git = require('git-rev-sync')
const { exec, execSync } = require('child_process')

try {
    console.log(`release: ${git.tag()}`)
    let stdout = execSync('dir', {}, (error, stdout, stderr) => {
      console.log(error)
      console.log(stdout)
      console.log(stderr)
    })
} catch(err) {
    console.error(err)
}