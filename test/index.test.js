import { mount, createLocalVue } from '@vue/test-utils'
import notificationMessage from './../src/components/notificationMessage.vue'

// import VueNotification from './../dist/bundle.js'
// const Vue = createLocalVue()
// Vue.use(VueNotification)

describe('Testing single notificationMessage.vue component', () => {
    test('has default values', () => {
        const wrapComponent = mount(notificationMessage)

        expect(wrapComponent.props().message).toBe('')
        expect(wrapComponent.vm.$props.styleType).toBe('basic')
    })

    test('has default classNames', () => {
        const wrapComponent = mount(notificationMessage)

        expect(wrapComponent.classes()).toContain('notification')
        expect(wrapComponent.classes()).toContain('notification_basic')
    })

    test('has correct classNames with props', () => {
        const styleType = 'danger'
        const wrapComponent = mount(notificationMessage, { propsData: { styleType }})

        expect(wrapComponent.classes()).toContain('notification')
        expect(wrapComponent.classes()).toContain(`notification_${styleType}`)
    })

    test('className dont have wrong notification_${styleType} modificator, that shouldnt exist', () => {
        const styleType = 'poop'
        const wrapComponent = mount(notificationMessage, { propsData: { styleType }})

        expect(wrapComponent.classes()).toContain('notification')
        expect(wrapComponent.classes()).not.toContain(`notification_${styleType}`)
    })
})
