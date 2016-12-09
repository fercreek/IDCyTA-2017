angular.module('idcyta', ['ui.bootstrap', 'ngSanitize'])
	.controller('ArticleController', ArticleController)
	.factory('ArticleService', ArticleService);

function ArticleController($sce, ArticleService) {
	var vm = this;
	vm.valueEnable = 0;
	vm.oneAtATime = true;
	vm.showAccordion = false;
	vm.selectedArticles = [];

	vm.chapters = ArticleService.chapters;
	vm.subChapters = ArticleService.subChapters;
	vm.openVol = openVol;
	vm.selectChapter = selectChapter;
	vm.updateOpenStatus = updateOpenStatus;

	vm.status = {
	  isCustomHeaderOpen: false,
	  isFirstOpen: true,
	  isFirstDisabled: false,
	  isOpen: false
	};



	function openVol(val) {
		vm.valueEnable = val;
	}

	function selectChapter(section, chapter) {
		vm.showAccordion = true;
		vm.selectedArticles = vm.subChapters[section-1][chapter];
		console.log(vm.selectedArticles);
	}

	function updateOpenStatus() {
		vm.status.isOpen = vm.selectedArticles.articles.some(function(item){
		  return item.isOpen;
		});
	}
}


ArticleService.$inject = [];
function ArticleService() {
	var chapters = [
		'Cereales, leguminosas y oleaginosas', 'Microbiología y Biotecnología', 'Frutas y hortalizas', 'Nutrición y Nutracéuticos', 'Lácteos', 
		'Evaluación sensorial', 'Cárnicos', 'Desarrollo de nuevos productos', 'Alimentos funcionales', 'Otros'
	];


	var subChapters1 = [
		{
			order: 1,
			articles: [
				{	
					title: 'CARACTERIZACIÓN DE LAS PROTEÍNAS DEL FRIJOL AYOCOTE (<em>Phaseolus coccineus L.</em>)', 
					authors: 'Teniente-Martínez G., González Cruz L., Cariño-Cortés R., Bernardino-Nicanor A',
					file: './files/volume1/1/1/1.pdf'
				}, 
				{
					title: 'CARACTERIZACIÓN DE POBLACIONES DE MEDIOS HERMANOS DE MAÍZ, DE LA REGIÓN DEL BAJÍO PARA SU USO EN LA INDUSTRIA TORTILLERA',
					authors: 'Gutiérrez Tlahque Jorge, Sebastian Mar Luz Arely , Ramírez Pimentel Juan Gabriel, Raya Pérez Juan Carlos',
					file: './files/volume1/1/1/2.pdf'
				},
				{
					title: 'ESTUDIO DE LA DEGRADACIÓN DE ÁCIDOS GRASOS CONTENIDOS EN ACEITES COMESTIBLES SOMETIDOS A ESTRÉS TÉRMICO',
					authors: 'Barajas Gómez J. J., Castañeda Ovando A., Contreras López, E., Martínez Torres E., Añorve Morga J., González Olivares L. G., Jaimez Ordaz J.',
					file: './files/volume1/1/1/3.pdf'
				},
				{
					title: 'PROPIEDADES DIELÉCTRICAS DE MAÍZ MEXICANO: BLANCO Y PIGMENTADO',
					authors: 'Sosa Morales, M.E., Torrealba Meléndez, R., Olvera Cervantes, J.L., Corona Chávez, A.',
					file: './files/volume1/1/1/4.pdf'
				},
				{
					title: 'ANÁLISIS DE PERFIL DE TEXTURA EN MASAS Y DONAS DE HARINA DE TRIGO ADICIONADAS CON HARINA DE CÁSCARA DE <em>Oxalis tuberosa</em>',
					authors: 'Ramos Rivera E.M., Moreno Velázquez A.L., Romero Muñoz I.G., Piloni Martini J., Hernández Uribe J.P., Quintero Lira A., Soto Simental S. y Güemes Vera N.',
					file: './files/volume1/1/1/5.pdf'
				},
				{
					title: 'ANÁLISIS DE PERFIL DE TEXTURA EN MASAS DE SEMOLA DE TRIGO ADICIONADAS CON HARINA DE CHAYOTEXTLE (<em>Sechium edule</em>)',
					authors: 'González Victoriano L., Romero Muñoz I.G., Moreno Velázquez A.L., Cruz Cuevas J., Hernández Uribe J.P., Soto Simental S. y Güemes Vera N.',
					file: './files/volume1/1/1/6.pdf',
				},
				{
					title: 'EFECTO DE LA EXTRUSIÓN-COCCIÓN EN LA FORMACIÓN DE ALMIDÓN RESISTENTE',
					authors: 'Néder Suarez D, Quintero Ramos A, Amaya Guerra C.A',
					file: './files/volume1/1/1/7.pdf'
				},
				{
					title: 'EFECTO DEL CAMPO ELÉCTRICO SOBRE LOS ÁCIDOS GRASOS EN EL ACEITE DE OLIVA VIRGEN',
					authors: 'Ariza Ortega J. A., Coyotl Huerta J., Moreno Ortíz E., Alanís García E., Yañez Coello A. M. Guevara Mora M. A.',
					file: './files/volume1/1/1/8.pdf'
				},
				{
					title: 'CALIDAD DE PAN PRECOCIDO ALMACENADO EN REFRIGERACIÓN Y EN CONGELACIÓN',
					authors: 'Vázquez Chávez L., González Sánchez D. y Cervantes Arista C.',
					file: './files/volume1/1/1/9.pdf'
				},
				{
					title: 'EFECTO DE GOMA GUAR SOBRE LAS CARACTERISTICAS REOLOGICAS DE MASA DE TRIGO Y PROPIEDADES FÍSICAS Y SENSORIALES DE PAN COCIDO CON VAPOR',
					authors: 'Vázquez Chávez L., González Sánchez D. y Mojica Ramírez A.',
					file: './files/volume1/1/1/10.pdf'
				},
				{
					title: 'CARACTERIZACIÓN DE LAS PROPIEDADES FUNCIONALES DE LA HARINA DE LA SEMILLA DE PAROTA (<em>Enterolobium cyclocarpum</em>)',
					authors: 'Rangel-Martínez N.C., Rincón-Lara V.H., Vázquez-Galindo J., Rodríguez-Pérez M.A.',
					file: './files/volume1/1/1/11.pdf'
				},
				{
					title: 'ELABORACIÓN DE UN BAGEL A BASE DE TRIGO Y AMARANTO (<em>Amaranthus hypochondriacus L.</em>) CON ALTA CALIDAD NUTRIMENTAL',
					authors: 'Argueta Terán K. F., Cruz Barcenas H., Jiménez-Vera V. y Martínez-Manrique E.',
					file: './files/volume1/1/1/12.pdf'
				},
				{
					title: 'HACIA PRODUCTOS SALUDABLES ELABORADOS CON ARROCES RICOS EN MELATONINA',
					authors: 'Setyaningsih, W., García, K.G., Rodríguez, M. C., Palma, M., Barroso, C.',
					file: './files/volume1/1/1/13.pdf'
				},
				{
					title: 'FACTORES QUE INFLUYEN EN LA COMPOSICION DE ACIDOS GRASOS DESTILADOS DE SOYA (<em>Glycine max L.</em>)',
					authors: 'Amaya-Guerra C., Rodríguez-Rodríguez J., Caballero-Mata P., Alanís-Guzmán G., Aguilera-González C., Báez-González J., Moreno Limón S., Núñez-González A.',
					file: './files/volume1/1/1/14.pdf'
				},
				{
					title: 'INFLUENCIA DEL MÉTODO DESENGRASADO EN LAS CARACTERÍSTICAS FISICOQUÍMICAS Y ESTRUCTURALES DE AISLADOS PROTEICOS DE CACAHUATE',
					authors: 'Almazán-Rodríguez L.I., González-Francisco M., Mora-Escobedo R., Robles-Ramírez M.C.',
					file: './files/volume1/1/1/15.pdf'
				},
				{
					title: 'EFECTO DE LA INCORPORACIÓN DE LECHE DE SOYA Y HARINA DE AMARANTO EN LA FORMULACIÓN DE UN PANQUÉ A BASE DE HARINA CLORINADA SOBRE EL CONTENIDO DE PROTEÍNA, TEXTURA Y ACEPTACIÓN',
					authors: 'González-Fernández A, Morales-Garza S, Treviño-Garza E, Guajardo-Flores S, Pérez-Carrillo E',
					file: './files/volume1/1/1/16.pdf'
				},
				{
					title: 'CAMBIOS FISICOQUÍMICOS EN HARINAS NIXTAMALIZADAS DE MAÍZ Y SORGO COMO UNA FUNCIÓN DEL TIEMPO DE REPOSO',
					authors: 'Gutiérrez Oñate M. P., Martínez Soto G., Hernández Becerra E., Rodríguez García M. E.',
					file: './files/volume1/1/1/17.pdf'
				},
				{
					title: 'ESTUDIO COMPARATIVO DE LAS PROPIEDADES QUÍMICAS Y FÍSICAS DE LA SÉMOLA DE TRIGO DURUM',
					authors: 'Fragoso Trejo L, Román-Gutiérrez A.D',
					file: './files/volume1/1/1/18.pdf'
				},
				{
					title: 'EVALUACIÓN DE UN MÉTODO PARA LA DETECCIÓN DE PLAGUICIDAS ANTICOLINESTERASA EN SUBPRODUCTOS DE LA REFINACION DE ACEITE VEGETAL',
					authors: 'Cantú Obregón H, Gómez Verastegui A, Aguilera González C, Rodríguez Rodríguez J, Núñez González A.',
					file: './files/volume1/1/1/19.pdf'
				},
				{
					title: 'ACTIVIDAD ANTIHIPERTENSIVA DE HIDROLIZADOS PROTEÍNICOS OBTENIDOS DE FRIJOL BAYO (<em>Phaseolus vulgaris L.</em>)',
					authors: 'Tovar Benítez Tomás, Cristian Jiménez Martínez, Gloria Dávila Ortiz',
					file: './files/volume1/1/1/20.pdf'
				},
				{
					title: 'ELABORACIÓN DE GALLETA CON MAÍZ NIXTAMALIZADO Y DIFERENTES TIPOS DE ALMIDÓN',
					authors: 'Gutiérrez-Mendívil KL, Treto-Padrón AL, Frías-Escobar A, Pérez-Carrillo E, Guajardo-Flores S.',
					file: './files/volume1/1/1/21.pdf'
				}
			]
		},
		{
			order: 2,
			articles: [
				{
					title: 'AGENTES INFECCIOSOS DE <em>Litopenaeus vannamei</em> (BOONE, 1931) Y SU RELACIÓN CON LOS PÁRAMETROS FÍSICOQUÍMICOS DE TRES DIFERENTES SISTEMAS DE CULTIVO EN EL GOLFO DE MÉXICO',
					authors: 'Galaviz Silva L, Pérez Treviño KC, Gutiérrez Salazar GJ y Molina Garza ZJ',
					file: './files/volume1/1/2/22.pdf'
				},
				{
					title: 'Descripción de la microbiota de los ciprínidos (<em>Cyprinus carpio</em>) de la Laguna de Salinillas, Anáhuac, Nuevo León, México',
					authors: 'Molina Garza ZJ, Pérez Treviño KC, Iruegas Buentello FJ y Galaviz Silva L',
					file: './files/volume1/1/2/23.pdf'
				},
				{
					title: 'EFICIENCIA DESINFECTANTE DEL PERÓXIDO DE HIDRÓGENO AL 3 Y 4 % EN EL LAVADO DE LECHUGA ROMANA (<em>Lactuca sativa L',
					authors: 'EFICIENCIA DESINFECTANTE DEL PERÓXIDO DE HIDRÓGENO AL 3 Y 4 % EN EL LAVADO DE LECHUGA ROMANA (<em>Lactuca sativa L',
					file: './files/volume1/1/2/24.pdf'
				},
				{
					title: '',
					authors: '',
					file: ''
				}
			]
		}
	];

	var subChapters2 = [
		{
			order: 1,
			articles: [
				{
					title: '',
					authors: '',
					file: ''
				}
			]
		}
	];

	var subChapters3 = [
		{
			order: 1,
			articles: [
				{
					title: '',
					authors: '',
					file: ''
				}
			]
		}
	];

	var subChapters = [subChapters1, subChapters2, subChapters3];

	return {
		chapters : chapters,
		subChapters: subChapters
	}
}