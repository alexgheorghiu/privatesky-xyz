import ContainerController from "../../cardinal/controllers/base-controllers/ContainerController.js";

const model = {
    buttonStatus: "0"
};

export default class TestFormChildrenController extends ContainerController {
    constructor(element) {
        super(element);
        this.model = this.setModel(JSON.parse(JSON.stringify(model)));
        
        this.model.addExpression('switchButtonState', function() {
            return this.buttonStatus;
        }, 'buttonStatus');

        this.on('toggle-property', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            console.log(property, e.data)
            const property = e.data;
            const value = this.model[property];
            this.model[property] = !value;
        })

        this.on("switch-invitation-type", (evt) => {
            evt.preventDefault();
            evt.stopImmediatePropagation();
            this.model.buttonStatus = (this.model.buttonStatus + 1) % 2;

        })
    }
}
