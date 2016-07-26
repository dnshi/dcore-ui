const gulp = require('gulp')
const precss = require('precss')
const cssnext = require('postcss-cssnext')
const postcss = require('gulp-postcss')
const sourcemaps = require('gulp-sourcemaps')
const lint = require('gulp-stylelint')

gulp.task('css', () =>
  gulp.src('src/dcore.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([precss, cssnext]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/'))
)

gulp.task('lint', () =>
  gulp.src('src/**/*.css')
    .pipe(lint({ reporters: [{ formatter: 'verbose', console: true }] }))
)

// Rerun the task when a file changes
gulp.task('watch', ['css', 'lint'], () => gulp.watch('src/**/*.css', ['css', 'lint']))
