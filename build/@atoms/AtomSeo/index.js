'use strict';

var jsxRuntime = require('@emotion/react/jsx-runtime');
var Head = require('next/head');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Head__default = /*#__PURE__*/_interopDefaultLegacy(Head);

var Seo = function (_a) {
    var title = _a.title, page = _a.page, description = _a.description, website = _a.website, name = _a.name, sameAs = _a.sameAs, alternateName = _a.alternateName, keywords = _a.keywords, icon = _a.icon;
    return (jsxRuntime.jsxs(Head__default["default"], { children: [jsxRuntime.jsxs("title", { children: [title, " | ", page] }), jsxRuntime.jsx("link", { rel: "icon", type: "image/png", href: icon || "/favicon.png" }), jsxRuntime.jsx("meta", { httpEquiv: "Content-Type", content: "text/html;charset=UTF-8" }), jsxRuntime.jsx("meta", { httpEquiv: "X-UA-Compatible", content: "IE=7" }), jsxRuntime.jsx("meta", { httpEquiv: "X-UA-Compatible", content: "ie=edge" }), jsxRuntime.jsx("meta", { name: "canonical", content: website }), jsxRuntime.jsx("meta", { name: "keywords", content: keywords ? keywords.join(", ") : "nextjs, typescript" }), jsxRuntime.jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }), jsxRuntime.jsx("link", { rel: "manifest", href: "/manifest.json" }), jsxRuntime.jsx("meta", { name: "theme-color", content: "#292929" }), jsxRuntime.jsx("link", { rel: "apple-touch-icon", href: "/logo-96x96.png" }), jsxRuntime.jsx("meta", { name: "apple-mobile-web-app-status-bar", content: "#90cdf4" }), jsxRuntime.jsx("meta", { name: "description", content: description }), jsxRuntime.jsx("meta", { name: "author", content: "Ixulabs" }), jsxRuntime.jsx("meta", { name: "copyright", content: "Ixulabs" }), jsxRuntime.jsx("meta", { name: "title", content: title }), jsxRuntime.jsx("meta", { name: "description", content: description }), jsxRuntime.jsx("meta", { name: "googlebot", content: "index,follow" }), jsxRuntime.jsx("meta", { property: "og:type", content: "website" }), jsxRuntime.jsx("meta", { property: "og:url", content: website }), jsxRuntime.jsx("meta", { property: "og:title", content: title }), jsxRuntime.jsx("meta", { property: "og:description", content: description }), jsxRuntime.jsx("meta", { property: "og:image", content: "/preview.png" }), jsxRuntime.jsx("meta", { name: "twitter:site", content: "@StacklyCode" }), jsxRuntime.jsx("meta", { name: "twitter:creator", content: "@StacklyCode" }), jsxRuntime.jsx("meta", { name: "twitter:card", content: "summary_large_image" }), jsxRuntime.jsx("meta", { name: "twitter:url", content: website }), jsxRuntime.jsx("meta", { name: "twitter:title", content: title }), jsxRuntime.jsx("meta", { name: "twitter:description", content: description }), jsxRuntime.jsx("meta", { name: "twitter:image", content: "/preview.png" }), jsxRuntime.jsx("link", { rel: "manifest", href: "manifest.webmanifest" }), jsxRuntime.jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
                    __html: JSON.stringify({
                        '@context': "https://schema.org",
                        '@type': "Organization",
                        name: name,
                        alternateName: alternateName,
                        url: website,
                        logo: "".concat(website, "logo-512x512.png"),
                        contactPoint: {
                            '@type': "ContactPoint",
                            telephone: "",
                            contactType: "customer service",
                            areaServed: ["AR", "CO", "MX", "UY", "SV", "DO"],
                            availableLanguage: ["en", "es"],
                        },
                        sameAs: sameAs,
                    }),
                } })] }));
};

module.exports = Seo;
//# sourceMappingURL=index.js.map
