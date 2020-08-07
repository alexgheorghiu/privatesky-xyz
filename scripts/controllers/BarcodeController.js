import ContainerController from "../../cardinal/controllers/base-controllers/ContainerController.js";

export default class BarcodeController extends ContainerController{
	constructor(element) {
		super(element);
		this.setModel({
			scannerIsOn:false,
			data:"1234567890",
			scannedData:"",
			gs1datamatrix:"(01)03594455500071(17)220506(21)0100110082245392(10)6006495"
		})

		this.on("toggle-scanner", () => {
			this.model.scannerIsOn = !this.model.scannerIsOn;
		})

	}
}
