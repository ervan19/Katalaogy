import { precacheAndRoute } from "workbox-precaching";
import workbox from "workbox-webpack-plugin";

precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener("install", () => {
  console.log("Service Worker: Installed");
  self.skipWaiting();
});

workbox.routing.registerRoute(
  /(\/|\.html)$/,
  new workbox.strategies.NetworkFirst()
);
