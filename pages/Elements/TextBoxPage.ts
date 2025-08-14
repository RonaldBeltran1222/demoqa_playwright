import { Page, expect } from '@playwright/test';

export class TextBoxPage {
    readonly page: Page;
    readonly fullNameInput;
    readonly emailInput;
    readonly currentAddressInput;
    readonly permanentAddressInput;
    readonly submitButton;
    readonly outputSection;

    constructor(page: Page) {
        this.page = page;
        this.fullNameInput = page.locator('#userName');
        this.emailInput = page.locator('#userEmail');
        this.currentAddressInput = page.locator('#currentAddress');
        this.permanentAddressInput = page.locator('#permanentAddress');
        this.submitButton = page.locator('#submit');
        this.outputSection = page.locator('#output');
    }

    async fillForm(fullName: string, email: string, currentAddress: string, permanentAddress: string) {
        await this.fullNameInput.fill(fullName);
        await this.emailInput.fill(email);
        await this.currentAddressInput.fill(currentAddress);
        await this.permanentAddressInput.fill(permanentAddress);
    }

    async submitForm() {
        await this.submitButton.click();
    }

    async verifyOutput(fullName: string, email: string, currentAddress: string, permanentAddress: string) {
        await expect(this.outputSection).toBeVisible();
        await expect(this.outputSection.locator('#name')).toContainText(fullName);
        await expect(this.outputSection.locator('#email')).toContainText(email);
        await expect(this.outputSection.locator('p#currentAddress')).toContainText(currentAddress);
        await expect(this.outputSection.locator('p#permanentAddress')).toContainText(permanentAddress);
    }
}
