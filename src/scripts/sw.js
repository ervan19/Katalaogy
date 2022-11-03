import {registerRoute} from "workbox-routing";
import {precacheAndRoute} from "workbox-precaching";
import {ExpirationPlugin} from "workbox-expiration";
import {CacheableResponsePlugin} from "workbox-cacheable-response";
import {CacheFirst, NetworkFirst} from "workbox-strategies";
import {skipWaiting, clientsClaim, setCacheNameDetails} from "workbox-core";

skipWaiting();
clientsClaim();

setCacheNameDetails({
    prefix: "restaurant",
    precache: "precache",
});

precacheAndRoute(
    [
        ...self.__WB_MANIFEST,
        {
            url: "https://kit.fontawesome.com/dc1bf0123a.js",
            revision: 1,
        },
    ],
    {
        ignoreURLParametersMatching: [/.*/],
    },
);

registerRoute(
    /^https:\/\/restaurant-api\.dicoding\.dev\/(?:(detail))/,
    new NetworkFirst({
        cacheName: "restaurant-api-dicoding",
        plugins: [
            new ExpirationPlugin({
                maxAgeSeconds: 30 * 24 * 60 * 60,
            }),
        ],
    }),
);

registerRoute(
    /.*(?:googleapis|gstatic)\.com/,
    new CacheFirst({
        cacheName: "google-fonts",
        plugins: [
            new CacheableResponsePlugin({
                statuses: [0, 200],
            }),
            new ExpirationPlugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30,
            }),
        ],
    }),
);

registerRoute(
    /\.(?:png|jpx|css|svg)$/,
    new CacheFirst({
        cacheName: "restaurant-images",
        plugins: [
            new ExpirationPlugin({
                maxAgeSeconds: 30 * 24 * 60 * 60,
                maxEntries: 30,
            }),
        ],
    }),
);
