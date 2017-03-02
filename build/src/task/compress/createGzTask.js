import { task, src, dest } from 'gulp'
import gzip from 'gulp-gzip'

export default function createGzTask(taskName, entry, output, option) {
  let files  = output.glob
  let dir    = output.dir

  task(taskName, () => src(files)
    .pipe(gzip())
    .pipe(dest(dir))
  )
}
