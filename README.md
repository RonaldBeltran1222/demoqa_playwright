# Proyecto DemoQA Automatización

Este proyecto contiene pruebas automatizadas para la web [DemoQA](https://demoqa.com/) utilizando [Playwright](https://playwright.dev/) y reportes con [Allure](https://docs.qameta.io/allure/).

## Características

- Automatización de pruebas UI con Playwright.
- Patrón Page Object para mejor mantenibilidad.
- Reportes detallados con Allure.
- Captura de pantallas en cada paso relevante.
- Ejecución selectiva de tests.

## Estructura

```
├── tests/Elements/         # Pruebas automatizadas por sección
├── pages/                  # Page Objects
├── utils/                  # Utilidades (ej: ScreenshotHelper)
├── allure-results/         # Resultados de pruebas para Allure
├── allure-report/          # Reporte HTML generado por Allure
├── package.json            # Dependencias y scripts
```

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/proyecto-demoqa.git
   cd proyecto-demoqa
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

## Ejecución de pruebas

Ejecuta todas las pruebas:

```bash
npx playwright test
```

Ejecuta solo una prueba específica:

```bash
npx playwright test tests/Elements/textBox.spec.ts
```

## Generar reporte Allure

1. Ejecuta las pruebas con el reporter de Allure:

   ```bash
   npx playwright test --reporter=allure-playwright
   ```

2. Genera el reporte HTML:

   ```bash
   npx allure generate allure-results --clean -o allure-report
   ```

3. Abre el reporte:
   ```bash
   npx allure open allure-report
   ```

## Requisitos

- Node.js >= 16
- Navegadores soportados por Playwright

## Créditos

Desarrollado por [RONALD_BELTRAN]
