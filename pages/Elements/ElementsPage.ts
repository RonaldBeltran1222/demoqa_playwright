import { Page, expect } from '@playwright/test';

export class ElementsPage {
    readonly page: Page;
    readonly textBoxOption;
    readonly checkBoxOption;
    readonly radioButtonOption;
    readonly webTablesOption;
    readonly buttonsOption;
    readonly linksOption;
    readonly brokenLinksOption;
    readonly uploadDownloadOption;
    readonly dynamicPropertiesOption;

    constructor(page: Page) {
        this.page = page;
        this.textBoxOption = page.locator('span', { hasText: 'Text Box' });
        this.checkBoxOption = page.locator('span', { hasText: 'Check Box' });
        this.radioButtonOption = page.locator('span', { hasText: 'Radio Button' });
        this.webTablesOption = page.locator('span', { hasText: 'Web Tables' });
        this.buttonsOption = page.locator('span', { hasText: 'Buttons' });
        this.linksOption = page.locator('span', { hasText: 'Links' });
        this.brokenLinksOption = page.locator('span', { hasText: 'Broken Links - Images' });
        this.uploadDownloadOption = page.locator('span', { hasText: 'Upload and Download' });
        this.dynamicPropertiesOption = page.locator('span', { hasText: 'Dynamic Properties' });
    }

    async goToTextBox() {
        await expect(this.textBoxOption).toBeVisible();
        await this.textBoxOption.click();
    }

    async goToCheckBox() {
        await expect(this.checkBoxOption).toBeVisible();
        await this.checkBoxOption.click();
    }

}
