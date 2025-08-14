import { test } from '@playwright/test';
import { step } from 'allure-js-commons';
import { HomePage } from '../../pages/HomePage';
import { ElementsPage } from '../../pages/Elements/ElementsPage';
import { CheckBoxPage } from '../../pages/Elements/CheckBoxPage';
import { ScreenshotHelper } from '../../utils/ScreenshotHelper';

test('Flujo completo Check Box', async ({ page }) => {
  const homePage = new HomePage(page);
  const elementsPage = new ElementsPage(page);
  const checkBoxPage = new CheckBoxPage(page);

  await step('Abrir la página principal', async () => {
    await homePage.goto();
    await ScreenshotHelper.take(page, 'pagina_principal');
  });

  await step('Hacer clic en la tarjeta Elements', async () => {
    await homePage.clickElementsCard();
    await ScreenshotHelper.take(page, 'Elements');
  });

  await step('Navegar a la sección Check Box', async () => {
    await elementsPage.goToCheckBox();
    await ScreenshotHelper.take(page, 'CheckBox');
  });

  await step('Expandir el árbol de opciones', async () => {
    await checkBoxPage.expandTree();
    await ScreenshotHelper.take(page, 'expandir_arbol');
  });

  await step('Seleccionar una opción', async () => {
    await checkBoxPage.selectOption('Home');
    await ScreenshotHelper.take(page, 'seleccionar_opcion');
  });

  await step('Verificar selección', async () => {
    await checkBoxPage.verifySelection('Home');
    await ScreenshotHelper.take(page, 'verificar_seleccion');
  });
});