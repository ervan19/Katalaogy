/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
import regeneratorRuntime from "regenerator-runtime";
import { registerRoute } from "workbox-routing";
import { precacheAndRoute } from "workbox-precaching";
import { ExpirationPlugin } from "workbox-expiration";
import { CacheFirst, NetworkFirst } from "workbox-strategies";
import { skipWaiting, clientsClaim, setCacheNameDetails } from "workbox-core";

skipWaiting();
clientsClaim();

setCacheNameDetails({
  prefix: "comfy-resto",
  precache: "precache",
});

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  /^https:\/\/restaurant-api\.dicoding\.dev\//,
  new NetworkFirst({
    cacheName: "restaurant-api",
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
    ],
  })
);

registerRoute(
  /\.(?:png|jpx|css|svg)$/,
  new CacheFirst({
    cacheName: "comfy-resto-images",
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 30 * 24 * 60 * 60,
        maxEntries: 30,
      }),
    ],
  })
);
