describe("GalleryController", function () {
  var controller,
  $this,
  $httpBackend,
  PicsService1,
  $q;


  var results = [
      {
        "name": "Snapchat it",
        "description": "The story of Snapchat is an exciting one",
        "productlink": "../../app/components/product-page/product.html",
        "profileImage": "./assets/images/silicon-valley/evan_snapchat.jpg",
        "littleImage": "./assets/images/silicon-valley/snapchat-logo-250250.png",
        "picsId": "snapchat-ceo",
        "category": "silicon valley"
      },
      {
        "name": "iExec",
        "description": "Get a photo inspired by the Apple executive",
        "productlink": "../../app/components/product-page/product.html",
        "profileImage": "./assets/images/silicon-valley/apple-woman-350.png",
        "littleImage": "./assets/images/silicon-valley/apple-aluminum.png",
        "picsId": "apple-woman",
        "category": "silicon valley"
      },
      {
        "name": "Search Engine Giant",
        "description": "Get a photo like the Google's management team",
        "productlink": "../../app/components/product-page/product.html",
        "profileImage": "./assets/images/silicon-valley/googleexec.jpg",
        "littleImage": "./assets/images/silicon-valley/google4.png",
        "picsId": "search-engine-giant",
        "category": "silicon valley"
      },
      {
        "name": "G Ventrified",
        "description": "A quick creative description of the pic",
        "productlink": "../../app/components/product-page/product.html",
        "profileImage": "./assets/images/silicon-valley/kevin-rose2.jpg",
        "littleImage": "./assets/images/silicon-valley/gv-logo-icon.png",
        "picsId": "g-ventrified-1",
        "category": "silicon valley"
      },
      {
        "name": "CEO Soft",
        "description": "CEO Soft is a photo that takes after a",
        "productlink": "../../app/components/product-page/product.html",
        "profileImage": "./assets/images/silicon-valley/nadella_3079372b.jpg",
        "littleImage": "./assets/images/silicon-valley/msoft-logo.png",
        "picsId": "ceo-soft",
        "category": "silicon valley"
      },
      {
        "name": "Super Web Circuit",
        "description": "Super web circuit is inspired by Brad Frost",
        "productlink": "../../app/components/product-page/product.html",
        "profileImage": "./assets/images/silicon-valley/brad_frost.png",
        "littleImage": "./assets/images/silicon-valley/atomic.png",
        "picsId": "super-web-circuit",
        "category": "silicon valley"
      },
      {
        "name": "Yahoo Ceo",
        "description": "A quick creative description of the pic",
        "productlink": "../../app/components/product-page/product.html",
        "profileImage": "./assets/images/silicon-valley/mmayer-1.jpg",
        "littleImage": "./assets/images/silicon-valley/yahoo-logo.png",
        "picsId": "yahoo-ceo",
        "category": "silicon valley"
      },
      {
        "name": "G Ventrified 2",
        "description": "A quick creative description of the pic",
        "productlink": "../../app/components/product-page/product.html",
        "profileImage": "./assets/images/silicon-valley/phoebe-peronto.jpg",
        "littleImage": "./assets/images/silicon-valley/gv-logo-icon.png",
        "picsId": "g-ventrified-2",
        "category": "silicon valley"
      },
      {
        "name": "Wordpress Hero",
        "description": "Get a photo like the J. Torke Wordpress development guru.",
        "productlink": "../../app/components/product-page/product.html",
        "profileImage": "./assets/images/silicon-valley/torke-large-1.jpeg",
        "littleImage": "./assets/images/silicon-valley/wpress.png",
        "picsId": "wordpress-hero",
        "category": "silicon valley"
      },
      {
        "name": "Iron Chef W",
        "description": "Cat Kora was the first woman Iron Chefe",
        "productlink": "../../app/components/product-page/product.html",
        "profileImage": "./assets/images/other-influencers/cat.png",
        "littleImage": "./assets/images/other-influencers/crossed-knives.jpg",
        "picsId": "iron-chef-w",
        "category": "other influencers"
      },
      {
        "name": "Back Stage",
        "description": "Back Stage is a photo isnpired by...",
        "productlink": "../../app/components/product-page/product.html",
        "profileImage": "./assets/images/other-influencers/comicbdrop250.jpg",
        "littleImage": "./assets/images/other-influencers/q-social-media-icon.png",
        "picsId": "comic-genius",
        "category": "other influencers"
      },
      {
        "name": "Martha's Assistant",
        "description": "A quick creative description of the pic",
        "productlink": "../../app/components/product-page/product.html",
        "profileImage": "./assets/images/other-influencers/marthastewart-mediakit.png",
        "littleImage": "./assets/images/other-influencers/martha_stewart.png",
        "picsId": "marthas-assistant",
        "category": "other influencers"
      },
      {
        "name": "The White Wall",
        "description": "The white wall is a location that brings out the...",
        "productlink": "../../app/components/product-page/product.html",
        "profileImage": "./assets/images/smart-locations/elance-whitewall-350.jpg",
        "littleImage": "",
        "picsId": "white-wall",
        "category": "smart locations"
      },
      {
        "name": "In The Subway",
        "description": "Once a monthe we make a trip to subway you can get... ",
        "productlink": "../../app/components/product-page/product.html",
        "profileImage": "./assets/images/smart-locations/subway.jpg",
        "littleImage": "needs-uber",
        "picsId": "in-the-subway",
        "category": "smart locations"
      },
      {
        "name": "Market Street Live",
        "description": "Once a week we pick a live city atmosphere",
        "productlink": "../../app/components/product-page/product.html",
        "profileImage": "./assets/images/smart-locations/ypn-aaman.jpg  ",
        "littleImage": "needs-uber",
        "picsId": "market-street-live",
        "category": "smart locations"
      },
      {
      "name": "The Nano Center",
      "description": "Invoke a modern scence and politik with this setting ",
      "productlink": "../../app/components/product-page/product.html",
      "profileImage": "./assets/images/smart-locations/ypn-woman-nano.jpg",
      "littleImage": "needs-uber",
      "picsId": "nano-center",
      "category": "smart locations"
    },
      {
        "name": "How to levitate",
        "description": "Inspired by Louish Pixel from Flickr",
        "productlink": "../../app/components/product-page/product.html",
        "profileImage": "./assets/images/cheeky/boybluehoving.jpg",
        "littleImage": "needs-uber",
        "picsId": "how-to-levitate",
        "category": "cheeky"
      },
      {
        "name": "Cliffs of Philly",
        "description": "Inspired by the Cliffs of Dover Pic from...",
        "productlink": "../../app/components/product-page/product.html",
        "profileImage": "./assets/images/cheeky/cliffsofDover.jpg",
        "littleImage": "needs-uber",
        "picsId": "cliffs-of-philly",
        "category": "cheeky"
      },
      {
        "name": "The Computer Float",
        "description": "Taken from a col pic that was seen in a commercial",
        "productlink": "../../app/components/product-page/product.html",
        "profileImage": "./assets/images/cheeky/girlflying.jpg",
        "littleImage": "needs-uber",
        "picsId": "computer-float",
        "category": "cheeky"
      },
      {
        "name": "Too Many Papers",
        "description": "Ever seen one of those commercials that makes",
        "productlink": "../../app/components/product-page/product.html",
        "profileImage": "./assets/images/cheeky/stress_one-913.jpeg",
        "littleImage": "needs-uber",
        "picsId": "too-many-papers",
        "category": "cheeky"
      }
    ];

  beforeEach(function () {
    module('ganalytics');
  });

  beforeEach(inject(function (_$controller_, _$httpBackend_, _pictureService_, _$q_, _$rootScope_) {
    $controller = _$controller_;
    $httpBackend = _$httpBackend_;
    pictureService = _pictureService_;
    $q = _$q_;
    $rootScope = _$rootScope_;
  }));

  beforeEach(function () {
    $this = $controller('GalleryController',{ pictureService: pictureService });
  });

  describe("Gallery controller", function () {
    it("should be created successfully", function () {
      expect($this).toBeDefined();
    });

    describe("After activation", function () {
       it("it should call query with 'picsoptions' to get all pics", function () {
         $httpBackend.expectGET('./assets/mock-data/pics-data-mock-hc/picsoptions.json').respond(results);
         $httpBackend.flush();
         expect($this.picsList[0].name).toEqual("Snapchat it");
         // used this to help 
         // http://stackoverflow.com/questions/18258490/testing-resource-services-in-angularjs
       });

       it("it should call query with 'picsoptions' to get all pics on gallery state", function () {
         $httpBackend.expectGET('./assets/mock-data/pics-data-mock-hc/picsoptions.json').respond(results);
         $httpBackend.flush();
         expect($this.picsList[0].name).toEqual("Snapchat it");
         // used this to help
         // http://stackoverflow.com/questions/18258490/testing-resource-services-in-angularjs
       });

    });

  });

});