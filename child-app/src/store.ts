import {
    action,
    makeObservable,
    observable,
    autorun,
  } from "mobx";

export default class ChildAppStore {
    message: string = 'initialized MobX state'

    constructor() {
        makeObservable(this, {
            message: observable,
            updateMessage: action,
        });

        autorun(this.logMessage)
    }

    initialMessage() {
        return this.message
    }

    updateMessage(updatedMessage: string = 'no new update received') {
        this.message = updatedMessage
        return this.message
    }

    logMessage = () => {
        console.log('MobX state updated')
    }
  }