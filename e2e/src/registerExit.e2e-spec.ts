import { ExitPage } from './registerExit.po';

describe('Parking app exit ', () => {
    let exitPage: ExitPage;
    const licensePlate: string = "URG-585";
   // const licensePlateMotorcycle: string = "URG-586";
    const costo="1000";

    beforeEach(async () => {
        exitPage = new ExitPage();
        await exitPage.navigateTo();
    })

    it('should should register exit car', async () => {

        // Arrange
        const expectedMessage = "se registro la salida del vehiculo: "+licensePlate+", con un costo de :"+costo;

        await exitPage.clickBtnRegisterButton(licensePlate);
        await exitPage.waitUntilToastMessageIsPresent();

        // Act
        const toastContent = await exitPage.getToastMessageText()

        // Assert
        expect(toastContent.trim()).toEqual(expectedMessage);

    })
})
