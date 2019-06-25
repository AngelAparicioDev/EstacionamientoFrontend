import  { RegisterPage } from './register.po';

describe('Parking app register ', () => {
    let registerPage: RegisterPage;
    const licensePlate : string = "URG-585";
    const licensePlateMotorcycle  : string = "URG-586";
    const vehicleTypeCar : number = 1;
    const vehicleTypeMotorcycle : number = 2;
    const displacement :string = "600";

    beforeEach(async () => {
        registerPage = new RegisterPage();
        await registerPage.navigateTo();
      })
    
      it('should should register car', async () => {

        // Arrange
        const expectedMessage = "se registro la entrada del vehiculo: " + licensePlate + ", con exito";
    
        await registerPage.setTextLicencePlate(licensePlate);
        await registerPage.clickVehicleTypeSelect();
        await registerPage.setVehicleTypeOptionSelect(vehicleTypeCar);
        await registerPage.clickBtnRegisterButton();
        await registerPage.waitUntilToastMessageIsPresent();
    
        // Act
        const toastContent = await registerPage.getToastMessageText()
    
        // Assert
        expect(toastContent.trim()).toEqual(expectedMessage);
    
      }) 


      it('should should  register Motorcycle', async () => {

        // Arrange
        const expectedMessage = "se registro la entrada del vehiculo: " + licensePlateMotorcycle + ", con exito";
    
        await registerPage.setTextLicencePlate(licensePlateMotorcycle);
        await registerPage.clickVehicleTypeSelect();
        await registerPage.setVehicleTypeOptionSelect(vehicleTypeMotorcycle);
        await registerPage.waitUntilDisplacementInput();
        await registerPage.setTextDisplacement(displacement);
        await registerPage.waitUntilDisplacementInputEnabled();
        await registerPage.clickBtnRegisterButton();
        await registerPage.waitUntilToastMessageIsPresent();
    
        // Act
        const toastContent = await registerPage.getToastMessageText()
    
        // Assert
        expect(toastContent.trim()).toEqual(expectedMessage);
    
      }) 

      it('should should vehicle In parking register', async () => {

        // Arrange
        const expectedMessage = "Este vehiculo ya se encuentra en el parqueadero";
    
        await registerPage.setTextLicencePlate(licensePlate);
        await registerPage.clickVehicleTypeSelect();
        await registerPage.setVehicleTypeOptionSelect(vehicleTypeCar);
        await registerPage.clickBtnRegisterButton();
        await registerPage.waitUntilToastMessageIsPresent();
    
        // Act
        const toastContent = await registerPage.getToastMessageText()
    
        // Assert
        expect(toastContent.trim()).toEqual(expectedMessage);
    
      }) 

      it('should should bad register', async () => {

        // Arrange
        const expectedMessage = "Se debe ingresar el tipo";
    
        await registerPage.setTextLicencePlate(licensePlate);
        await registerPage.clickVehicleTypeSelect();
        await registerPage.setVehicleTypeOptionSelect(0);
        await registerPage.clickBtnRegisterButton();
        await registerPage.waitUntilToastMessageIsPresent();
    
        // Act
        const toastContent = await registerPage.getToastMessageText()
    
        // Assert
        expect(toastContent.trim()).toEqual(expectedMessage);
    
      }) 
})