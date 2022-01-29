import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'
import notificationMessage from './../src/components/notificationMessage.vue'
import notifyStore from './../src/store.js'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.prototype.$notifyStore = new Vuex.Store(notifyStore)

describe('Testing single notificationMessage.vue component', () => {
    test('notificationMessage has default values', () => {
        const wrapComponent = mount(notificationMessage, {
            propsData: { message: '' },
            localVue
        })

        expect(wrapComponent.props().message).toBe('')
        expect(wrapComponent.vm.$props.styleType).toBe('default')
    })

    // test('notificationMessage has default classNames', () => {
    //     const wrapComponent = mount(notificationMessage)

    //     expect(wrapComponent.classes()).toContain('notification')
    //     expect(wrapComponent.classes()).toContain('notification_danger-light')
    // })

    // test('notificationMessage has correct classNames with props', () => {
    //     const styleType = 'danger'
    //     const wrapComponent = mount(notificationMessage, { propsData: { styleType, message: '' }})

    //     expect(wrapComponent.classes()).toContain('notification')
    //     expect(wrapComponent.classes()).toContain(`notification_${styleType}`)
    // })

    // test('notificationMessage className dont have wrong notification_${styleType} modificator, that shouldnt exist', () => {
    //     const styleType = 'poop'
    //     const wrapComponent = mount(notificationMessage, { propsData: { styleType, message: '' }})

    //     expect(wrapComponent.classes()).toContain('notification')
    //     expect(wrapComponent.classes()).not.toContain(`notification_${styleType}`)
    // })
})

// TODO test all styles
// TODO test default poisitions
// TODO test all positions