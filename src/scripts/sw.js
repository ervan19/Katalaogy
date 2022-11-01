<<<<<<< HEAD
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
=======
>>>>>>> 67b1175 (Configuration sw.js)
import regeneratorRuntime from "regenerator-runtime";
import { registerRoute } from "workbox-routing";
import { precacheAndRoute } from "workbox-precaching";
import { ExpirationPlugin } from "workbox-expiration";
<<<<<<< HEAD
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
=======
import { NetworkFirst } from "workbox-strategies";

precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener("install", () => {
  console.log("Service Worker: Installed");
  self.skipWaiting();
});

registerRoute(
  /^https:\/\/restaurant-api\.dicoding\.dev\/(?:(list|detail))/,
  new NetworkFirst({
    cacheName: "api-cache",
    plugins: [
      // Don't cache more than 100 items, and expire them after 30 days
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 30,
        maxEntries: 100,
>>>>>>> 67b1175 (Configuration sw.js)
      }),
    ],
  })
);
