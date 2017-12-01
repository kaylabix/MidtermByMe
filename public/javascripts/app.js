


var shoppingApp = angular.module('shopping', []); //create a module, like an app obe
shoppingApp.controller('MainCtrl', MainCtrl); //controller in an object that holds logic and data to be later used in the html

MainCtrl.$inject = ['$scope', '$http']; //what the controller depends on so they can be used in our functions below

function MainCtrl($scope, $http) //controller
{
    $scope.getAll = getAll; //Allow all of the folowing functions to be exposed to the html code so html can use the function
    $scope.create = create;
    // $scope.doVote = doVote;
    // $scope.upvote = upvote;
    $scope.addProduct = addProduct;
    // $scope.deleteCandidate = deleteCandidate;

    // //variables
    $scope.products = [];
    $scope.cart = [];

    function getAll()  //get Mongoose database, if successful copy the data into the candidates array
    {
        return $http.get('/products').success(function(data){ 
            angular.copy(data, $scope.products);
        });
    };

    function create(product) //pushes the given candidate onto the candidates array in the Mongoose database
    {
        return $http.post('/products', product).success(function(data){
            $scope.products.push(product);
        });
    };

    // function doVote() //when click on submit votes, goes through each candidate to see if they have a true selected value (what are the value and key??)
    // {

    //     $scope.ballot = $scope.candidates.filter(function(candidate) {
    //         return candidate.selected;
    //     })
    //     $scope.ballot.forEach(upvote);
    // };

    // function upvote(candidate) 
    // {
    //     console.log('in upvote')
    //     return $http.put('/candidates/' + candidate._id)
    //     .success(function(data){
    //         console.log("upvote worked");
    //         candidate.upvote += 1;
    //     });
    // };

    function addProduct()
    {
        var newObj = {Name:$scope.prodName, price: $scope.price, imageURL:$scope.picURL, ordered: 0};
        console.log(newObj);
        create(newObj);
        $scope.getAll();
    }

    function deleteCProduct(product)
    {
        console.log("in delete");
        console.log(product);
        console.log("Deleting Name " + product.Name+" ID "+ product._id);
        $http.delete('/products/' + product._id)
        .success(function(data){
            console.log("delete worked");
        });

        $scope.getAll();
    }

    $scope.getAll();

}