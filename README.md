# Frontend Development Environment with SASS and TWIG

## Folder structure
<pre>
── app
│   ├── assets
│   │   ├── fonts
│   │   └── images
│   ├── html
│   │   ├── layouts
│   │   ├── partials
│   │   │   ├── footer.twig
│   │   │   └── header.twig
│   │   └── views
│   │       └── index.twig
│   ├── js
│   │   └── app.js
│   └── scss
│       ├── components
│       │   ├── _all.sass
│       │   └── _button.sass
│       ├── _settings.sass
│       └── main.sass
├── gulp
│   ├── tasks
│   │   ├── base
│   │   │   ├── clean.js
│   │   │   ├── serve.js
│   │   │   └── watch.js
│   │   ├── build
│   │   │   ├── assets.js
│   │   │   ├── css.js
│   │   │   ├── fonts.js
│   │   │   ├── html.js
│   │   │   ├── images.js
│   │   │   └── js.js
│   │   └── default
│   │       ├── assets.js
│   │       ├── sass.js
│   │       ├── template.js
│   │       └── webpack.js
│   ├── config.js
│   ├── paths.js
│   └── webpack.config.js
├── serve
├── README.md
├── gulpfile.js
├── package-lock.json
└── package.json
</pre>

## Usage
Step 1: Install Node Packages.
`npm install`

Step 2: Run Gulp
`gulp`

For Distribution Package, run:
`gulp dist`
