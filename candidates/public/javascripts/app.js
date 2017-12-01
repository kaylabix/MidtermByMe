


var votingApp = angular.module('voting', []); //create a module, like an app obe
votingApp.controller('MainCtrl', MainCtrl); //controller in an object that holds logic and data to be later used in the html

MainCtrl.$inject = ['$scope', '$http']; //what the controller depends on so they can be used in our functions below

function MainCtrl($scope, $http) //controller
{
    $scope.getAll = getAll; //Allow all of the folowing functions to be exposed to the html code so html can use the function
    $scope.create = create;
    $scope.doVote = doVote;
    $scope.upvote = upvote;
    $scope.addCandidate = addCandidate;
   // $scope.incrementUpvotes = incrementUpvotes;
    $scope.deleteCandidate = deleteCandidate;

    //variables
    $scope.candidates = [];
    $scope.ballot = [];

    function getAll()  //get Mongoose database, if successful copy the data into the candidates array
    {
        return $http.get('/candidates').success(function(data){ 
            angular.copy(data, $scope.candidates);
        });
    };

    function create(candidate) //pushes the given candidate onto the candidates array in the Mongoose database
    {
        return $http.post('/candidates', candidate).success(function(data){
            $scope.candidates.push(candidate);
        });
    };

    function doVote() //when click on submit votes, goes through each candidate to see if they have a true selected value (what are the value and key??)
    {
        console.log("In doVote")
        angular.forEach($scope.candidates, function(value,key) {
            if(value.selected)
            {
                $scope.upvote(value);
                $scope.ballot.push(value);
            }
        });

    };

    function upvote(candidate) 
    {
        return $http.put('/candidates' + candidate._id + '/upvote')
        .success(function(data){
            console.log("upvote worked");
            candidate.upvotes += 1;
        });
    };

    function addCandidate()
    {
        var newObj = {Name:$scope.formContent,votes:0};
        console.log(newObj);
        create(newObj);
        $scope.getAll();
    }

    function deleteCandidate(candidate)
    {
        console.log("in delete");
        console.log(candidate);
        console.log("Deleting Name " + candidate.Name+" ID "+candidate._id);
        $http.delete('/candidates/' + candidate._id)
        .success(function(data){
            console.log("delete worked");
        });

        $scope.getAll();
    }

    $scope.getAll();

}