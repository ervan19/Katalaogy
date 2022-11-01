import regeneratorRuntime from "regenerator-runtime";
import { registerRoute } from "workbox-routing";
import { precacheAndRoute } from "workbox-precaching";
import { ExpirationPlugin } from "workbox-expiration";
import {  NetworkFirst } from "workbox-strategies";


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
      }),
    ],
  })
);
