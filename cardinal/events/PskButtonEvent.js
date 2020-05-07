import { EVENTS_TYPES } from "../utils/constants";
const EVENT_TYPE = EVENTS_TYPES.PSK_BUTTON_EVT;
export default class PskButtonEvent extends CustomEvent {
    constructor(eventName, eventData, eventOptions) {
        super(eventName, eventOptions);
        this.getEventType = function () {
            return EVENT_TYPE;
        };
        this.data = eventData;
    }
}
