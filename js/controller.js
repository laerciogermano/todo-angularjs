'use strict';

angular.module('todo').controller('TodoController', ['$scope', '$rootScope','$state',
	function($scope, $rootScope, $state) {
		
		$scope.todos = [];
		

		// $scope.todos = getTodos();
		getTodos(function(obj, index){
			$scope.todos[index] = obj;
			$scope.todos[index].date = new Date($scope.todos[index].date);
		});
		
		// Salva todos os lembretes em localStorage
		function saveTodos(){
			var json = JSON.stringify($scope.todos);
			localStorage.todos = json;
		};


		// Recupera todos os lembretes de localStorage
		function getTodos(callback){
			if(!localStorage.todos) return [];
			var json = JSON.parse(localStorage.todos);
			json.forEach(function(obj, index){
				callback(obj, index);
			});
		};

		
		//	Adiciona lembrete
		$scope.add = function(){
			$scope.todos.push({
				priority : 5,
				color : 'grey',
				title : 'Novo Comentário',
				description : null,
				date : null
			});
		};

		
		//	Remove lembrete
		$scope.del = function(index){
			$scope.todos.splice(index, 1);
			saveTodos();
		};


		$scope.setColor = function(index){
			var todoDate = $scope.todos[index].date;
			var d1 = moment();
			var d2 = moment(todoDate);
			var days = moment.duration(d2.diff(d1)).asDays();
			
			if(days < 0 && days > -1){
				$scope.todos[index].color = 'red';
				$scope.todos[index].priority = 4;
			}else if(days > 0 && days <= 5){
				$scope.todos[index].color = 'orange';
				$scope.todos[index].priority = 3;
			}else if(days > 5 ){
				$scope.todos[index].color = 'green';
				$scope.todos[index].priority = 2;
			}else if(days < -1){
				$scope.todos[index].color = 'black';
				$scope.todos[index].priority = 1;
			}

		};


		$scope.$watch('todos', function (newValue, oldValue, scope) {
			if(newValue == oldValue) return;
			console.log('mudando');
			saveTodos();
		}, true);
	}]);
