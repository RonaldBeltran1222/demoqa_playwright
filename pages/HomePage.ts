import { Page, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly elementsCard;

    constructor(page: Page) {
        this.page = page;
        this.elementsCard = page.locator('h5', { hasText: 'Elements' });
    }

    async goto() {
        await this.page.goto('https://demoqa.com/');
    }

    async clickElementsCard() {
        await expect(this.elementsCard).toBeVisible();
        await this.elementsCard.click();
    }
}
