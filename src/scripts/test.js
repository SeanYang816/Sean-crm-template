const git = require('git-rev-sync')

// fail if the git command is not found in PATH

const currentTag = '0.0.1_git-rev-sync'
console.log(`Tag: ${git.tag([currentTag])}`)
// return the current tag and mark as dirty if markDirty is truthful; this method will fail if the git command is not found in PATH
// git.short([filePath], [length])
// git.long([filePath])
// git.branch([filePath])
// git.count()
// git.date() →
// git.hasUnstagedChanges()
console.log(git.isDirty())
// console.log(git.isTagDirty(currentTag))
console.log(`Commit Message: ${git.message()}`)
console.log(`Remote Url: ${git.remoteUrl()}`)