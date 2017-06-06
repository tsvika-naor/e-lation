var GoogleAuth = require('google-auth-library');
var google = require('googleapis');
var people = google.people('v1');
var handleError = require('../routes/utils');

var CLIENT_ID = "142084885382-lr0fajuthv25m2oc98107ete22lqe5h2.apps.googleusercontent.com";
var CLIENT_SECRET = "GEJUGPMZRtQ79zdd_Fg6t-Ta";

module.exports = {
    verifyToken: function (req, res, next) {
        var auth = new GoogleAuth;
        var client = new auth.OAuth2(CLIENT_ID, CLIENT_SECRET, '');
        client.verifyIdToken(req.token, CLIENT_ID, function (err, login) {
            req.body.userId = login.getPayload()['sub'];
            next();
        });
    },

    getProfile: function (req, res, next) {
        console.log("getProfile - " + req.body.access_token);
        var OAuth2 = google.auth.OAuth2;
        var oauth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, '');

        /*oauth2Client.setCredentials({
            access_token: req.body.access_token
        });
        people.people.get({
            resourceName: 'people/' + req.body.userId,
            auth: oauth2Client
        }, function (err, response) {
            if (err) return handleError(res, err);
            console.log(response);
            req.body.profile = {
                firstName: '',
                lastName: '',
                avatar: {
                    mimeType: "image/jpg",
                    data: ''
                },
                address: {
                    street: '',
                    buildingNum: '',
                    city: '',
                    country: ''
                },
                email: '',
                phone: '',
                birthday: null
            };

            if (response.names) {
                req.body.profile.firstName = response.names[0].givenName;
                req.body.profile.lastName = response.names[0].familyName;
            }

            if (response.addresses) {
                req.body.profile.address.street = response.addresses[0].streetAddress;
                req.body.profile.address.buildingNum = response.addresses[0].extendedAddress;
                req.body.profile.address.city = response.addresses[0].city;
                req.body.profile.address.country = response.addresses[0].country;
            }

            if (response.genders) {
                switch (response.genders[0].value) {
                    case 'male':
                        req.body.profile.gender = 0;
                        break;
                    case 'female':
                        req.body.profile.gender = 1;
                        break;
                    default:
                        req.body.profile.gender = -1;
                }
            }

            if (response.birthdays[0].date)
                req.body.profile.birthday = new Date(response.birthdays[0].date.year, response.birthdays[0].date.month - 1, response.birthdays[0].date.day);
            if (response.photos)
                req.body.profile.avatar.data = response.photos[0].url;
            if (response.emailAddresses)
                req.body.profile.email = response.emailAddresses[0].value;
            if (response.phoneNumbers)
                req.body.profile.phone = response.phoneNumbers[0].canonicalForm;

            next();
        });*/

        req.body.profile = {
            firstName: 'Itamar',
            lastName: 'Priel',
            avatar: {
                mimeType: "image/jpg",
                data: ''
            },
            address: {
                street: '',
                buildingNum: '',
                city: '',
                country: ''
            },
            email: 'itamar.priel@gmail.com',
            phone: '',
            birthday: new Date(1991, 2, 5)
        };
        next();
    }
};