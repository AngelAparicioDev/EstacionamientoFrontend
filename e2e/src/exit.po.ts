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
}