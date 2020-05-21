import ContainerController from "../../cardinal/controllers/base-controllers/ContainerController.js";

const model = {
    name: {
        label: "Name",
        name: "name",
        required: true,
        placeholder: "Name here...",
        value: ''
    },
    email: {
        label: "Email ",
        name: "email",
        required: true,
        placeholder: "Email address here...",
        value: ''
    },
    age: {
        label: "Age",
        name: "age",
        required: true,
        placeholder:"Enter you age here...",
        value:''
    },
    adress: {
        label: "Adress",
        name: "adress",
        required: true,
        placeholder:"Enter you adress here...",
        value:''
    },
    password: {
        label: "Password",
        name: "password",
        required: true,
        placeholder: "Password here...",
        value: ''
    },
    startDate: {
        label: "START DATE",
        input: {
            name: "date-to-start",
            required: false,
            value: ''
        }
    },
    endDate: {
        label: "CLOSE DATE",
        input: {
            name: "date-to-end",
            required: false,
            value: ''
        }
    },
    number: {
        label: "Choose a number:",
        name: "number",
        required: true,
        value: '0'
    }

}

export default class FormComponentExampleController extends ContainerController {
    constructor(element) {
        super(element);
        this.model = this.setModel(JSON.parse(JSON.stringify(model)));
    }
}
