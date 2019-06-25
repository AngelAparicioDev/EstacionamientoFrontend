import { browser, element, by, ExpectedConditions, ProtractorExpectedConditions, ElementFinder, $ } from 'protractor';

export class ExitPage {
    until: ProtractorExpectedConditions;

    constructor() {
        this.until = ExpectedConditions;
    }

    // navegando
    navigateTo(url = "Listar"): Promise<void> {
        return browser.get(`${browser.baseUrl}${url}`) as Promise<void>
    }

    // devolver elementos del DOM

    getToastMessage(): ElementFinder {
        return element(by.className("toast-message"));
    }

    getBtnRegisterButton(licensePlate: string): ElementFinder {
        return $('#btnExit' + licensePlate);
    }

    // devolver contenido de elementos del DOM

    async getToastMessageText(): Promise<string> {
        return await this.getToastMessage().getText();
    }

    // click en elementos

    async clickBtnRegisterButton(licensePlate: string): Promise<void> {
        await this.getBtnRegisterButton(licensePlate).click();
    }

    // metodos en espera de accion

    async waitUntilToastMessageIsPresent(): Promise<void> {
        return await this.waitUntilIsPresent(this.getToastMessage());
    }

    async waitUntilIsPresent(element: ElementFinder): Promise<void> {
        const id = await element.getId()
        return await browser.wait(
            this.until.presenceOf(element),
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