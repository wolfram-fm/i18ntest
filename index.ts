import tx from "./i18n";

async function sayHello(locale: string) {
  return await tx.withLocale(locale, () => tx.t("hello"));
}

sayHello("en");

sayHello("fr");
