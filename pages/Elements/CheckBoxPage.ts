import { Page } from '@playwright/test';

export class CheckBoxPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Expande el árbol de opciones del Check Box usando el botón Toggle
  async expandTree() {
    await this.page.getByRole('button', { name: 'Toggle' }).click();
  }

  // Selecciona una opción específica del árbol (ejemplo: Desktop)
  async selectOption(optionName: string) {
    await this.page.getByText(optionName).click();
  }

  // Verifica que la opción seleccionada esté marcada
async verifySelection(optionName: string) {
    const items = await this.page.locator('.text-success').allTextContents();
    const found = items.some(text => text.trim().toLowerCase() === optionName.toLowerCase());
    if (!found) {
      throw new Error(`La opción "${optionName}" no fue seleccionada correctamente.`);
    }
  }
}