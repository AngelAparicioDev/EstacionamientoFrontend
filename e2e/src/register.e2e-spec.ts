import  { RegisterPage } from './register.po';

describe('Parking app register ', () => {
    let registerPage: RegisterPage;
    const licensePlate : string = "URG-585";
    const vehicleType : number = 1;

    beforeEach(async () => {
        registerPage = new RegisterPage();
        await registerPage.navigateTo();
      })
    
      it('should should register', async () => {

        // Arrange
        const expectedMessage = "se registro la entrada del vehiculo: " + licensePlate + ", con exito";
    
        await registerPage.setTextLicencePlate(licensePlate);
        await registerPage.clickVehicleTypeSelect();
        await registerPage.setVehicleTypeOptionSelect(vehicleType);
        await registerPage.clickBtnRegisterButton();
        await registerPage.waitUnilToastMessageIsPresent();
    
        // Act
        const toastContent = await registerPage.getToastMessageText()
    
        // Assert
        expect(toastContent.trim()).toEqual(expectedMessage);
    
      }) 
})