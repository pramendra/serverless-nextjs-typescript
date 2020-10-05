
# Tutorial


## Devlopment setup
```bash
$ nvm use
```

## Development steps

### init app 
```bash
$ npm init -y
$ npm install react react-dom next
```

### setup prettier 
```bash
$ npm install -D prettier pretty-quick
```


#### add config
.prettierrc 
.vscode/settings.json


### setup eslint

```bash
$ npm install -D eslint
$ npx eslint --init
```

#### config eslint
How would you like to use ESLint 
❯ To check syntax, find problems, and enforce code style

What type of modules does your project use?
❯ JavaScript modules (import/export)

Which framework does your project use?
❯ React

Does your project use TypeScript?
❯ Yes

Where does your code run?
❯ Browser

❯ Use a popular style guide
❯ Standard: https://github.com/standard/standard
❯ JSON

Would you like to install them now with npm? 
❯ Yes


#### setup plugins
```bash
$ npm install -D eslint-plugin-prettier
```