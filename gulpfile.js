const gulp = require(`gulp`);
const plumber = require(`gulp-plumber`);
const sourcemap = require(`gulp-sourcemaps`);
const sass = require(`gulp-sass`);
const postcss = require(`gulp-postcss`);
const autoprefixer = require(`autoprefixer`);
const server = require(`browser-sync`).create();
const csso = require(`gulp-csso`);
const rename = require(`gulp-rename`);
const imagemin = require(`gulp-imagemin`);
const webp = require(`gulp-webp`);
const svgstore = require(`gulp-svgstore`)
const posthtml = require(`gulp-posthtml`);
const include = require(`posthtml-include`);
const del = require(`del`);
const webpack = require(`webpack-stream`);
const webpackConfig = require(`./webpack.config.js`);

gulp.task(`js`, function () {
  return gulp.src([`source/js/main.js`])
      .pipe(webpack(webpackConfig))
      // .pipe(uglify())
      .pipe(gulp.dest(`build/js`));
});

// let isDev = true;

// const mainWebpackConfig = {
//   output: {
//     filename: `index.js`
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: `/node_modules/`,
//         loader: `babel-loader`,
//         options: {
//           presets: [[`@babel/preset-env`, {
//             "targets": `> 0.25%, not dead`
//           }]]
//         }
//       }
//     ]
//   },
//   mode: isDev ? `development` : `production`,
//   devtool: isDev ? `eval-sourse-map` : `none`
// };

// const vendorWebpackConfig = {
//   output: {
//     filename: `index.js`
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         loader: `babel-loader`,
//         exclude: `/node_modules/`,
//         options: {
//           presets: [`@babel/preset-env`]
//         }
//       }
//     ]
//   },
//   mode: isDev ? `development` : `production`,
//   devtool: isDev ? `eval-sourse-map` : `none`
// };

// gulp.task(`main`, function () {
//   return gulp
//       .src(`source/js/modules/index.js`)
//       .pipe(webpack(mainWebpackConfig))
//       .pipe(rename(`main.js`))
//       .pipe(gulp.dest(`build/js/`));
// });

// gulp.task(`vendor`, function () {
//   return gulp
//       .src(`source/js/vendor/index.js`)
//       .pipe(webpack(vendorWebpackConfig))
//       .pipe(rename(`vendor.js`))
//       .pipe(gulp.dest(`build/js/`));
// });

gulp.task(`css`, function () {
  return gulp.src(`source/sass/style.scss`)
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass({
      includePaths: require(`node-normalize-scss`).includePaths
    }))
    .pipe(postcss([autoprefixer({
      grid: true, overrideBrowserslist: ['Ie >= 11, IOS >= 12, > 0.2%, Safari >= 10']
    })]))
    .pipe(gulp.dest(`build/css`))
    .pipe(csso())
    .pipe(rename(`style.min.css`))
    .pipe(sourcemap.write(`.`))
    .pipe(gulp.dest(`build/css`))
    .pipe(server.stream());
});


gulp.task(`server`, function () {
  server.init({
    server: `build/`,
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  // gulp.watch(`source/js/modules/index.js`, gulp.series(`main`, `refresh`));
  // gulp.watch(`source/js/vendor/index.js`, gulp.series(`vendor`, `refresh`));
  gulp.watch(`source/sass/**/*.{scss,sass}`, gulp.series(`css`));
  gulp.watch(`source/img/icon-*.svg`, gulp.series(`sprite`, `html`, `refresh`));
  gulp.watch(`source/*.html`, gulp.series(`html`, `refresh`));
  gulp.watch(`source/js/**/*.js`, gulp.series(`js`, `refresh`));
});

gulp.task(`refresh`, function (done) {
  server.reload();
  done();
});

gulp.task(`images`, function () {
  return gulp.src(`source/img/**/*.{png,jpg,svg}`)
    .pipe(imagemin([
      imagemin.optipng({
        optimizationLevel: 3
      }),
      imagemin.mozjpeg({
        quality: 75, progressive: true
      }),
      imagemin.svgo({
        plugins: [
          {removeViewBox: false},
          {removeRasterImages: true},
          {removeUselessStrokeAndFill: false},
        ]
      })
    ]))

    .pipe(gulp.dest(`source/img`));

});

gulp.task(`webp`, function () {
  return gulp.src(`source/img/**/*.{png,jpg}`)
    .pipe(webp({
      quality: 90
    }))
    .pipe(gulp.dest(`source/img`));
});

gulp.task(`sprite`, function () {
  return gulp.src(`source/img/svg/{icon-*,htmlacademy*}.svg`)
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename(`sprite_auto.svg`))
    .pipe(gulp.dest(`build/img/svg`));
});

gulp.task(`html`, function () {
  return gulp.src(`source/*.html`)
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulp.dest(`build`));
});

gulp.task(`copy`, function () {
  return gulp.src([
      `source/fonts/**/*.{woff,woff2}`,
      `source/img/**`,
      `source//*.ico`
    ], {
      base: `source`
    })
    .pipe(gulp.dest(`build`));
});

gulp.task(`clean`, function () {
  return del(`build`);
});


gulp.task(
  `build`,
  gulp.series(`clean`, `copy`, `css`, `sprite`, `js`, `html`)
);

gulp.task(`start`, gulp.series(`build`, `server`));
