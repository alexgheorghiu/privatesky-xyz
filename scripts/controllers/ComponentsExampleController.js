import ContainerController from "../../cardinal/controllers/base-controllers/ContainerController.js";

const model = {
    buttonStatus: "0"
};

export default class ComponentsExampleController extends ContainerController {
    constructor(element) {
        super(element);
        this.model = this.setModel(JSON.parse(JSON.stringify(model)));

        this.feedbackEmitter = null;

        this.on('openFeedback', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            this.feedbackEmitter = e.detail;
        });

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
        this.on('add-file-folder',(evt) => {
            evt.preventDefault();
            evt.stopImmediatePropagation();
            let selectedFiles = evt.data;
            selectedFiles.forEach(file => {
                this.feedbackEmitter(`${file.name} has a size of ${file.size}`,`Psk-file-chooser in Psk-button-group example`,'toast')
            });
        })
        this.on("show-alert",(evt) => {
            evt.preventDefault();
            evt.stopImmediatePropagation();
            let typeOfAlert = evt.data
            console.log(typeOfAlert)
            this.feedbackEmitter(`You just ordered a special ${typeOfAlert}-alert, have fun with it!`,`${typeOfAlert}-alert Example`,`alert-${typeOfAlert}`)
        })
    }
}
