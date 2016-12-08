angular.module('idcyta', ['ui.bootstrap', 'ngSanitize'])
	.controller('ArticleController', ArticleController)
	.factory('ArticleService', ArticleService);

function ArticleController($sce, ArticleService) {
	var vm = this;
	vm.valueEnable = 0;
	vm.oneAtATime = true;

	vm.chapters = ArticleService.chapters;
	vm.subChapters = ArticleService.subChapters;
	vm.openVol = openVol;

	vm.status = {
	  isCustomHeaderOpen: false,
	  isFirstOpen: true,
	  isFirstDisabled: false
	};

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

	var subChapters = [
		{	
			title: 'CARACTERIZACIÓN DE LAS PROTEÍNAS DEL FRIJOL AYOCOTE (<em>Phaseolus coccineus L.</em>)', 
			authors: 'Teniente-Martínez G., González Cruz L., Cariño-Cortés R., Bernardino-Nicanor A'
		}, 
		{
			title: 'CARACTERIZACIÓN DE POBLACIONES DE MEDIOS HERMANOS DE MAÍZ, DE LA REGIÓN DEL BAJÍO PARA SU USO EN LA INDUSTRIA TORTILLERA',
			authors: 'Gutiérrez Tlahque Jorge, Sebastian Mar Luz Arely , Ramírez Pimentel Juan Gabriel, Raya Pérez Juan Carlos'
		}
	];

	return {
		chapters : chapters,
		subChapters: subChapters
	}
}