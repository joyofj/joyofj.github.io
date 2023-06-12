'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1317a0bbdde156cac3cbfce17c622b77",
".git/config": "ccd2e65d48ecd4ac01583e5b106d2d44",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "863d58c3303d8b2a8c09030a44f056bb",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1906bba07f361290b44c27c2c411c91e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b2d8d0c5d7debb8e10d65c354b1fa8a0",
".git/logs/refs/heads/main": "2738e464b581b9e27cc5d91b7522e541",
".git/logs/refs/remotes/main/main": "dc23d0ee9f4e72b67ee96e5dca58e5ea",
".git/logs/refs/remotes/main/master": "1624ab08991737251193ea8229769e6e",
".git/objects/00/2a86c550ee66d0846b8dc9b1e06f762a3fd57e": "856b71acbd67c0bc399f966886afefd0",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/3fe1e9dc0d723313a0dab9b1ea1d328691b847": "2cad9533b3fb72e7ed7bb8f1c90df390",
".git/objects/05/bb7caca0a6e72310d157e56ac088c1d4773ca8": "614a793d7e9bd89ad466526ebff97954",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/0a/99c444e7b79a12cee968901bb31811693d0344": "a6b2176bc5d192c0f081cc12e1604518",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/1a/41923a2c250e5cb6dd89935113fd0b4b064f7e": "b21725baba90f17fe4c24cf37f1b2d54",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/23/26a4a8039e2ad49772956162526207d5457ac2": "f1cbbcbd01ae14f19ebb82d41c87506b",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/31/b47d9642a407dddc9b7936536d0cb1205be9ce": "2aab950a2cb9913e994ac29590ef4f71",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3e/20f4d9114641e6a68b7255696019726c87c972": "b549556ded6448af8cf045149849e02d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/04fe726ad6cd45c8c84c13b9cb2b9167cb2822": "a009b2a8a60fcc6cd42a6377b89d5d92",
".git/objects/4f/acfaccb0737b778394a6d2f26e7cdcad886ba0": "c7c600a9fe3b6d1379bae43b699c7bf6",
".git/objects/4f/ee401fe9a920eee82829be304b1f87da57bc5f": "02b2e1fee01084644e3ad2ed03bc727b",
".git/objects/50/bdbbc51b2362df1e2cabfc6dfac23e4c5ac42e": "93d6ec43acb5273db353ec243218ee83",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/4c88e9c348ad15ca77a749ddd6de78d2c92937": "43d66fd86909a1e2da9859f5621acaef",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/67/d4eac32b7d33e0522cc54f17b796c2933a0b65": "d2801384668ac715e2a9fd4c21082312",
".git/objects/6b/bfee0f6690c3e936b3d0e843f21b000788fa86": "809124c1325107934826a5e5297dd587",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/7a/bb48fd92b868c79c6b07d2240a1a289104d3d5": "c5eb051e99395e8c564191c31e629abf",
".git/objects/7a/e5612df8834b9afea620408ef5c161ea270be8": "a446c10f032d95163c70b9c5dd23c96b",
".git/objects/7b/fc907a8e4463dc9b7b96a116864a463cce0ccd": "9eb905dff8963a150d4972f836f20e83",
".git/objects/86/e10736fe0e634006e221fcaa54a509da1e9e72": "e1fbfebc6f18256e4e167a0f5bac1624",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/5051683c864c8ac971252d89b213f1d2b53ac7": "f771a77c978ab6599ab4b96cbde2323a",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/93/bae1f34ab1aacf4afe9ec59384337c347fcd46": "690f8f9ea7213f55d43aa633a162a4a6",
".git/objects/9c/3305a6bcbc6db06def08d57006d5fbe96d8b37": "916a2b9f890bb5bbca0010ac84b20be8",
".git/objects/a0/ea9d76ad16775d654243fccfdbcc1425452ce2": "c5b6816ac377f2a417de748cb60f224e",
".git/objects/a1/e4e76bc1a332b4a8a5a2a2f24628aa9defe09f": "b75c8015a00e67901a11a38ba4071585",
".git/objects/a3/df72768ed4528f673f2cecc3565ec9cc885e33": "54d19dea91a24fab32e401bbc16f28e6",
".git/objects/a8/dc9cf2c040385f464f61dffec7a6076a35b7c2": "392cb9e30fe92926bf8406f91018d1ec",
".git/objects/ab/659749900a0b67cf78bb29b6e727dc71578a64": "a531af5215778caed4fddbfacb20572a",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/af/4f3b422d8a3a73d0b1e8723883eddc7c17bc9e": "12f9a9bea4b62075a1d5234931628b57",
".git/objects/b0/d9177064796436a3810daa23fa58831fb28489": "da81ab28c8a9847e8605bacdbf86d24f",
".git/objects/b2/1aa7a94b9de817828aa94196c38d3bba1f4289": "9427bbb7ada7be0acf145fea8c10634e",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/b767e189030e7a745855a7691d0e4dab867391": "702f69cd88f1ce591e5a36d61800494f",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/34b6737acf11e88b9e3b7a8982afc53d48ad69": "3a6d410c1826d5b7db0a0fc85eec89f9",
".git/objects/be/f7c12b560f326900b9dfe813ddd2b76f23ff61": "97f63f2e2538600feb331872622a8a75",
".git/objects/c0/c720bb92fc7e99f171f1c7d5e8ab804e6354c9": "dd7e07345e6bff78145d945e80c4c463",
".git/objects/c2/acbb3f0637902ddec492087d1bed03f56d51fe": "f8393034046bc16a7212f29af64ed093",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c7/7b9089d2a9880f5f11ce00816914485da74d5c": "ff37394a8490d56465a3149a1a6b8e63",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/fcb62a60eb843ee64918a0add0cfbf23e86fef": "0186aea7c2909138e7b3678d11d808c4",
".git/objects/dc/8896c9450d6c93eb1c1ffebdb8acdb33c77916": "c447a67fb00563d0a46c041163d93e4c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f4/21c585df9f1bba93f1bf2ded0630d9bfd0a8bf": "d5665e0bcc590e95b559a2721cd46674",
".git/objects/f8/a6d1700a30fdcd9f930756a32d764f63a7d08e": "feb5a409885022ef0aa0238f76ee9941",
".git/objects/fc/22d7762eee06b7608cd208c3a77a843fe6a2e9": "8fe47c401f6674c70ea8a2e5db4cb838",
".git/objects/fc/af76bd4ff2e45883c4c1a3ea6ea19d99bad23f": "510955196b8fb312d2f8a263f7043962",
".git/ORIG_HEAD": "c0c57fc8b60246a60b102adfa354af1b",
".git/refs/heads/main": "c0c57fc8b60246a60b102adfa354af1b",
".git/refs/remotes/main/main": "c0c57fc8b60246a60b102adfa354af1b",
".git/refs/remotes/main/master": "54c0edc2de7d9661ba2f0443728eabc8",
"assets/AssetManifest.json": "a7740899e2bce18c0bbc51766f3e4347",
"assets/AssetManifest.smcbin": "7b210b9b686c11b1a16d9be556375714",
"assets/assets/1.png": "6b6a77102b2e0b8aaf8ac2fd5248c530",
"assets/assets/2.png": "8ec7d1e399ecb428f7e018bee4efc149",
"assets/assets/3.png": "5c230eb07321951ec7d7a928fe45bcfe",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "91210740a5ba1ede81403186802d8ff3",
"assets/NOTICES": "e5d3268724282f5de9ae450389dd654f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "43ac5e18b7b0bdaf1b406ed1f48c0b18",
"/": "43ac5e18b7b0bdaf1b406ed1f48c0b18",
"main.dart.js": "9afee973186842ff5f06940be331ec16",
"manifest.json": "843cbfdf43297b0a53952f658aa808e8",
"version.json": "1b1b25474b523fb65d8500c907d5998a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
