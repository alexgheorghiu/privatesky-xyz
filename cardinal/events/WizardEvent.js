import { EVENTS_TYPES } from "../utils/constants";
const EVENT_TYPE = EVENTS_TYPES.PSK_WIZARD_EVT;
export default class WizardEvent extends CustomEvent {
    constructor(eventName, eventData, eventOptions) {
        super(eventName, eventOptions);
        this.getEventType = function () {
            return EVENT_TYPE;
        };
        this.data = eventData;
    }
}
