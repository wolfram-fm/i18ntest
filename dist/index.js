"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const i18n_1 = __importDefault(require("./i18n"));
async function sayHello(locale) {
    return await i18n_1.default.withLocale(locale, () => i18n_1.default.t("hello"));
}
sayHello("en");
sayHello("fr");
