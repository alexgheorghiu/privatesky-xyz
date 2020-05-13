import ContainerController from "../../../cardinal/controllers/base-controllers/ContainerController";

export default class FeedbackListController extends ContainerController {
    constructor(element) {
        super(element);

        this.feedbackEmitter = null;

        // Listen for the 'openFeedback' event to receive a handle to the
        // Feedback List emitter
        this.receive('openFeedback', (e) => {
            this.feedbackEmitter = e.detail;
        });

        // Show an error when something happens
        element.addEventListener('validation-error', (e) => {
            const errorMessage = e.detail;
            // Send the actual message
            this.feedbackEmitter(errorMessage, 'Validation Error', 'alert-danger');
        });
    }
}