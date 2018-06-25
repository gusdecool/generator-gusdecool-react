# <%= appName %>

## Installation

1. Install [yarn](https://yarnpkg.com/en/docs/install)
3. Run `yarn install` to install dependencies assets
4. Run `yarn flow-typed install` to install flow type dependencies
4. Run `yarn dev` to compile react and open it at `https://localhost:3000/index.html`

## Usage

```html
<div id="<%= appName %>"></div>
<script src="https://localhost:3000/widget.js" type="text/javascript" async></script>
```

## Options

| Name                          | Required | Default | Description                                                            |
| ----------------------------- | -------- | ------- | ---------------------------------------------------------------------- |
| id                            | YES      | -       | The targeted HTML id, value must `<%= appName %>`                     |
