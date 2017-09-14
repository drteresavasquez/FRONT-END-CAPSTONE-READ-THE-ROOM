"use strict";

app.controller("singleExercise", function ($scope, $routeParams, getUserInfo, $location, pushUserStuffFactory) {

    $scope.title = "Submit Your Exercise";
    $scope.adminTitle = "Score this Exercise";
    $scope.submitButtonText = "Save: It Feels Soooo Good!";
    
    $scope.exerciseSubmit = {
        userName:"",
        dateScored: "",
        exName:"",
        exURL:"",
        exerciseId: "",
        milestone:"",
        status:"",
        studentFeedback:"",
        studentRepoLink: "",
        teacherFeedback:"",
        techSkills:"",
        scoredBy:"",
        
    };
    
    console.log("itemId", $routeParams.itemId);
    const showExercise = function () {
        getUserInfo.getSingleExercise($routeParams.itemId)
            .then((data) => {
                $scope.exerciseSubmit = data;
                $scope.exerciseSubmit.id = $routeParams.itemId;
                console.log("$scope.exerciseSubmit", $scope.exerciseSubmit);
            });
    };

    showExercise();

    $scope.submitExercise = ()=>{
        pushUserStuffFactory.updateExerciseStu($scope.exerciseSubmit);
    };
    
});