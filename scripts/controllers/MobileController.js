import ContainerController from '../../cardinal/controllers/base-controllers/ContainerController.js';

class MobileController extends ContainerController {
    getModel() {
        return {
            options: {
                home: [
                    {
                        name: 'For developers',
                        page: 'Cardinal/web-components/devs'
                    },
                    {
                        name: 'About',
                        page: 'about'
                    }
                ]
            },
            footer: [
                {
                    name: 'Home',
                    icon: 'home',
                    page: 'Cardinal/web-components/mobile'
                },
                {
                    name: 'Tasks',
                    icon: 'tasks',
                    page: 'Cardinal/web-components/tasks'
                },
                {
                    name: 'Alerts',
                    icon: 'flag',
                    page: 'alerts'
                },
                {
                    name: 'Settings',
                    icon: 'cog',
                    page: 'settings'
                }
            ]
        }
    }

    constructor(element) {
        super(element);
        this.model = this.setModel(this.getModel());
    }
}

export default MobileController;