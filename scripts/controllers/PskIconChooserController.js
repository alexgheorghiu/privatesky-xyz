import ContainerController from "../../cardinal/controllers/base-controllers/ContainerController.js";

const model = {
    iconSize: '45px',
    iconColor: 'red',
    iconValue: ''
};

export default class PskIconChooserController extends ContainerController {
    constructor(element) {
        super(element);
        this.model = this.setModel(model);
        this.model.onChange('iconValue', () => {
            console.log('changed', this.model.iconValue);
        })
    }
}
