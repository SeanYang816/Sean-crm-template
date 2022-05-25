const git = require('git-rev-sync')

// fail if the git command is not found in PATH

console.log(`Tag: ${git.tag(null)}`)
console.log(`Short Head Commit: ${git.short(null, [10])}`)
console.log(`Long Head Commit: ${git.long(null)}`)
console.log(`Current Branch: ${git.branch(null)}`)
console.log(`Total Commits: ${git.count()}`)
console.log(`Commit Date: ${git.date()}`)
console.log(`Unstaged Changes: ${git.hasUnstagedChanges()}`)
console.log(`Uncommitted Changes: ${git.isDirty()}`)
console.log(`Dirty Tag: ${git.isTagDirty(null)}`)
console.log(`Commit Message: ${git.message()}`)
console.log(`Remote Url: ${git.remoteUrl()}`)