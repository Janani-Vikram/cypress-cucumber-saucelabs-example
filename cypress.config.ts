import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
import fs from "fs-extra";
import path from "path";
import * as cypressLog from "cypress-log-to-output";

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  //environment variables
  const pathToConfigFile = path.resolve(
    `cypress/config-files/${config.env.config || "production"}.json`
  );

  const mergedConfig = {
    ...config,
    ...(await fs.readJson(pathToConfigFile)),
  };
  const esbuildPlugin: any = createEsbuildPlugin(mergedConfig);
  //cucumber
  on(
    "file:preprocessor",
    createBundler({
      plugins: [esbuildPlugin],
    })
  );

  await addCucumberPreprocessorPlugin(on, mergedConfig);

  //console output to terminal
  cypressLog.install(on, (type, event) => {
    return event.level === "error" || event.type === "error";
  });
  return mergedConfig;
}

export default defineConfig({
  e2e: {
    baseUrl: "https://example.cypress.io/commands",
    specPattern: "**/*.feature",
    setupNodeEvents,
    testIsolation: false,
  },
});