import gulp from 'gulp'
import eslint from 'gulp-eslint'
import changed from 'gulp-changed'
import path from 'path'

import PATHS from '../var/PATHS'

gulp.task('eslint', () => {
  return gulp.src([
    PATHS.entry.script.glob
  ])
    .pipe(eslint({
      configFile: path.join(PATHS.appRoot, '.eslintrc.json')
    }))
    .pipe(eslint.format('codeframe'))
    .pipe(eslint.failAfterError())
})
