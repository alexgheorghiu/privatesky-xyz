import ContainerController from "../../../cardinal/controllers/base-controllers/ContainerController.js";
const model = {
    opened : false
}
export default class ModalController extends ContainerController {
    constructor(element) {
        super(element);
        this.model = this.setModel(JSON.parse(JSON.stringify(model)));

        this.on('closeModal',(e) => {
            this.model.opened = false;
        })

        this.on('openModal',(e) => {
            this.model.opened = true;
        })
    }
}