const git = require('git-rev-sync')

// fail if the git command is not found in PATH

const currentTag = '0.0.1_git-rev-sync'
const currentBranch = 'gitRevSync'
console.log(`Tag: ${git.tag([currentTag])}`)
// return the current tag and mark as dirty if markDirty is truthful; this method will fail if the git command is not found in PATH
// git.short([filePath], [length])
console.log(`Current Head: ${git.long()}`)
console.log(`Current Branch: ${git.branch()}`)
console.log(`Total Commits: ${git.count()}`)
console.log(`Commit Date: ${git.date()}`)
console.log(`Unstaged Changes: ${git.hasUnstagedChanges()}`)
console.log(`Uncommitted Changes: ${git.isDirty()}`)
// console.log(git.isTagDirty(currentTag))
console.log(`Commit Message: ${git.message()}`)
console.log(`Remote Url: ${git.remoteUrl()}`)