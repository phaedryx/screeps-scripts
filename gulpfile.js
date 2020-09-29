let gulp = require('gulp')
let typescript = require('gulp-typescript')

gulp.task('default', () => {
  let result = gulp.src('src/*.ts').pipe(
    typescript({
      noImplicitAny: true,
      module: 'commonjs',
      baseUrl: 'src'
    })
  )
  return result.js.pipe(gulp.dest('dist'))
})
