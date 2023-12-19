/**
 * This file was automatically generated by Strapi.
 * Any modifications made will be discarded.
 */
import i18N from "@strapi/plugin-i18n/strapi-admin";
import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin";
import webtools from "../../src/plugins/webtools/strapi-admin";
import webtoolsAddonSitemap from "../../src/plugins/webtools-addon-sitemap/strapi-admin";
import webtoolsAddonRedirects from "../../src/plugins/webtools-addon-redirects/strapi-admin";
import webtoolsAddonMenus from "../../src/plugins/webtools-addon-menus/strapi-admin";
import { renderAdmin } from "@strapi/strapi/admin";

renderAdmin(document.getElementById("strapi"), {
  plugins: {
    i18n: i18N,
    "users-permissions": usersPermissions,
    webtools: webtools,
    "webtools-addon-sitemap": webtoolsAddonSitemap,
    "webtools-addon-redirects": webtoolsAddonRedirects,
    "webtools-addon-menus": webtoolsAddonMenus,
  },
});
