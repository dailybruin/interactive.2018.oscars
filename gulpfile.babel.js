import gulp from 'gulp';

// HTML
import nunjucksRender from 'gulp-nunjucks-render';

// HTML
// import htmlmin from 'gulp-htmlmin';

// Styling related packages
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import minifyCSS from 'gulp-csso';
import sourcemaps from 'gulp-sourcemaps';

// Browsersync
import bs from 'browser-sync';
const browserSync = bs.create();

gulp.task('styles', () =>
  gulp
    .src('./src/*.scss')
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: 'expanded',
      }).on('error', sass.logError)
    )
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dev/css'))
    .pipe(browserSync.stream())
);

gulp.task('html', () =>
  gulp
    .src('src/*.{njk,html}')
    .pipe(
      nunjucksRender({
        path: ['src/'],
      })
    )
    .pipe(gulp.dest('dev/'))
);

gulp.task('images', () => {
  gulp.src('src/images/*').pipe(gulp.dest('dev/img'));
});

gulp.task('development', ['html', 'styles', 'images'], () => {
  browserSync.init({
    server: {
      baseDir: './dev',
      serveStaticOptions: {
        extensions: ['html'],
      },
    },
  });

  gulp.watch('src/**/*.{njk,html}', ['html']).on('change', browserSync.reload);
  gulp.watch('src/**/*.scss', ['styles']);
});

gulp.task('clean', () => del(['dev/', 'prod/']));
gulp.task('default', ['development']);
gulp.task('build', ['production']);
