import ContainerController from '../../cardinal/controllers/base-controllers/ContainerController.js';

class MobileController extends ContainerController {
    getModel() {
        return {
            options: [
                {
                    name: 'About',
                    page: 'about'
                },
                {
                    name: 'Glossary',
                    page: 'glossary'
                }
            ],
            footer: [
                {
                    name: 'Home',
                    icon: 'home',
                    page: 'mobile/home'
                },
                {
                    name: 'Tasks',
                    icon: 'tasks',
                    page: 'mobile/tasks'
                },
                {
                    name: 'Alerts',
                    icon: 'flag',
                    page: 'mobile/alerts'
                },
                {
                    name: 'Settings',
                    icon: 'cog',
                    page: 'mobile/settings'
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