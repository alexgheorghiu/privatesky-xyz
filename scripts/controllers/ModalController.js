import ContainerController from "../../../cardinal/controllers/base-controllers/ContainerController.js";

const viewModel = {
    opened: false,
    expandedModalOpened: false
}

export default class ModalController extends ContainerController {
    constructor(element) {
        super(element);
        this.model = this.setModel(JSON.parse(JSON.stringify(viewModel)));

        this.on('openExpandedModal', (e) => {
            this.model.expandedModalOpened = true;
        });

        this.on('openModal', (e) => {
            this.model.opened = true;
        });

        this.on('closeModal', (e) => {
            this.model.opened = false;
        });

        this.on('closeExpandedModal', (e) => {
            this.model.expandedModalOpened = false;
        });
    }
}