import ContainerController from "../../../cardinal/controllers/base-controllers/ContainerController.js";

export default class ExampleController extends ContainerController {
    constructor(element) {
        super(element);
        
        this.feedbackEmitter = null
        
        // Listen for the 'openFeedback' event to receive a handle to the
        // Feedback List emitter
        this.on('openFeedback', function (e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            this.feedbackEmitter = e.detail;
            if (typeof this.feedbackEmitter === 'function') {
                this.feedbackEmitter(["string","string"],"string",["toast","alert-primary"]);
            }
        });
        console.log(this.feedbackEmitter)
        // Show an error when something happens
        element.addEventListener('validation-error', (e) => {
            const errorMessage = e.detail;
            // Send the actual message
            this.feedbackEmitter(errorMessage, 'Validation Error', 'alert-danger');
        });
    }
}