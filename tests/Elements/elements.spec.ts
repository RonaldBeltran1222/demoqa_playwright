import { test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { ElementsPage } from '../../pages/Elements/ElementsPage';

test.describe('Automatización sección Elements', () => {
    test('Abrir Elements y acceder a Text Box', async ({ page }) => {
        const homePage = new HomePage(page);
        const elementsPage = new ElementsPage(page);

        await homePage.goto();
        await homePage.clickElementsCard();
        await elementsPage.goToTextBox();
    });

    test('Abrir Elements y acceder a Check Box', async ({ page }) => {
        const homePage = new HomePage(page);
        const elementsPage = new ElementsPage(page);

        await homePage.goto();
        await homePage.clickElementsCard();
        await elementsPage.goToCheckBox();
    });
});
