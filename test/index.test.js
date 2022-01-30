import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'
import availableOptions from './../src/availableOptions.js'
import notificationMessage from './../src/components/notificationMessage.vue'
import notifyStore from './../src/store.js'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.prototype.$notifyStore = new Vuex.Store(notifyStore)

describe('Testing single notificationMessage.vue component', () => {
    const wrapNotificationMessage = mount(notificationMessage, {
        propsData: { message: '' },
        localVue
    })

    test('notificationMessage has default values', () => {
        expect(wrapNotificationMessage.props().message).toBe('')
        expect(wrapNotificationMessage.vm.$props.styleType).toBe('default')
    })

    test('notificationMessage has default classNames', () => {
        console.log('wrapNotificationMessage.classes()', wrapNotificationMessage.classes())
        expect(wrapNotificationMessage.classes()).toContain('notification')
        expect(wrapNotificationMessage.classes()).toContain('notification_default')
    })

    test('notificationMessage has correct classNames with props', () => {
        const styleType = 'danger'
        const wrapNotificationMessage = mount(notificationMessage, { propsData: { styleType, message: '' }})

        expect(wrapNotificationMessage.classes()).toContain('notification')
        expect(wrapNotificationMessage.classes()).toContain(`notification_${styleType}`)
    })

    test('notificationMessage classNames dont have wrong class=".notification_${styleType}" modificator, that shouldnt exist', () => {
        const styleType = 'poop'
        const wrapNotificationMessage = mount(notificationMessage, {localVue, propsData: { styleType, message: '' }})
        console.log('wrapNotificationMessage.classes()', wrapNotificationMessage.classes())

        expect(wrapNotificationMessage.classes()).toContain('notification')
        expect(wrapNotificationMessage.classes()).toContain('notification_default')
        expect(wrapNotificationMessage.classes()).not.toContain(`notification_${styleType}`)
    })
})

// TODO test all styles
// TODO test default poisitions
// TODO test all positions