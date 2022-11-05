(()=>{"use strict";var e={895:()=>{try{self["workbox:cacheable-response:6.5.3"]&&_()}catch(e){}},913:()=>{try{self["workbox:core:6.5.3"]&&_()}catch(e){}},550:()=>{try{self["workbox:expiration:6.5.3"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.3"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}}},t={};function s(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,s),r.exports}(()=>{s(913);class e extends Error{constructor(e,t){super(((e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s})(e,t)),this.name=e,this.details=t}}s(80);const t=e=>e&&"object"==typeof e?e:{handle:e};class n{constructor(e,s,n="GET"){this.handler=t(s),this.match=e,this.method=n}setCatchHandler(e){this.catchHandler=t(e)}}class a extends n{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}class r{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const n=s.origin===location.origin,{params:a,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:n,url:s});let i=r&&r.handler;const o=e.method;if(!i&&this._defaultHandlerMap.has(o)&&(i=this._defaultHandlerMap.get(o)),!i)return;let c;try{c=i.handle({url:s,request:e,event:t,params:a})}catch(e){c=Promise.reject(e)}const h=r&&r.catchHandler;return c instanceof Promise&&(this._catchHandler||h)&&(c=c.catch((async n=>{if(h)try{return await h.handle({url:s,request:e,event:t,params:a})}catch(e){e instanceof Error&&(n=e)}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw n}))),c}findMatchingRoute({url:e,sameOrigin:t,request:s,event:n}){const a=this._routes.get(s.method)||[];for(const r of a){let a;const i=r.match({url:e,sameOrigin:t,request:s,event:n});if(i)return a=i,(Array.isArray(a)&&0===a.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(a=void 0),{route:r,params:a}}return{}}setDefaultHandler(e,s="GET"){this._defaultHandlerMap.set(s,t(e))}setCatchHandler(e){this._catchHandler=t(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(t){if(!this._routes.has(t.method))throw new e("unregister-route-but-not-found-with-method",{method:t.method});const s=this._routes.get(t.method).indexOf(t);if(!(s>-1))throw new e("unregister-route-route-not-registered");this._routes.get(t.method).splice(s,1)}}let i;function o(t,s,o){let c;if("string"==typeof t){const e=new URL(t,location.href);c=new n((({url:t})=>t.href===e.href),s,o)}else if(t instanceof RegExp)c=new a(t,s,o);else if("function"==typeof t)c=new n(t,s,o);else{if(!(t instanceof n))throw new e("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});c=t}return(i||(i=new r,i.addFetchListener(),i.addCacheListener()),i).registerRoute(c),c}const c={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},h=e=>[c.prefix,e,c.suffix].filter((e=>e&&e.length>0)).join("-"),l=e=>e||h(c.precache),u=e=>e||h(c.runtime);function d(e,t){const s=t();return e.waitUntil(s),s}function p(t){if(!t)throw new e("add-to-cache-list-unexpected-type",{entry:t});if("string"==typeof t){const e=new URL(t,location.href);return{cacheKey:e.href,url:e.href}}const{revision:s,url:n}=t;if(!n)throw new e("add-to-cache-list-unexpected-type",{entry:t});if(!s){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const a=new URL(n,location.href),r=new URL(n,location.href);return a.searchParams.set("__WB_REVISION__",s),{cacheKey:a.href,url:r.href}}s(977);class f{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class g{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let m;function w(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class y{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const _=new Set;function b(e){return"string"==typeof e?new Request(e):e}s(873);class v{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new y,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(t){const{event:s}=this;let n=b(t);if("navigate"===n.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const a=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))n=await e({request:n.clone(),event:s})}catch(t){if(t instanceof Error)throw new e("plugin-error-request-will-fetch",{thrownErrorMessage:t.message})}const r=n.clone();try{let e;e=await fetch(n,"navigate"===n.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:r,response:e});return e}catch(e){throw a&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:a.clone(),request:r.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=b(e);let s;const{cacheName:n,matchOptions:a}=this._strategy,r=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},a),{cacheName:n});s=await caches.match(r,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:n,matchOptions:a,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(t,s){const n=b(t);await(0,new Promise((e=>setTimeout(e,0))));const a=await this.getCacheKey(n,"write");if(!s)throw new e("cache-put-with-no-response",{url:(r=a.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const i=await this._ensureResponseSafeToCache(s);if(!i)return!1;const{cacheName:o,matchOptions:c}=this._strategy,h=await self.caches.open(o),l=this.hasCallback("cacheDidUpdate"),u=l?await async function(e,t,s,n){const a=w(t.url,s);if(t.url===a)return e.match(t,n);const r=Object.assign(Object.assign({},n),{ignoreSearch:!0}),i=await e.keys(t,r);for(const t of i)if(a===w(t.url,s))return e.match(t,n)}(h,a.clone(),["__WB_REVISION__"],c):null;try{await h.put(a,l?i.clone():i)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of _)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:u,newResponse:i.clone(),request:a,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let n=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))n=b(await e({mode:t,request:n,event:this.event,params:this.params}));this._cacheKeys[s]=n}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),n=n=>{const a=Object.assign(Object.assign({},n),{state:s});return t[e](a)};yield n}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class R{constructor(e={}){this.cacheName=u(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,n="params"in e?e.params:void 0,a=new v(this,{event:t,request:s,params:n}),r=this._getResponse(a,s,t);return[r,this._awaitComplete(r,a,s,t)]}async _getResponse(t,s,n){let a;await t.runCallbacks("handlerWillStart",{event:n,request:s});try{if(a=await this._handle(s,t),!a||"error"===a.type)throw new e("no-response",{url:s.url})}catch(e){if(e instanceof Error)for(const r of t.iterateCallbacks("handlerDidError"))if(a=await r({error:e,event:n,request:s}),a)break;if(!a)throw e}for(const e of t.iterateCallbacks("handlerWillRespond"))a=await e({event:n,request:s,response:a});return a}async _awaitComplete(e,t,s,n){let a,r;try{a=await e}catch(r){}try{await t.runCallbacks("handlerDidRespond",{event:n,request:s,response:a}),await t.doneWaiting()}catch(e){e instanceof Error&&(r=e)}if(await t.runCallbacks("handlerDidComplete",{event:n,request:s,response:a,error:r}),t.destroy(),r)throw r}}class x extends R{constructor(e={}){e.cacheName=l(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(x.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){return await t.cacheMatch(e)||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(t,s){let n;const a=s.params||{};if(!this._fallbackToNetwork)throw new e("missing-precache-entry",{cacheName:this.cacheName,url:t.url});{const e=a.integrity,r=t.integrity,i=!r||r===e;n=await s.fetch(new Request(t,{integrity:"no-cors"!==t.mode?r||e:void 0})),e&&i&&"no-cors"!==t.mode&&(this._useDefaultCacheabilityPluginIfNeeded(),await s.cachePut(t,n.clone()))}return n}async _handleInstall(t,s){this._useDefaultCacheabilityPluginIfNeeded();const n=await s.fetch(t);if(!await s.cachePut(t,n.clone()))throw new e("bad-precaching-response",{url:t.url,status:n.status});return n}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,n]of this.plugins.entries())n!==x.copyRedirectedCacheableResponsesPlugin&&(n===x.defaultPrecacheCacheabilityPlugin&&(e=s),n.cacheWillUpdate&&t++);0===t?this.plugins.push(x.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}x.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},x.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:t})=>t.redirected?await async function(t,s){let n=null;if(t.url&&(n=new URL(t.url).origin),n!==self.location.origin)throw new e("cross-origin-copy-response",{origin:n});const a=t.clone(),r={headers:new Headers(a.headers),status:a.status,statusText:a.statusText},i=s?s(r):r,o=function(){if(void 0===m){const e=new Response("");if("body"in e)try{new Response(e.body),m=!0}catch(e){m=!1}m=!1}return m}()?a.body:await a.blob();return new Response(o,i)}(t):t};class C{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new x({cacheName:l(e),plugins:[...t,new g({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(t){const s=[];for(const n of t){"string"==typeof n?s.push(n):n&&void 0===n.revision&&s.push(n.url);const{cacheKey:t,url:a}=p(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==t)throw new e("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:t});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(t)&&this._cacheKeysToIntegrities.get(t)!==n.integrity)throw new e("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(t,n.integrity)}if(this._urlsToCacheKeys.set(a,t),this._urlsToCacheModes.set(a,r),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return d(e,(async()=>{const t=new f;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const n=this._cacheKeysToIntegrities.get(s),a=this._urlsToCacheModes.get(t),r=new Request(t,{integrity:n,cache:a,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:e}))}const{updatedURLs:s,notUpdatedURLs:n}=t;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(e){return d(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),n=[];for(const a of t)s.has(a.url)||(await e.delete(a),n.push(a.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s)return(await self.caches.open(this.strategy.cacheName)).match(s)}createHandlerBoundToURL(t){const s=this.getCacheKeyForURL(t);if(!s)throw new e("non-precached-url",{url:t});return e=>(e.request=new Request(t),e.params=Object.assign({cacheKey:s},e.params),this.strategy.handle(e))}}let E;const L=()=>(E||(E=new C),E);class q extends n{constructor(e,t){super((({request:s})=>{const n=e.getURLsToCacheKeys();for(const a of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:a}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(r,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(n){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(a){const e=a({url:r});for(const t of e)yield t.href}}(s.url,t)){const t=n.get(a);if(t)return{cacheKey:t,integrity:e.getIntegrityForCacheKey(t)}}}),e.strategy)}}function k(e){e.then((()=>{}))}let U,T;const D=new WeakMap,N=new WeakMap,I=new WeakMap,S=new WeakMap,P=new WeakMap;let A={get(e,t,s){if(e instanceof IDBTransaction){if("done"===t)return N.get(e);if("objectStoreNames"===t)return e.objectStoreNames||I.get(e);if("store"===t)return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return K(e[t])},set:(e,t,s)=>(e[t]=s,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function M(e){return"function"==typeof e?(t=e)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(T||(T=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(O(this),e),K(D.get(this))}:function(...e){return K(t.apply(O(this),e))}:function(e,...s){const n=t.call(O(this),e,...s);return I.set(n,e.sort?e.sort():[e]),K(n)}:(e instanceof IDBTransaction&&function(e){if(N.has(e))return;const t=new Promise(((t,s)=>{const n=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",r),e.removeEventListener("abort",r)},a=()=>{t(),n()},r=()=>{s(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",a),e.addEventListener("error",r),e.addEventListener("abort",r)}));N.set(e,t)}(e),s=e,(U||(U=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>s instanceof e))?new Proxy(e,A):e);var t,s}function K(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,s)=>{const n=()=>{e.removeEventListener("success",a),e.removeEventListener("error",r)},a=()=>{t(K(e.result)),n()},r=()=>{s(e.error),n()};e.addEventListener("success",a),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&D.set(t,e)})).catch((()=>{})),P.set(t,e),t}(e);if(S.has(e))return S.get(e);const t=M(e);return t!==e&&(S.set(e,t),P.set(t,e)),t}const O=e=>P.get(e),j=["get","getKey","getAll","getAllKeys","count"],W=["put","add","delete","clear"],B=new Map;function F(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(B.get(t))return B.get(t);const s=t.replace(/FromIndex$/,""),n=t!==s,a=W.includes(s);if(!(s in(n?IDBIndex:IDBObjectStore).prototype)||!a&&!j.includes(s))return;const r=async function(e,...t){const r=this.transaction(e,a?"readwrite":"readonly");let i=r.store;return n&&(i=i.index(t.shift())),(await Promise.all([i[s](...t),a&&r.done]))[0]};return B.set(t,r),r}var H;H=A,A={...H,get:(e,t,s)=>F(e,t)||H.get(e,t,s),has:(e,t)=>!!F(e,t)||H.has(e,t)},s(550);const V="cache-entries",$=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class G{constructor(e){this._db=null,this._cacheName=e}_upgradeDb(e){const t=e.createObjectStore(V,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1})}_upgradeDbAndDeleteOldDbs(e){this._upgradeDb(e),this._cacheName&&function(e,{blocked:t}={}){const s=indexedDB.deleteDatabase(e);t&&s.addEventListener("blocked",(e=>t(e.oldVersion,e))),K(s).then((()=>{}))}(this._cacheName)}async setTimestamp(e,t){const s={url:e=$(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)},n=(await this.getDb()).transaction(V,"readwrite",{durability:"relaxed"});await n.store.put(s),await n.done}async getTimestamp(e){const t=await this.getDb(),s=await t.get(V,this._getId(e));return null==s?void 0:s.timestamp}async expireEntries(e,t){const s=await this.getDb();let n=await s.transaction(V).store.index("timestamp").openCursor(null,"prev");const a=[];let r=0;for(;n;){const s=n.value;s.cacheName===this._cacheName&&(e&&s.timestamp<e||t&&r>=t?a.push(n.value):r++),n=await n.continue()}const i=[];for(const e of a)await s.delete(V,e.id),i.push(e.url);return i}_getId(e){return this._cacheName+"|"+$(e)}async getDb(){return this._db||(this._db=await function(e,t,{blocked:s,upgrade:n,blocking:a,terminated:r}={}){const i=indexedDB.open(e,t),o=K(i);return n&&i.addEventListener("upgradeneeded",(e=>{n(K(i.result),e.oldVersion,e.newVersion,K(i.transaction),e)})),s&&i.addEventListener("blocked",(e=>s(e.oldVersion,e.newVersion,e))),o.then((e=>{r&&e.addEventListener("close",(()=>r())),a&&e.addEventListener("versionchange",(e=>a(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),o}("workbox-expiration",1,{upgrade:this._upgradeDbAndDeleteOldDbs.bind(this)})),this._db}}class Q{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new G(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),s=await self.caches.open(this._cacheName);for(const e of t)await s.delete(e,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,k(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){const t=await this._timestampModel.getTimestamp(e),s=Date.now()-1e3*this._maxAgeSeconds;return void 0===t||t<s}return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}class J{constructor(e={}){var t;this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:n})=>{if(!n)return null;const a=this._isResponseDateFresh(n),r=this._getCacheExpiration(s);k(r.expireEntries());const i=r.updateTimestamp(t.url);if(e)try{e.waitUntil(i)}catch(e){}return a?n:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this._getCacheExpiration(e);await s.updateTimestamp(t.url),await s.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&(t=()=>this.deleteCacheAndMetadata(),_.add(t))}_getCacheExpiration(t){if(t===u())throw new e("expire-custom-caches-only");let s=this._cacheExpirations.get(t);return s||(s=new Q(t,this._config),this._cacheExpirations.set(t,s)),s}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);return null===t||t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}s(895);class z{constructor(e={}){this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0;return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some((t=>e.headers.get(t)===this._headers[t]))),t}}class X extends R{async _handle(t,s){let n,a=await s.cacheMatch(t);if(a);else try{a=await s.fetchAndCachePut(t)}catch(e){e instanceof Error&&(n=e)}if(!a)throw new e("no-response",{url:t.url,error:n});return a}}const Y={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,n=new Array(t);s<t;s++)n[s]=e[s];return n}var ee,te,se;self.skipWaiting(),self.addEventListener("activate",(()=>self.clients.claim())),se={prefix:"restaurant",precache:"precache"},(e=>{for(const t of Object.keys(c))e(t)})((e=>{"string"==typeof se[e]&&(c[e]=se[e])})),ee={ignoreURLParametersMatching:[/.*/]},function(e){L().precache(e)}([].concat(function(e){if(Array.isArray(e))return Z(e)}(te=[{'revision':null,'url':'5d982326781d6f8ea98b.jpg'},{'revision':'2d63db45916a0a87998e76b445654d6a','url':'app.bundle.js'},{'revision':'4e0e34f265fae8f33b01b27ae29d9d6f','url':'app.bundle.js.LICENSE.txt'},{'revision':'36448d83fca82f6ce910fa5409abc026','url':'app.webmanifest'},{'revision':'a4d31093adf8c16f34b6d2695c5d2ca7','url':'assets/android-chrome-144x144.png'},{'revision':'64c947062c757e4f334b1791a1221503','url':'assets/android-chrome-192x192.png'},{'revision':'9979fb20a79f063b4ce6bb7da2f71fb3','url':'assets/android-chrome-256x256.png'},{'revision':'d04bf68a2313bf1357298fb581d6d466','url':'assets/android-chrome-36x36.png'},{'revision':'b84b60c44244b169da02efb88b1ca5b9','url':'assets/android-chrome-384x384.png'},{'revision':'ac582c2b231a12634308e690c52fff1d','url':'assets/android-chrome-48x48.png'},{'revision':'c1b7ed1eeb5aef7fdfb55cca7d86a0d8','url':'assets/android-chrome-512x512.png'},{'revision':'d305a32de223fbb368a334f080ebaaee','url':'assets/android-chrome-72x72.png'},{'revision':'efc38cce306079d7c84eb100414c8c9a','url':'assets/android-chrome-96x96.png'},{'revision':'d7052d332d535ce1bf31826f4b357f91','url':'assets/apple-touch-icon-1024x1024.png'},{'revision':'891aeafa34831356cebf278f7147a05f','url':'assets/apple-touch-icon-114x114.png'},{'revision':'a8187b4a733dd8f854864a24c04103cb','url':'assets/apple-touch-icon-120x120.png'},{'revision':'e8989a721df46274b4e551de52b09a30','url':'assets/apple-touch-icon-144x144.png'},{'revision':'da4a06001244cdb69e16429d07bebb11','url':'assets/apple-touch-icon-152x152.png'},{'revision':'30460b7110b6265a95f4bd014e6bc4a7','url':'assets/apple-touch-icon-167x167.png'},{'revision':'f6f0c025f44d49b67f8140a9a15c5d97','url':'assets/apple-touch-icon-180x180.png'},{'revision':'8d116c98d89731834148982262aa383e','url':'assets/apple-touch-icon-57x57.png'},{'revision':'36515e74bb2d663fb5928617f055454c','url':'assets/apple-touch-icon-60x60.png'},{'revision':'caecd253364ed938995b3436304612d9','url':'assets/apple-touch-icon-72x72.png'},{'revision':'0b603d9c25a96068287b68c923f8bf5e','url':'assets/apple-touch-icon-76x76.png'},{'revision':'f6f0c025f44d49b67f8140a9a15c5d97','url':'assets/apple-touch-icon-precomposed.png'},{'revision':'f6f0c025f44d49b67f8140a9a15c5d97','url':'assets/apple-touch-icon.png'},{'revision':'cba314c3f1e387e7545c25850e16e54a','url':'assets/apple-touch-startup-image-1125x2436.png'},{'revision':'f95dcd9f26d2e1b104b03452700255b4','url':'assets/apple-touch-startup-image-1136x640.png'},{'revision':'476dfcd3e3b893bbce758cd7732e236e','url':'assets/apple-touch-startup-image-1242x2208.png'},{'revision':'92a3d9262f26fc772da1f51688f6471c','url':'assets/apple-touch-startup-image-1242x2688.png'},{'revision':'27c488e35d111899b8228d636b9e74ed','url':'assets/apple-touch-startup-image-1334x750.png'},{'revision':'3f908b583ba154d16b706eba7129629c','url':'assets/apple-touch-startup-image-1536x2048.png'},{'revision':'36fa46225be4276c4772854ee154d49d','url':'assets/apple-touch-startup-image-1620x2160.png'},{'revision':'bb15cbf0d677015dcffdfd8b0b2106c2','url':'assets/apple-touch-startup-image-1668x2224.png'},{'revision':'99d03d0a919af0512934c04e2a285479','url':'assets/apple-touch-startup-image-1668x2388.png'},{'revision':'1d2fdba7ee983b3de209219cb29bad8c','url':'assets/apple-touch-startup-image-1792x828.png'},{'revision':'862db18c6825b97d5ef3864f5c02189d','url':'assets/apple-touch-startup-image-2048x1536.png'},{'revision':'048e87eee9f10947507a40d17d427913','url':'assets/apple-touch-startup-image-2048x2732.png'},{'revision':'6d82e6abbfb5db85f13dc8eaea2b8e85','url':'assets/apple-touch-startup-image-2160x1620.png'},{'revision':'23ea665c9aa7873ebbdc878001d15849','url':'assets/apple-touch-startup-image-2208x1242.png'},{'revision':'fb734bac7de9318238301cb0dc16106c','url':'assets/apple-touch-startup-image-2224x1668.png'},{'revision':'37ecc1d38c1cbe605354be37de165342','url':'assets/apple-touch-startup-image-2388x1668.png'},{'revision':'a1b78a7f6b713a98dc99a8ace85e6ee8','url':'assets/apple-touch-startup-image-2436x1125.png'},{'revision':'b8cf1a5ec80109b8e07359472d297f00','url':'assets/apple-touch-startup-image-2688x1242.png'},{'revision':'45796fc630a9bce98e2250de5131ca37','url':'assets/apple-touch-startup-image-2732x2048.png'},{'revision':'5486e9644ae9726e49271c3855922c5c','url':'assets/apple-touch-startup-image-640x1136.png'},{'revision':'50d5b614d2c69c96994d0f3a1c097bcc','url':'assets/apple-touch-startup-image-750x1334.png'},{'revision':'2406105bea93798425b92eff7328ca52','url':'assets/apple-touch-startup-image-828x1792.png'},{'revision':'6b9febff1eb49f1662476afc3e8c6d77','url':'assets/browserconfig.xml'},{'revision':'3f37ec16df74de7483296ce940050c83','url':'assets/coast-228x228.png'},{'revision':'4e7bdc40b9c8cc43d4a11d4f54a78de7','url':'assets/favicon-16x16.png'},{'revision':'a73baebe069d275ecd8ab1d57f36619f','url':'assets/favicon-32x32.png'},{'revision':'ac582c2b231a12634308e690c52fff1d','url':'assets/favicon-48x48.png'},{'revision':'da51ff6e75e2adc708df3089595edc31','url':'assets/favicon.ico'},{'revision':'185e5a8c43618cfac3b39610f49e3420','url':'assets/firefox_app_128x128.png'},{'revision':'9225aa5cfd04d1e805fd7789236787d0','url':'assets/firefox_app_512x512.png'},{'revision':'e593f6d4dd2523849d85dde0e4b7faf2','url':'assets/firefox_app_60x60.png'},{'revision':'635223db0318786aefe4380b860b016f','url':'assets/manifest.json'},{'revision':'5bdc372847d900e372d96b858ffeb71f','url':'assets/manifest.webapp'},{'revision':'a4d31093adf8c16f34b6d2695c5d2ca7','url':'assets/mstile-144x144.png'},{'revision':'d1f56cc4c9fad344a278e37bdb2f397e','url':'assets/mstile-150x150.png'},{'revision':'9b26702e84be33bbb5c8db511c6f04b1','url':'assets/mstile-310x150.png'},{'revision':'b3d3522c5508a95328f3f5f3b8a3412f','url':'assets/mstile-310x310.png'},{'revision':'15a9e4896c239dbdd57e472684945976','url':'assets/mstile-70x70.png'},{'revision':'152cd7ea1c98f9884811d016a294899d','url':'assets/yandex-browser-50x50.png'},{'revision':'1fa786b96e710d40404b454e3f54141c','url':'assets/yandex-browser-manifest.json'},{'revision':'687a8075f25f4436912ebec31f332368','url':'favicon.svg'},{'revision':'a97f940ffa0349fad2f7123df57a6601','url':'icons/maskable_icon.png'},{'revision':'590268c0f8009b4be7452f43c51c2d8e','url':'icons/maskable_icon_x128.png'},{'revision':'3c747f39e175b72d85e61d2f61be6027','url':'icons/maskable_icon_x192.png'},{'revision':'bb207896d0a151b11e4c807534a9cbe9','url':'icons/maskable_icon_x384.png'},{'revision':'42e7ec4d1dc7b2bd60424751278d9b85','url':'icons/maskable_icon_x48.png'},{'revision':'e78626f92f45e7440b41c7fffda2b53b','url':'icons/maskable_icon_x512.png'},{'revision':'a125d6b86fcb92f9af8096a239518ae1','url':'icons/maskable_icon_x72.png'},{'revision':'509b472bbb7f55e23b96639efb0565ee','url':'icons/maskable_icon_x96.png'},{'revision':'b796382a423ffdf8d1e45f1168e40ca1','url':'images/Jumbotron.jpg'},{'revision':'4ea98fe648a0b853ab379c928b5fd0bf','url':'images/hero.jpg'},{'revision':'607fa670a265528cb266833fe8c261c7','url':'images/image1.jpg'},{'revision':'7094383b2af6af0353195ce6481ed5de','url':'images/image2.jpg'},{'revision':'7c26c7c34b1efc08d70d61f7b3d8056a','url':'images/image3.jpg'},{'revision':'ec5aed05d90ccd718c52a87df508de6f','url':'images/image4.jpg'},{'revision':'52fa9f83889eced96a37519224d541b8','url':'images/image5.jpg'},{'revision':'e3b9b3062ef775ea737f73e6ccba9d61','url':'images/image6.jpg'},{'revision':'2aea2a8622bf31bf2df8667e62ecf876','url':'index.html'}])||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(te)||function(e,t){if(e){if("string"==typeof e)return Z(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);return"Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s?Array.from(e):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?Z(e,t):void 0}}(te)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[{url:"https://kit.fontawesome.com/dc1bf0123a.js",revision:1}])),function(e){const t=L();o(new q(t,e))}(ee),o(/^https:\/\/restaurant-api\.dicoding\.dev\/(?:(detail))/,new class extends R{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(Y),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(t,s){const n=[],a=[];let r;if(this._networkTimeoutSeconds){const{id:e,promise:i}=this._getTimeoutPromise({request:t,logs:n,handler:s});r=e,a.push(i)}const i=this._getNetworkPromise({timeoutId:r,request:t,logs:n,handler:s});a.push(i);const o=await s.waitUntil((async()=>await s.waitUntil(Promise.race(a))||await i)());if(!o)throw new e("no-response",{url:t.url});return o}_getTimeoutPromise({request:e,logs:t,handler:s}){let n;return{promise:new Promise((t=>{n=setTimeout((async()=>{t(await s.cacheMatch(e))}),1e3*this._networkTimeoutSeconds)})),id:n}}async _getNetworkPromise({timeoutId:e,request:t,logs:s,handler:n}){let a,r;try{r=await n.fetchAndCachePut(t)}catch(e){e instanceof Error&&(a=e)}return e&&clearTimeout(e),!a&&r||(r=await n.cacheMatch(t)),r}}({cacheName:"restaurant-api-dicoding",plugins:[new J({maxAgeSeconds:2592e3})]})),o(/.*(?:googleapis|gstatic)\.com/,new X({cacheName:"google-fonts",plugins:[new class{constructor(e){this.cacheWillUpdate=async({response:e})=>this._cacheableResponse.isResponseCacheable(e)?e:null,this._cacheableResponse=new z(e)}}({statuses:[0,200]}),new J({maxAgeSeconds:31536e3,maxEntries:30})]})),o(/\.(?:png|jpx|css|svg)$/,new X({cacheName:"restaurant-images",plugins:[new J({maxAgeSeconds:2592e3,maxEntries:30})]}))})()})();
//# sourceMappingURL=sw.bundle.js.map