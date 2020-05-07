import ContainerController from "../../cardinal/controllers/base-controllers/ContainerController.js";

const model = {
    sectionTitle: {
        label: "Your personal information"
    },
    name: {
        label: "Name",
        name: "name",
        required: true,
        placeholder: "Name here...",
        value: 'John'
    },
    email: {
        label: "Email address",
        name: "email",
        required: true,
        placeholder: "Email address here...",
        value: 'john@privatesky.xyz'
    },
    age: {
        label: "Your age",
        name: "age",
        required: false,
        placeholder: "Your age here...",
        value: '20'
    },
    dateOfBirth: {
        label: "Select from the calendar your birth date",
        name: "date-of-birth",
        required: false,
        value: ''
    },
    password: {
        label: "Write down your password.",
        hint: "The submition will create an account using your name and password.",
        name: "password",
        required: false,
        placeholder: "Password here...",
        value: ''
    },
    gender: {
        label: "Select your gender",
        required: true,
        options: [{
            label: "Male"
        },
            {
                label: "Female",
                value: "F"
            }
        ]
    },
    nationality: {
        label: "Select your nationality",
        placeholder: "Please select one option...",
        required: true,
        options: [{
            label: "Romanian",
            value: "RO"
        }]
    },
    gdpr: {
        label: "Check if you agree with GDPR regulations",
        name: "gdpr",
        required: true,
        checkboxLabel: "GDPR Consent",
        checkedValue: "yes",
        uncheckedValue: "no"
    },
    terms: {
        label: "Do you accept our terms and conditions?",
        name: "terms",
        required: true,
        checkboxLabel: "Terms & Conditions",
        checkedValue: "yes",
        uncheckedValue: "no"
    }
};

export default class TestFormController extends ContainerController {
    constructor(element) {
        super(element);
        this.model = this.setModel(JSON.parse(JSON.stringify(model)));

        let customSubmit = () =>{
			let name = this.model.getChainValue("name.value");
			let email = this.model.getChainValue("email.value");
			let age = this.model.getChainValue("age.value");
			alert(`Submitted:[${name},${email},${age}]`)
        };

		let resetForm = () => {
			this.model.name.value = model.name.value;
			this.model.email.value = model.email.value;
			this.model.age.value = model.age.value;
		};

        this.on("submit",customSubmit,true);
		this.on("reset-form",resetForm,true);
		this.on("custom-submit",customSubmit,true);


    }
}
