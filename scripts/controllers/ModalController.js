import ContainerController from "../../../cardinal/controllers/base-controllers/ContainerController.js";

export default class ModalController extends ContainerController {

    constructor(element) {
        super(element);
        this.model = this.setModel(this.getModel());

        this.on('openModal', (e) => {
            this.model.opened = true;
        });

        this.on('openExpandedModal', (e) => {
            this.model.expandedModalOpened = true;
        });

        this.on('closeModal', (e) => {
            this.model.opened = false;
        });

        this.on('closeExpandedModal', (e) => {
            this.model.expandedModalOpened = false;
        });
    }

    getModel = () => {
        return {
            opened: false,
            expandedModalOpened: false
        };
    }
}