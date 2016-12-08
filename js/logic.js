angular.module('idcyta', [])
	.controller('ArticleController', ArticleController)
	.factory('ArticleService', ArticleService);

function ArticleController(ArticleService) {
	var vm = this;
	vm.chapters = ArticleService.chapters;
	vm.valueEnable = 0;

	vm.openVol = openVol;

	function openVol(val) {
		vm.valueEnable = val;
	}
}


ArticleService.$inject = [];
function ArticleService() {
	var chapters = [
		'Cereales, leguminosas y oleaginosas', 'Microbiología y Biotecnología', 'Frutas y hortalizas', 'Nutrición y Nutracéuticos', 'Lácteos', 
		'Evaluación sensorial', 'Cárnicos', 'Desarrollo de nuevos productos', 'Alimentos funcionales', 'Otros'
	];

	return {
		chapters : chapters
	}
}