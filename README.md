# Template for vue components

## TODO / Roadmap

* Top / left / right / bottom positions
* Multiple styles (danger, blue, black)
* Multiple style types: UIkit like / Material like / unique, maybe user defined styles

# Setup

## Install the package

`yarn add ...`

or

`npm i -d ...`

## Setup the package
#### This is the full setup config options

```js
Vue.use(VueTestPackage, {
    defaultPosition: 'top-center',
    defaultStyle: 'default'
})
```

## defaultPosition
* Type: `string`
* Default: `'top-center'`
* Availible options:

    `'top-center'` | `'top-left'` | `'top-right'`

    `'bottom-left'` | `'bottom-center'` | `'bottom-right'`
* NOTE _Options are intentionally explicit to avoid confusion for new developers and legacy support, so there are no shorthand syntax like `'tc'` for `'top-center'`_
## defaultStyle
* Type: `string`
* Default: `'basic'`
* Availible options: `'default'` | `'basic'` | `'primary'` | `'secondary'` | `'success'` | `'info'` | `'warning'` | `'danger'` | `'dark'`
* NOTE: _Notification styles closely represent Bootstrap style naming for consistansy sake, their colors also something in between older and newer version of Bootstrap_