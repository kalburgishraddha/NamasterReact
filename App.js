import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact US</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const resList = [
    {
        "info": {
            "id": "32399",
            "name": "McDonald's",
            "cloudinaryImageId": "03501c33ecb3a3105124441e541e6fe4",
            "locality": "Kalina Artista",
            "areaName": "Santacruz East",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
            ],
            "avgRating": 4.4,
            "parentId": "630",
            "avgRatingString": "4.4",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 2.9,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-27 02:45:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {},
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-d11588e8-5692-4cae-b56c-1b8c76ae4a9b"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/mcdonalds-kalina-artista-santacruz-east-mumbai-32399",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "78036",
            "name": "Burger King",
            "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
            "locality": "Central Plaza, Kalina",
            "areaName": "Santacruz East",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Burgers",
                "American"
            ],
            "avgRating": 4.3,
            "parentId": "166",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-27 05:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-d11588e8-5692-4cae-b56c-1b8c76ae4a9b"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/burger-king-central-plaza-kalina-santacruz-east-mumbai-78036",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "236162",
            "name": "Theobroma",
            "cloudinaryImageId": "63dd75492c47fcec191132b8eb299ea5",
            "locality": "Lal Bahadur Shastri Rd",
            "areaName": "Kurla",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Bakery",
                "Desserts"
            ],
            "avgRating": 4.4,
            "parentId": "1040",
            "avgRatingString": "4.4",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 37,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-26 23:59:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "v1704784556/Ratnesh_Badges/Listing_2x.png",
                        "shortDescription": "Perfect Cake Delivery",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "v1704784556/Ratnesh_Badges/Listing_2x.png",
                                    "shortDescription": "Perfect Cake Delivery"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {},
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-d11588e8-5692-4cae-b56c-1b8c76ae4a9b"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/theobroma-lal-bahadur-shastri-rd-kurla-mumbai-236162",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "574406",
            "name": "7th Heaven",
            "cloudinaryImageId": "whbpc75lwawfyhcihp9q",
            "locality": "Vile Parle East",
            "areaName": "Vile Parle East",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Bakery"
            ],
            "avgRating": 3.4,
            "veg": true,
            "parentId": "19",
            "avgRatingString": "3.4",
            "totalRatingsString": "10+",
            "sla": {
                "deliveryTime": 54,
                "lastMileTravel": 8.8,
                "serviceability": "SERVICEABLE",
                "slaString": "50-55 mins",
                "lastMileTravelString": "8.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-26 23:45:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {},
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-d11588e8-5692-4cae-b56c-1b8c76ae4a9b"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/7th-heaven-vile-parle-east-mumbai-574406",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "243517",
            "name": "KFC",
            "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
            "locality": "Phoenix Market City",
            "areaName": "Saki Naka",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Biryani",
                "American",
                "Snacks",
                "Fast Food"
            ],
            "avgRating": 4.1,
            "parentId": "547",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 45,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "45-50 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-26 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-d11588e8-5692-4cae-b56c-1b8c76ae4a9b"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/kfc-phoenix-market-city-saki-naka-mumbai-243517",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "646672",
            "name": "Bakingo-Cakes & Desserts",
            "cloudinaryImageId": "fa68ac0434f668bba1322abda36570b3",
            "locality": "Chembur",
            "areaName": "Anwar Compound",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Bakery",
                "Desserts",
                "Beverages",
                "Snacks"
            ],
            "avgRating": 4.5,
            "parentId": "3818",
            "avgRatingString": "4.5",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 6.5,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "6.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-27 00:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
                        "shortDescription": "Perfect Cake Delivery",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
                                    "shortDescription": "Perfect Cake Delivery"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {},
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-d11588e8-5692-4cae-b56c-1b8c76ae4a9b"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/bakingo-cakes-and-desserts-chembur-anwar-compound-mumbai-646672",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "24463",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "sxkkygjqz7e8mad1qnvw",
            "locality": "Near Sanagam Theatre",
            "areaName": "Kurla West",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
            ],
            "avgRating": 3.7,
            "parentId": "2456",
            "avgRatingString": "3.7",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 25,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-27 00:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-d11588e8-5692-4cae-b56c-1b8c76ae4a9b"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/dominos-pizza-near-sanagam-theatre-kurla-west-mumbai-24463",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "41471",
            "name": "Wow! Momo",
            "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
            "locality": "Kurla West",
            "areaName": "Kurla West",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Tibetan",
                "Healthy Food",
                "Asian",
                "Chinese",
                "Snacks",
                "Continental",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4,
            "parentId": "1776",
            "avgRatingString": "4.0",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 48,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "45-50 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-26 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-d11588e8-5692-4cae-b56c-1b8c76ae4a9b"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/wow-momo-kurla-west-mumbai-41471",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "387322",
            "name": "La Pino'z Pizza",
            "cloudinaryImageId": "pf3fw4qzazsu0dqngrry",
            "locality": "Mg Road",
            "areaName": "Ghatkopar Vikhroli",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4,
            "veg": true,
            "parentId": "4961",
            "avgRatingString": "4.0",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 4,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "4.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-27 02:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹699",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-d11588e8-5692-4cae-b56c-1b8c76ae4a9b"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-mg-road-ghatkopar-vikhroli-mumbai-387322",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
]
const resObj = {
    info: {
        name:"KFC",
        cuisines: ["Burger", "Fast Food", "Biryani", "Chinese", "Shakes"],
        costForTwo: "₹400 FOR TWO",
        sla: {
            deliveryTime: 27
        },
        avgRating: "3.8",
        cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf"
    }
}
const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData?.info;
    const {deliveryTime} = resData?.info?.sla;
    const styleContainer = {
        backgroundColor: "#f0f0f0"
    }
    return(
        <div className="res-card" style={styleContainer}>
            <img className="res-logo"
            alt="res-logo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+ cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}
const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {resList.map((restaurant) => (
            <RestaurantCard
                key={restaurant.info.id}
                resData={restaurant} />
          ))}
        </div>
      </div>
    );
}
const AppLayout = () => {
    return(
    <div>
        <Header/>
        <Body/>
    </div>)
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

