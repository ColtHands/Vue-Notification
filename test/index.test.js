import { mount, createLocalVue } from '@vue/test-utils'
import { describe } from 'yargs'
// import VueNotification from './../dist/bundle.js'
import notificationMessage from './../src/components/notificationMessage.vue'

const Vue = createLocalVue()

// Vue.use(VueNotification)

const wrapComponent = mount(notificationMessage)

console.log(wrapComponent.vm.$props.message)
console.log(wrapComponent.vm.$props.styleType)

describe('aasd', () => {
    test('has default values', () => {
        expect(wrapComponent.vm.$props.message).toBe('')
    })
})
