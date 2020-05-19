import ContainerController from "../../../cardinal/controllers/base-controllers/ContainerController.js";

export default class AttachmentsController extends ContainerController {
    constructor(element) {
        super(element);
        this.on('closeModal',(e) => {
            console.log("Aici ar venii codul pentru inchis modalul")
        })
    }
}