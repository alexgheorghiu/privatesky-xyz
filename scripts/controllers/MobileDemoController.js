import ContainerController from '../../cardinal/controllers/base-controllers/ContainerController.js';

class MobileController extends ContainerController {
    getModel() {
        return {
            footer: [
                {
                    name: 'Home', icon: 'home',
                    page: 'Cardinal/web-components/mobile-demo_home'
                },
                {
                    name: 'Random', icon: 'random',
                    page: 'Cardinal/web-components/mobile-demo_random'
                },
                {
                    name: 'About', icon: 'info-circle',
                    page: 'Cardinal/web-components/mobile-demo_about'
                }
            ],
            options: [
                {
                    name: 'Sign out',
                    page: 'Cardinal/web-components/mobile-demo_sign-in'
                }
            ],
            forms: {
                signIn: {
                    email: {
                        label: "Email",
                        name: "email",
                        required: true,
                        placeholder: 'john@privatesky.xyz'
                    },
                    password: {
                        label: 'Password',
                        name: 'password',
                        required: true,
                        value: '0123456789'
                    },
                },
                signUp: {
                    fullName: {
                        label: "Full name",
                        name: "full-name",
                        required: true,
                        placeholder: 'John Doe'
                    },
                    password: {
                        label: 'Password',
                        name: 'password',
                        required: true
                    },
                    repeatPassword: {
                        label: 'Repeat password',
                        name: 'repeat-password',
                        required: true,
                    }
                }
            }
        }
    }

    constructor(element) {
        super(element);
        this.model = this.setModel(this.getModel());
    }
}

export default MobileController;