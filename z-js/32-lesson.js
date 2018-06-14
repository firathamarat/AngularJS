var ControllerExample = angular.module("myapp", []);
ControllerExample.controller("mycontrol", function ($scope) {


    //employees adında dizi tanımlanarak değerler verildi
    $scope.employees = [
        {
            "id": 1,
            "firstName": "Amy",
            "lastName": "Taylor",
            "phone": "617-564-3254",
            "country": "ABD"
        },
        {
            "id": 2,
            "firstName": "Anup",
            "lastName": "Gupta",
            "phone": "617-564-1258",
            "country": "Russia"
        },
        {
            "id": 3,
            "firstName": "Michael",
            "lastName": "Jones",
            "phone": "617-564-9657",
            "country": "İtaly"
        },
        {
            "id": 4,
            "firstName": "Caroline",
            "lastName": "Kingsley",
            "phone": "617-564-8855",
            "country": "France"
        },
        {
            "id": 5,
            "firstName": "James",
            "lastName": "Kennedy",
            "phone": "617-564-3347",
            "country": "ABD"
        },
        {
            "id": 6,
            "firstName": "Jennifer",
            "lastName": "Wu",
            "phone": "617-564-1144",
            "country": "Russia"
        },
        {
            "id": 7,
            "firstName": "Jonathan",
            "lastName": "Bradley",
            "phone": "617-564-9831",
            "country": "France"
        },
        {
            "id": 8,
            "firstName": "Kenneth",
            "lastName": "Sato",
            "phone": "617-564-4682",
            "country": "Russia"
        }

    ]


    //tutucu bir alan oluşturuldu
    $scope.specialFilter1 = function (cache) {

        //cache.firstName alanı Kenneth olan değerleri geri döndürdü
        if (cache.firstName == "Kenneth") {
            return true;
        }

    }

    //tutucu bir alan oluşturuldu
    $scope.specialFilter2 = function (cache) {

        //cache.firstName alanı Kenneth olan değerleri geri döndürdü
        if (cache.firstName == "Kenneth") {
            return false;
        }

        else {
            return true;
        }

    }

   //return ifadece true ise göstersin değil ise göstermesin gibisinden bir mantık vardır




});