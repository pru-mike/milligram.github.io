"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/blockquotes.html","3405cf47fc47e6fade2e5eaf538a6a38"],["/browser-support.html","b6733685a669893703aaf8d8fc17f262"],["/buttons.html","6db0150650c7c420c05cd334b6c1cc18"],["/codes.html","c5b632a14d60bfdce650b11f9b6c48fb"],["/forms.html","c1da124a538d48b402cc4338ced34101"],["/getting-started.html","2185808a024fe823959afcd5723dd029"],["/grids.html","adc8ee0e651a48c20aefc9aa1de00ef8"],["/images/apple-touch-icon.png","6da330b99e2b65b6bbbeacc062b4e1b9"],["/images/favicon.ico","53b8929815ffc0eae6e97287db0e68b9"],["/images/icon.png","a2f3dee9129774da529f6934842c6aee"],["/images/launcher-icon-2x.png","6b17c275f19c0311eeb753bee0095353"],["/images/launcher-icon-3x.png","574ed98ce7c39e5194d95734f81e7094"],["/images/launcher-icon-4x.png","b623b00d820f08f94c60248f8e69330e"],["/images/logo.svg","ab59c9fcc1e1fb86e77644dcbffc8a23"],["/images/thumbnail.png","bda9068fe9d3fc41347fd2de65bc8007"],["/index.html","dfc5b3b1c040b6ac57283f3cd9fc1847"],["/layout.html","4b7e6361b565da052dc6b29b0a6f874f"],["/lib/bundle.css","16e671d6b27e8e520ea13e83270e6da3"],["/lists.html","83b79cd64b9279e697baa2bececdc4b6"],["/scripts/main.js","a64a39f952136c7fba15d566143535b0"],["/styles/main.css","63a68ba570d432009994daf977950492"],["/tables.html","2e2e3f5ae58eec23ea08339ef331a9c7"],["/templates/blockquotes.html","0d91d2617f5d378b321a325b8342c990"],["/templates/browser-support.html","06a959123b949d659a40661c19148d17"],["/templates/buttons.html","c26cd560357270289c3a3126e5d0685c"],["/templates/carbonads.html","67600ce992fcf9513e4f73062949a54e"],["/templates/codes.html","0fc46895d753c8d56736cdcb6fb09b41"],["/templates/forms.html","e823c75b2390393325c1b1dba93624c1"],["/templates/getting-started.html","008a16352b4a3f69e1de48fbd9226775"],["/templates/grids.html","5b6b8fc12397f0c3195111d8d4a8c607"],["/templates/home.html","05c5cad490150ef2588445ca8eafd9d0"],["/templates/lists.html","6d21530f17e28756b29e7154cb9c3116"],["/templates/tables.html","a18623cbe880148cfd678ef22d913c02"],["/templates/tips.html","88398b60b7b32f9d5175b9c66f0a6f4a"],["/templates/typography.html","43ca7088b332cf933b98a85cc35fd149"],["/templates/utilities.html","26338f77c1d8b31145a69a8ba99d6136"],["/templates/why.html","b8a17a64c61cf817734314d2e9045f18"],["/tips.html","484d0e5dc88baef697304b22ee50e94d"],["/typography.html","6b76cdf0fb59a152f582c6e96a1666f0"],["/utilities.html","9c0e8b2bd1fc7a871619b6640228a966"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,!1);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);t=urlsToCacheKeys.has(a);t||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});