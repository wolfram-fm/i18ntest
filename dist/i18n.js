"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const i18n_js_1 = require("i18n-js");
const tx = new i18n_js_1.I18n({
    en: {
        hello: "hello",
    },
    fr: {
        hello: "bonjour",
    },
});
exports.default = tx;
