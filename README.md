# Vue Notification Package

## Install the package

`yarn add v-notify`

or

`npm install v-notify`

## 1. Setup the package
```javascript
import Vue from 'vue'
import VueNotify from 'v-notify'

Vue.use(VueNotify, {
    defaultPosition: 'top-center',
    defaultStyle: 'info',
    time: 3000
})

// On this stage you define your default options, you also can skip them

Vue.use(VueNotify)
```

## 2. Add `<Notify></Notify>` component inside your vue instance
```html
<body>
    <div id="app">
        <App></App>
        <Notify></Notify>
    </div>
    <script src="bundle.js"></script>
</body>
```
## 3. Use `$notify` to notify
```html
<template>
    <button @click="notify()">dark style</button>
</template>
```

```js
<script>
export default {
    methods: {
        notify(position, style, time) {
            this.$notify('Hello world', {
                time: 3000,
                position: 'top-center',
                style: 'basic'
            })
            // or you can use it without options
            // in that case default options set above would be applied
            this.$notify('Hello world')
        }
    }
}
</script>
```

## Reference

### **defaultPosition**
* Type: `string`
* Default: `'top-center'`
* Availible options:

    `'top-center'` | `'top-left'` | `'top-right'`

    `'bottom-left'` | `'bottom-center'` | `'bottom-right'`
* NOTE _Options are intentionally explicit to avoid confusion for new developers and legacy support, so there are no shorthand syntax like `'tc'` for `'top-center'`_
### **defaultStyle**
* Type: `string`
* Default: `'basic'`
* Availible options: `'default'` | `'basic'` | `'primary'` | `'secondary'` | `'success'` | `'info'` | `'warning'` | `'danger'` | `'dark'`
* NOTE: _Notification styles closely represent Bootstrap style naming for consistansy sake, their colors also something in between older and newer version of Bootstrap_

### **time**
* Type: `number`
* Default: `3000`
* Availible options: Any int
* NOTE: _Currently you can input any integer, there are no restrictions which maybe produce errors_

## NOTEs / TODOs / Rodeman
* Users can currently change styles through basic class naming, its convinient, but when you need `notification` class name, this could cause problems
* Split everything to styled components for class naming safety NOTE _only if nessesary_, cuz it depends from project to project. This feature will require a bit more code so user could edit styles through options.
* User defined class style name to replace `.notification` since its more powerfull to use `sass` instead of styled components or class/style bindings.
* User defined `Vue.prototype.$notify` name
* Tests with all positions, styles, screen resolutions
* Multiple style types: UIkit like / Material like