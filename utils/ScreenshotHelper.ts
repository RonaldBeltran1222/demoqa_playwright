import { attachment } from 'allure-js-commons';

export class ScreenshotHelper {
  static async take(page, nombre: string) {
    const buffer = await page.screenshot({ fullPage: true });
    attachment(nombre, buffer, 'image/png');
  }
}