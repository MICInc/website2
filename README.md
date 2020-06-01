## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### `./node_modules/.bin/eslint --init` if getting the issue below:
```
Module build failed (from ./node_modules/eslint-loader/index.js):
Error: No ESLint configuration found
```

### `npm install eslint-plugin-vue@next` or ignore if getting the following error:
```
Could not install from "eslint-config-plugin:vue/essential@latest" as it does not contain a package.json file
```

### If getting eslint error with lazy load import:
```
component: () => import('./views/Index.vue')
```

add the following to `.eslintrc.json`:
```
"parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "parser": "babel-eslint"
    }
```