import { makeAutoObservable } from "mobx";

class Modal {
    showModal = false
    currenModal = ''
    
    constructor() {
        makeAutoObservable(this)
    }

    setShowModal = (currenModal) => {
        this.showModal = true
        this.currenModal = currenModal
        console.log('first', this.showModal)
    }

    setCloseModal = () => {
        this.showModal = false
        this.currenModal = ''
        console.log('close', this.showModal)
    }

}

export default new Modal()