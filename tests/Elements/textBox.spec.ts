import { test } from '@playwright/test';
import { step } from 'allure-js-commons';
import { HomePage } from '../../pages/HomePage';
import { ElementsPage } from '../../pages/Elements/ElementsPage';
import { TextBoxPage } from '../../pages/Elements/TextBoxPage';
import { ScreenshotHelper } from '../../utils/ScreenshotHelper';

test('Flujo completo Text Box', async ({ page }) => {
  const homePage = new HomePage(page);
  const elementsPage = new ElementsPage(page);
  const textBoxPage = new TextBoxPage(page);

  await step('Abrir la página principal', async () => {
    await homePage.goto();
    await ScreenshotHelper.take(page, 'pagina_principal');
  });

  await step('Hacer clic en la tarjeta Elements', async () => {
    await homePage.clickElementsCard();
    await ScreenshotHelper.take(page, 'Elements');
  });

  await step('Navegar a la sección Text Box', async () => {
    await elementsPage.goToTextBox();
    await ScreenshotHelper.take(page, 'TextBox');
  });

  await step('Llenar el formulario con datos de prueba', async () => {
    await textBoxPage.fillForm(
      'Ronald QA',
      'ronald@example.com',
      'Calle Falsa 123',
      'Avenida Siempre Viva 742'
    );
    await ScreenshotHelper.take(page, 'llenado_datos');
  });

  await step('Enviar el formulario', async () => {
    await textBoxPage.submitForm();
    await ScreenshotHelper.take(page, 'envio_formulario');
  });

  await step('Verificar que el resultado sea correcto', async () => {
    await textBoxPage.verifyOutput(
      'Ronald QA',
      'ronald@example.com',
      'Calle Falsa 123',
      'Avenida Siempre Viva 742'
    );
    await ScreenshotHelper.take(page, 'verificacion');
  });
});