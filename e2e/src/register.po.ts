import { browser, element, by, ExpectedConditions, ProtractorExpectedConditions, ElementFinder, $ } from 'protractor';


export class RegisterPage {
    until: ProtractorExpectedConditions;

    constructor() {
        this.until = ExpectedConditions;
    }


    // navegando
    navigateTo(url = "Registrar"): Promise<void> {
        return browser.get(`${browser.baseUrl}${url}`) as Promise<void>
    }

    // devolver elementos del DOM

    getVehicleTypeSelect(): ElementFinder {
        return $('#vehicleType');
    }
    getLicencePLateImput(): ElementFinder {
        return $('#licencePlate');
    }
    getToastMessage(): ElementFinder {
        return element(by.className("toast-message"));
    }
    getBtnRegisterButton(): ElementFinder {
        return $('#btnRegister');
    }
    getDisplacementImput(): ElementFinder {
        return $('#displacement');
    }

    // devolver contenido de elementos del DOM

    async getToastMessageText(): Promise<string> {
        return await this.getToastMessage().getText();
    }

    // modificar elementos del DOM

    async setTextLicencePlate(text: string): Promise<void> {
        return await this.getLicencePLateImput().sendKeys(text);
    }

    async setVehicleTypeOptionSelect(optionI: number): Promise<void> {
        // Tick to wait until options apear
        await browser.sleep(500);
        // End tick
        const options: ElementFinder[] = await this.getVehicleTypeSelect().all(by.tagName('option'));
        options[optionI].click();
    }

    async setTextDisplacement(text: string): Promise<void> {
        return await this.getDisplacementImput().sendKeys(text);
    }

    // click en elementos

    async clickBtnRegisterButton(): Promise<void> {
        await this.getBtnRegisterButton().click();
    }

    async clickVehicleTypeSelect(): Promise<void> {
        await this.getVehicleTypeSelect().click();
    }

    // metodos en espera de accion

    async waitUntilToastMessageIsPresent(): Promise<void> {
        return await this.waitUntilIsPresent(this.getToastMessage());
    }

    async waitUntilDisplacementInput(): Promise<void> {
        return await this.waitUntilIsPresent(this.getDisplacementImput());
    }

    async waitUntilDisplacementInputEnabled(): Promise<void> {
        return await this.waitUntilIsEnabled(this.getDisplacementImput());
    }

    async waitUntilIsPresent(element: ElementFinder): Promise<void> {
        const id = await element.getId()
        return await browser.wait(
            this.until.presenceOf(element),
            5000,
            `Element ${id} taking too long to appear in the DOM`
        );
    }

    async waitUntilIsEnabled(element: ElementFinder): Promise<void> {
        const id = await element.getId()
        return await browser.wait(
            this.until.elementToBeClickable(element),
            5000,
            `Element ${id} taking too long to appear in the DOM`
        );
    }

    // metodos en espera de accion al no aparecer

    async waitUnilToastMessageIsNotPresent(): Promise<void> {
        return await this.waitUntilIsNotPresent(this.getToastMessage());
    }

    async waitUntilIsNotPresent(element: ElementFinder): Promise<void> {
        const id = await element.getId()
        return await browser.wait(
            this.until.stalenessOf(element),
            5000,
            `Element ${id} taking too long to disappear in the DOM`
        );

    }



}