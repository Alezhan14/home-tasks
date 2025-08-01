const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const HOTELS_DATA = {
    "destination": [
        {
            "id": 1,
            "value": 70,
            "label": "Atlanta"
        },
        {
            "id": 2,
            "value": 149,
            "label": "Boston"
        },
        {
            "id": 3,
            "value": 5034,
            "label": "Boston"
        },
        {
            "id": 4,
            "value": 34501,
            "label": "Celebration"
        },
        {
            "id": 5,
            "value": 40418,
            "label": "Edgewood"
        },
        {
            "id": 6,
            "value": 39505,
            "label": "Gotha"
        },
        {
            "id": 7,
            "value": 21017,
            "label": "Haines City"
        },
        {
            "id": 8,
            "value": 10,
            "label": "Los Angeles"
        },
        {
            "id": 9,
            "value": 72,
            "label": "Miami"
        },
        {
            "id": 10,
            "value": 18421,
            "label": "Montverde"
        },
        {
            "id": 11,
            "value": 54,
            "label": "New York"
        },
        {
            "id": 12,
            "value": 23767,
            "label": "Ocoee"
        },
        {
            "id": 13,
            "value": 32190,
            "label": "Orlando area"
        },
        {
            "id": 14,
            "value": 11531,
            "label": "Poinciana"
        },
        {
            "id": 15,
            "value": 10772,
            "label": "Polk City"
        },
        {
            "id": 16,
            "value": 17969,
            "label": "San Francisco Bay"
        },
        {
            "id": 17,
            "value": 17365,
            "label": "St. Cloud"
        },
        {
            "id": 18,
            "value": 24263,
            "label": "Walt Disney World® Resort"
        },
        {
            "id": 19,
            "value": 277,
            "label": "Washington"
        },
        {
            "id": 20,
            "value": 49764,
            "label": "Windermere"
        },
        {
            "id": 21,
            "value": 22282,
            "label": "Winter Garden"
        }
    ],
    "hotels": [
        {
            "id": 5018105,
            "name": "Woogo Central Park - Tempo Apartments",
            "address": "240 West 73rd Street",
            "city": "New York",
            "state": null,
            "country_code": "US",
            "hotel_rating": 4,
            "phone_number": "18005740835",
            "website": null
        },
        {
            "id": 11003176,
            "name": "Amolite Hotel",
            "address": "Avenida Curitiba, 811",
            "city": "New York",
            "state": null,
            "country_code": "BR",
            "hotel_rating": 0,
            "phone_number": null,
            "website": null
        },
        {
            "id": 747134,
            "name": "Redford Hotel",
            "address": "136 Ludlow Street",
            "city": "New York",
            "state": "NY",
            "country_code": "US",
            "hotel_rating": 3.5,
            "phone_number": "212260414",
            "website": null
        },
        {
            "id": 720550,
            "name": "Hotel Richland New York",
            "address": "5 Allen Street",
            "city": "New York",
            "state": "NY",
            "country_code": "US",
            "hotel_rating": 3,
            "phone_number": "1 212 2191018",
            "website": null
        },
        {
            "id": 797074,
            "name": "Studio Lux Times Square",
            "address": "between 9 Avenue and 8 Avenue",
            "city": "New York",
            "state": "NY",
            "country_code": "US",
            "hotel_rating": 2.5,
            "phone_number": null,
            "website": null
        },
        {
            "id": 742987,
            "name": "The Bowery Hotel",
            "address": "335 Bowery",
            "city": "New York",
            "state": "NY",
            "country_code": "US",
            "hotel_rating": 4,
            "phone_number": null,
            "website": null
        },
        {
            "id": 743452,
            "name": "AC Hotel by Marriott New York Times Square",
            "address": "260 West 40th Street",
            "city": "New York",
            "state": "NY",
            "country_code": "US",
            "hotel_rating": 3.5,
            "phone_number": "1-212-398-2700",
            "website": null
        },
        {
            "id": 260469,
            "name": "The Ridge Hotel",
            "address": "151 East Houston Street",
            "city": "New York",
            "state": "NY",
            "country_code": "US",
            "hotel_rating": 3,
            "phone_number": "1 212 777-0012",
            "website": null
        },
        {
            "id": 740399,
            "name": "SoHo 54 Hotel",
            "address": "54 Watts St",
            "city": "New York",
            "state": "NY",
            "country_code": "US",
            "hotel_rating": 3,
            "phone_number": null,
            "website": null
        },
        {
            "id": 5018104,
            "name": "Hotel Alexander",
            "address": "306 W 94th St",
            "city": "New York",
            "state": null,
            "country_code": "US",
            "hotel_rating": 3,
            "phone_number": "XX",
            "website": null
        },
        {
            "id": 792811,
            "name": "Parker New York, A Hyatt Affiliate Property",
            "address": "119 West 56th Street",
            "city": "New York",
            "state": "NY",
            "country_code": "US",
            "hotel_rating": 4.5,
            "phone_number": null,
            "website": null
        },
        {
            "id": 804220,
            "name": "Central Park View B&B",
            "address": "301 West 110th Street",
            "city": "New York",
            "state": "NY",
            "country_code": "US",
            "hotel_rating": 2.5,
            "phone_number": null,
            "website": null
        },
        {
            "id": 5018107,
            "name": "Staten Island Hotel",
            "address": "1415 Richmond Ave",
            "city": "New York",
            "state": null,
            "country_code": "US",
            "hotel_rating": 3,
            "phone_number": "17186985000",
            "website": null
        },
        {
            "id": 700390,
            "name": "Mondrian Park Avenue",
            "address": "444 Park Ave S",
            "city": "New York",
            "state": "NY",
            "country_code": "US",
            "hotel_rating": 4.5,
            "phone_number": null,
            "website": null
        },
        {
            "id": 742946,
            "name": "Pod Times Square",
            "address": "400 W 42nd Street",
            "city": "New York",
            "state": "NY",
            "country_code": "US",
            "hotel_rating": 3,
            "phone_number": null,
            "website": null
        },
        {
            "id": 776932,
            "name": "Freehand New York",
            "address": "23 Lexington Ave",
            "city": "New York",
            "state": "NY",
            "country_code": "US",
            "hotel_rating": 4,
            "phone_number": "121-247-51920",
            "website": "https://freehandhotels.com/new-york/rooms/"
        },
        {
            "id": 741741,
            "name": "The Grand NYC",
            "address": "38 West 31st Street",
            "city": "New York",
            "state": "NY",
            "country_code": "US",
            "hotel_rating": 2,
            "phone_number": null,
            "website": null
        },
        {
            "id": 716815,
            "name": "HeadingToDo Broadway",
            "address": "38 west 31 st",
            "city": "New York",
            "state": "NY",
            "country_code": "US",
            "hotel_rating": 3,
            "phone_number": null,
            "website": null
        },
        {
            "id": 802583,
            "name": "The Dominick",
            "address": "246 Spring Street",
            "city": "New York",
            "state": "NY",
            "country_code": "US",
            "hotel_rating": 5,
            "phone_number": "+1 212 842 5500",
            "website": null
        },
        {
            "id": 5018106,
            "name": "HomeStay NYC",
            "address": "49 Catherine Street",
            "city": "New York",
            "state": null,
            "country_code": "US",
            "hotel_rating": 3,
            "phone_number": null,
            "website": null
        },
        {
            "id": 751736,
            "name": "Fairfield Inn & Suites by Marriott/World Trade Center Area",
            "address": "100 Greenwich St",
            "city": "New York",
            "state": "NY",
            "country_code": "US",
            "hotel_rating": 3,
            "phone_number": "703-261-5677",
            "website": null
        },
        {
            "id": 386689,
            "name": "Back Bay Suites",
            "address": "11 Hereford St.",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 2.5,
            "phone_number": null,
            "website": null
        },
        {
            "id": 567484,
            "name": "Global Luxury Suites at The Theatre District",
            "address": "99 Kneeland St.",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 3.5,
            "phone_number": null,
            "website": null
        },
        {
            "id": 677300,
            "name": "Vibrant 1BR in Fenway by Sonder",
            "address": "Beacon Street and Park dr",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 4,
            "phone_number": null,
            "website": null
        },
        {
            "id": 820605,
            "name": "Unique 1BR in Financial District by Sonder",
            "address": "120 Milk St, Unit 801",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": null,
            "phone_number": null,
            "website": null
        },
        {
            "id": 731189,
            "name": "Charming 2BR in South End by Sonder",
            "address": "Columbia Road & G Street",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 3.5,
            "phone_number": null,
            "website": null
        },
        {
            "id": 721848,
            "name": "Stunning 4BR in Downtown Crossing by Sonder",
            "address": "Hamilton Place",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 3.5,
            "phone_number": null,
            "website": null
        },
        {
            "id": 677341,
            "name": "Classic 3BR in Allston by Sonder",
            "address": "Brainerd Road and Harvard St",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 3.5,
            "phone_number": null,
            "website": null
        },
        {
            "id": 677347,
            "name": "Posh 2BR in Allston by Sonder",
            "address": "Western Avenue and N Harvard",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 3.5,
            "phone_number": null,
            "website": null
        },
        {
            "id": 810445,
            "name": "Sophisticated 2BR in Downtown Crossing by Sonder",
            "address": "Boylston Street",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 3.5,
            "phone_number": null,
            "website": null
        },
        {
            "id": 677372,
            "name": "Posh Studio in Downtown Crossing by Sonder",
            "address": "Arch Street and Summer st",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 3,
            "phone_number": null,
            "website": null
        },
        {
            "id": 822534,
            "name": "Playful 1BR in Fenway by Sonder",
            "address": "Commonwealth Avenue",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": null,
            "phone_number": null,
            "website": null
        },
        {
            "id": 793847,
            "name": "Stunning 1 BR In Allston by Sonder",
            "address": "75 Braintree St",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 4,
            "phone_number": null,
            "website": null
        },
        {
            "id": 677396,
            "name": "Sonder - St. Mary's",
            "address": "Beacon Street and Park dr",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 4,
            "phone_number": null,
            "website": null
        },
        {
            "id": 677411,
            "name": "Bright 2BR in Downtown Crossing by Sonder",
            "address": "Milk Street and Batterymarch st",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 3.5,
            "phone_number": null,
            "website": null
        },
        {
            "id": 677410,
            "name": "Simple 1BR in Theater District by Sonder",
            "address": "Warrenton Street and Stuart St",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 3.5,
            "phone_number": null,
            "website": null
        },
        {
            "id": 677425,
            "name": "Central 2BR in South End by Sonder",
            "address": "Tremont Street and Milford Street",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 4,
            "phone_number": null,
            "website": null
        },
        {
            "id": 677426,
            "name": "Classic 1BR in Fenway by Sonder",
            "address": "Beacon Street and Park dr",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 4,
            "phone_number": null,
            "website": null
        },
        {
            "id": 721859,
            "name": "Hip 3BR in Downtown Crossing by Sonder",
            "address": "Hamilton Place",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 4,
            "phone_number": null,
            "website": null
        },
        {
            "id": 801610,
            "name": "Playful 2BR in South End by Sonder",
            "address": "Albany Street",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 4,
            "phone_number": null,
            "website": null
        },
        {
            "id": 677429,
            "name": "Airy 2BR in Allston by Sonder",
            "address": "Western Avenue and N Harvard",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 3.5,
            "phone_number": null,
            "website": null
        },
        {
            "id": 677433,
            "name": "Bright 1BR in South End by Sonder",
            "address": "Harrison Avenue and Herald Street",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 4,
            "phone_number": null,
            "website": null
        },
        {
            "id": 677449,
            "name": "Industrial 3BR in Downtown by Sonder",
            "address": "Washington Street and Essex St",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 4,
            "phone_number": null,
            "website": null
        },
        {
            "id": 677450,
            "name": "Chic 1BR in Downtown Crossing by Sonder",
            "address": "Arch Street and Summer st",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 3.5,
            "phone_number": null,
            "website": null
        },
        {
            "id": 677452,
            "name": "Sonder - Financial District",
            "address": "Milk Street and Batterymarch st",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 4,
            "phone_number": null,
            "website": null
        },
        {
            "id": 677455,
            "name": "Bright Studio in Downtown Crossing by Sonder",
            "address": "Arch Street and Summer st",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 3,
            "phone_number": null,
            "website": null
        },
        {
            "id": 677470,
            "name": "Central 3BR in South End by Sonder",
            "address": "Massachusetts Avenue and Washington st",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 4,
            "phone_number": null,
            "website": null
        },
        {
            "id": 677476,
            "name": "Smart 2BR in Brighton by Sonder",
            "address": "Commonwealth Avenue and Chestnut Hill av",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 3.5,
            "phone_number": null,
            "website": null
        },
        {
            "id": 677477,
            "name": "Hip 1BR in Allston by Sonder",
            "address": "Brainerd Road and Harvard St",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 3.5,
            "phone_number": null,
            "website": null
        },
        {
            "id": 677480,
            "name": "Smart 1BR in Downtown Crossing by Sonder",
            "address": "Arch Street and Summer st",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 3.5,
            "phone_number": null,
            "website": null
        },
        {
            "id": 677481,
            "name": "Hip 2BR in Allston by Sonder",
            "address": "Brainerd Road and Harvard St",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 3.5,
            "phone_number": null,
            "website": null
        },
        {
            "id": 677519,
            "name": "Charming 1BR in Fenway by Sonder",
            "address": "Beacon Street and Park dr",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 4,
            "phone_number": null,
            "website": null
        },
        {
            "id": 677520,
            "name": "Lively 1BR in Theater District by Sonder",
            "address": "Warrenton Street and Stuart St",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 3.5,
            "phone_number": null,
            "website": null
        },
        {
            "id": 705227,
            "name": "Charming 1BR in Seaport by Sonder",
            "address": "D Street",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 3.5,
            "phone_number": null,
            "website": null
        },
        {
            "id": 696618,
            "name": "Central 1BR in Fenway by Sonder",
            "address": "Brookline Avenue",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 4,
            "phone_number": null,
            "website": null
        },
        {
            "id": 677526,
            "name": "Simple Studio in Downtown Crossing by Sonder",
            "address": "Arch Street and Summer st",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 3.5,
            "phone_number": null,
            "website": null
        },
        {
            "id": 677527,
            "name": "Modern 3BR in Brighton by Sonder",
            "address": "Larose Place and Monastery rd",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 3.5,
            "phone_number": null,
            "website": null
        },
        {
            "id": 677528,
            "name": "Pleasant Back Bay Suites by Sonder",
            "address": "Newbury Street and Fairfield Street",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 3.5,
            "phone_number": null,
            "website": null
        },
        {
            "id": 677537,
            "name": "Sonder - The Continuum",
            "address": "Western Avenue and N Harvard",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 3.5,
            "phone_number": null,
            "website": null
        },
        {
            "id": 696614,
            "name": "Smart 1BR in Seaport by Sonder",
            "address": "D Street",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 3.5,
            "phone_number": null,
            "website": null
        },
        {
            "id": 677694,
            "name": "Unique 2BR in Downtown Crossing by Sonder",
            "address": "Washington Street and Essex St",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 4,
            "phone_number": null,
            "website": null
        },
        {
            "id": 677550,
            "name": "Posh Studio in Back Bay by Sonder",
            "address": "Newbury Street and Fairfield Street",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 3,
            "phone_number": null,
            "website": null
        },
        {
            "id": 787996,
            "name": "Vibrant 2BR in Downtown Crossing by Sonder",
            "address": "Washington Street",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 4,
            "phone_number": null,
            "website": null
        },
        {
            "id": 731262,
            "name": "Stunning 3BR in Downtown Crossing by Sonder",
            "address": "Hamilton Place & Tremont St.",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 3.5,
            "phone_number": null,
            "website": null
        },
        {
            "id": 677559,
            "name": "Industrial 1BR in Downtown Crossing by Sonder",
            "address": "Washington Street and Essex st",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 4,
            "phone_number": null,
            "website": null
        },
        {
            "id": 677565,
            "name": "Industrial 2BR in Downtown Crossing by Sonder",
            "address": "Washington Street and Essex st",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 4,
            "phone_number": null,
            "website": null
        },
        {
            "id": 677571,
            "name": "Lovely Brighton Suites by Sonder",
            "address": "Commonwealth Avenue",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 3.5,
            "phone_number": null,
            "website": null
        },
        {
            "id": 724715,
            "name": "Modern 2BR in Downtown Crossing by Sonder",
            "address": "Hamilton Place",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 4,
            "phone_number": null,
            "website": null
        },
        {
            "id": 677574,
            "name": "Loft Style 2BR in Downtown Crossing by Sonder",
            "address": "Washington Street and Essex st",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 4,
            "phone_number": null,
            "website": null
        },
        {
            "id": 677577,
            "name": "Chic 3BR in Lower Roxbury by Sonder",
            "address": "Tremont Street and St Cyprians Pl",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 3.5,
            "phone_number": null,
            "website": null
        },
        {
            "id": 757401,
            "name": "Stunning 1BR in Theater District by Sonder",
            "address": "Warrenton Street",
            "city": "Boston",
            "state": "MA",
            "country_code": "US",
            "hotel_rating": 3.5,
            "phone_number": null,
            "website": null
        }
    ]
}

app.get('/', (req, res) => {
    res.send(HOTELS_DATA.destination);
})
app.get('/:destination', (req, res) => {
    const destination = req.params.destination;
    const filteredHotels = HOTELS_DATA.hotels.filter(hotel => hotel.city.toLowerCase() === destination.toLowerCase());
    // console.log("filteredHotels" + filteredHotels);
    if (filteredHotels.length > 0) {
        res.json(filteredHotels);
    } else {
        res.status(404).send('No hotels found for the specified destination');
    }
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    console.log('http://localhost:3000');
})