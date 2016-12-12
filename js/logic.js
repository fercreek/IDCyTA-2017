angular.module('idcyta', ['ui.bootstrap', 'ngSanitize'])
	.controller('ArticleController', ArticleController)
	.factory('ArticleService', ArticleService)
	.directive('scrollOnClick', function() {
	  return {
	    restrict: 'EA',
	    link: function(scope, element, attrs) {
	      element.on('click', function() {
	        $("body").delay(1000).animate({scrollTop: $('#listPanel').offset().top }, 3000);
	      });
	    }
	  }
	});

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
					title: 'CORRELACIÓN DE POLIFENOLES TOTALES, ACTIVIDAD ANTIOXIDANTE Y POTENCIAL REDUCTOR DE PLANTAS NATIVAS DEL SEMIDESIERTO DE COAHUILA',
					authors: 'Ramírez Pérez M., Alvarado Martínez M., Rodríguez González J.G.',
					file: './files/volume1/1/2/25.pdf'
				},
				{
					title: 'CARGA DE BACTERIAS COLIFORMES EN CALOSTRO BOVINO PASTEURIZAD',
					authors: 'González Avalos R, González Avalos J, Peña Revuelta BP, Núñez González LE, Pérez Rebolloso E, Moreno Resendez A, Reyes Carrillo JL',
					file: './files/volume1/1/2/26.pdf'
				},
				{
					title: 'DETECCIÓN DE <em>Salmonella</em> spp. EN TOMATE MEDIANTE MÉTODOS MICROBIOLÓGICOS',
					authors: 'Esquivel-Valenzuela, Berenice; Miguel Ángel Gallegos-Robles, Cirilo Vázquez-Vázquez, Enrique Salazar-Sosa, José Luis García-Hernández, Ignacio Orona-Castillo, Héctor Idilio Trejo-Escareño',
					file: './files/volume1/1/2/27.pdf'
				},
				{
					title: 'CURVA DE RUPTURA DE GLUCOSA OXIDASA. PARTE II. MODELAMIENTO',
					authors: 'Orozco Alvarez C., García Salas S. y Cruz Islas O',
					file: './files/volume1/1/2/28.pdf'
				},
				{
					title: 'EXTRACCIÓN ASISTIDA CON MICROONDAS DE ACEITE ESENCIAL DE ACUYO (<em>Piper auritum</em>) Y EVALUACIÓN DE SU EFECTO ANTIFÚNGICO CONTRA <em>Penicillium expansum</em>',
					authors: 'Gómez Cruz, N.I., Sosa Morales, M.E,López-Malo, A.',
					file: './files/volume1/1/2/29.pdf'
				},
				{
					title: 'EVALUACIÓN DE LA ACTIVIDAD INHIBITORIA DE EXTRACTOS ALCOHÓLICO DE CUATRO PLANTAS CONTRA CEPAS PATÓGENAS DE <em>Serratia marcescens</em> Y <em>Staphylococcus aureus</em>',
					authors: 'Morales Ibarra Á. D., Zamora Saucedo R. D., Rodríguez González J.G. Alvarado Martínez M., Ramírez Pérez M',
					file: './files/volume1/1/2/30.pdf'
				},
				{
					title: 'EFECTO DE LA NISINA SOBRE LA LUMINISCENCIA DE <em>Lysteria monocytogenes</em> EGD-e::pPL2lux-PhlyA',
					authors: 'Vázquez-García, A., De la Fuente-Salcido, N. M., Salcedo-Hernández, R.',
					file: './files/volume1/1/2/31.pdf'
				},
				{
					title: 'ESTADO DE INOCUIDAD DEL SISTEMA PRODUCTIVO DE TOMATE (<em>Lycopersicum esculentum</em> MILL) EN RELACIÓN A LA PRESENCIA DE <em>Escherichia coli</em> O157:H7',
					authors: 'Piedra Vargas JJ, Gallegos Robles MA, Salazar Sosa E, Vázquez Vázquez C, García Hernández JL, Trejo Escareño HI, Orona Castillo I.',
					file: './files/volume1/1/2/32.pdf'
				},
				{
					title: 'EVALUACIÓN DE LA ACTIVIDAD BIOLÓGICA IN VITRO DE FACTORES EXTRACELULARES DE <em>Lactobacillus acidophilus</em> Y <em>Bifidobacterium longum</em> SOBRE LÍNEA CELULAR HT-29 DE CÁNCER DE COLON HUMANO',
					authors: 'Mendoza Flores P., Barrón González M.P., Monreal Cuevas E., Morales Vallarta M.R., Taméz Guerra P., Morales Rubio M.F., Gómez Flores R',
					file: './files/volume1/1/2/33.pdf'
				},
				{
					title: 'BIOSÍNTESIS DE VITAMINA B2 A PARTIR DEL AGUA DE COCIMIENTO DEL MAÍZ UTILIZANDO COMO MICROORGANISMO FERMENTADOR <em>Saccharomyces cereviseae</em>',
					authors: 'Muñoz Gutiérrez D., Hernández Vázquez R.M., Toscano Meléndrez R.J.',
					file: './files/volume1/1/2/34.pdf'
				},
				{
					title: 'EFECTO DEL ESTRÉS OSMÓTICO SOBRE EL DESARROLLO IN VITRO DE PLÁNTULAS DE ALBAHACA <em>Ocimum basilicum L.</em>',
					authors: 'Guerra-Cantú J.A., Moreno-Limón S., Cárdenas-Ávila M.L., González-Luna A.R., Salcedo-Martínez S.M., Sánchez-Sánchez A.A.',
					file: './files/volume1/1/2/35.pdf'
				},
				{
					title: 'EFECTO INHIBITORIO DE BACTERIAS PATÓGENAS CON EXTRACTOS DE XOCONOSTLE ASISTIDOS POR ULTRASONIDO',
					authors: 'Roldán Cruz C. A., Ángeles Santos A., Hernández Fuentes A. D., Santos Fernández S.A., Campos Montiel R. G.',
					file: './files/volume1/1/2/36.pdf'
				},
				{
					title: 'EVALUACIÓN ANTIFÚNGICA IN VITRO DE <em>Gutierrezia sarothrae</em> (HIERBA DEL PASMO) CONTRA <em>Aspergillus flavus</em> Y DETERMINACIÓN DEL CONTENIDO DE FENOLES TOTALES',
					authors: 'Corella Madueño M.A.G., Gálvez-Iriqui A.C., Carvajal Herrera S., Castillón Campaña L.G., Cáñez Carrasco G., Orduño Fragoza O., Martínez Robinson K, G., Vallejo Cohen S.',
					file: './files/volume1/1/2/37.pdf'
				},
				{
					title: 'ANÁLISIS FITOQUÍMICO PRELIMINAR Y EVALUACIÓN DEL EFECTO ANTIMICROBIANO DE HOJA DE <em>Solanum elaeagnifolium',
					authors: 'Ricardo Guadalupe López Ramos, Sonia Yesenia Silva Belmares, Lluvia Itzel López López, María Guadalupe de la Cruz Galicia, Maria Antonia González Zavala',
					file: './files/volume1/1/2/38.pdf'
				},
				{
					title: 'DETERMINACIÓN DE AGREGADOS DE BETALACTOGLOBULINA EN LECHE MEDIANTE ESPECTROSCOPÍA VIBRACIONAL DE INFRARROJO',
					authors: 'Corona Motolinia N., Delgado Macuil R., Espinosa Ruiz H., Martinez Valencia B.',
					file: './files/volume1/1/2/39.pdf'
				},
				{
					title: 'MODIFICACIÓN DE LAS PROPIEDADES MECÁNCAS DE PELÍCULAS BIODEGRADABLES EN FUNCIÓN DE LAS CONDICIONES AMBIENTALES DE ALMACENAMIENTO',
					authors: 'Aguirre-Loredo R.Y., Velázquez G.',
					file: './files/volume1/1/2/40.pdf'
				},
				{
					title: 'ESTUDIO DE ABSORCIÓN, ACUMULACIÓN Y POTENCIAL PARA LA REMEDIACIÓN DE SUELO CONTAMINADO POR PLOMO USANDO <em>Ambrosia ambrosioides</em>',
					authors: 'Contreras-Pinto L A, Valencia Castro C M, De la Fuente-Salcido N M, Linaje Treviño M S, Trejo Calzada R',
					file: './files/volume1/1/2/41.pdf'
				},
				{
					title: 'CAPACIDAD ANTIMICÓTICA DE PELÍCULAS COMESTIBLES CON CARVACROL Y EUGENOL PARA INHIBIR <em>Rhizopus stolonifer</em> EN SISTEMA MODELO Y TOMATE (<em>Physalis ixocarpa Brot.</em>)',
					authors: 'Coyotl Huerta J., Guevara Mora M. A., López Mejía O. A., Flores Morales A.',
					file: './files/volume1/1/2/42.pdf'
				},
				{
					title: 'ACTIVIDAD ANTIOXIDANTE DE EXTRACTOS OBTENIDOS POR FERMENTACIÓN EN ESTADO SÓLIDO DEL OLOTE DE MAÍZ DESTINADOS PARA LA INDUSTRIA ALIMENTICIA',
					authors: 'Pilotzi-Mendoza, V., García-Ignacio, H.M., Sánchez Minutti, L., Grandes-Blanco, I.A., García Dávila, J., Castro-Corona, A y García-Barrientos, R.',
					file: './files/volume1/1/2/43.pdf'
				},
				{
					title: 'CARACTERIZACIÓN DE HONGOS EN PULPA DE MANGO FRESCA Y PROCESADA Y CREACIÓN DE UN CEPARIO',
					authors: 'Vargas-Ortega AG, Abraham-Juárez MR, Olalde Portugal V',
					file: './files/volume1/1/2/44.pdf'
				},
				{
					title: 'OPTIMIZACIÓN DE LA PRODUCCIÓN Y ACTIVIDAD ANTIMICROBIANA DE BACTERIOCINAS SINTETIZADAS POR CEPAS AISLADAS DE BEBIDAS FERMENTADAS MEXICANAS',
					authors: 'Pérez-Villanueva M.P., Vázquez-García A., De la Fuente-Salcido N.M., Barboza-Corona J.E.',
					file: './files/volume1/1/2/45.pdf'
				},
				{
					title: 'EFECTO DE LA NUEZ MOSCADA (<em>Myristica fragrans</em>) SOBRE EL CRECIMIENTO DE <em>Listeria monocytogenes</em>',
					authors: 'Varillas-Torres J.M., Dávila-Márquez R.M., Navarro-Cruz A.R., Avila-Sosa R., Vera-López O., Lazcano-Hernández M.',
					file: './files/volume1/1/2/46.pdf'
				},
				{
					title: 'INHIBICIÓN DE <em>Porphyromonas gingivalis</em> POR <em>Cinnamomum verum</em> <em>E Illicium verum</em>',
					authors: 'Melendez Anzures F.E., Barrón González M.P.*, Rodríguez Garza R.G., Morales Vallarta M.R. y Elizondo Herrera A',
					file: './files/volume1/1/2/47.pdf'
				},
				{
					title: 'ACTIVIDAD ANTIFÚNGICA POR CONTACTO DE VAPOR DE ANTIMICROBIANOS DE ORIGEN NATURAL ADICIONADOS A PELÍCULAS COMESTIBLES DE ALMIDÓN EN <em>Rhizopus</em> SPP',
					authors: 'Camacho-Proo, J.E., Avila-Sosa, R., Navarro-Cruz, A.R., Dávila-Márquez, R.M., Vera-López, O.',
					file: './files/volume1/1/2/48.pdf'
				},
				{
					title: ' BIOPROSPECCIÓN DE LA PLANICIE DE INUNDACIÓN DEL PARQUE ESTATAL CAÑÓN DE FERNÁNDEZ, DURANGO, MÉXICO: BÚSQUEDA DE AGENTES BIOACTIVOS',
					authors: 'García Pérez A.P., Ceniceros Vargas P., Lazalde Ruelas D., Hernández Terán F., Valencia Castro, C.M., Barboza-Corona JE., De la Fuente-Salcido N.M.',
					file: './files/volume1/1/2/49.pdf'
				},
				{
					title: 'DESARROLLO DE METODOLOGÍA PARA LA TRANSFORMACIÓN GENÉTICA DE ESPECIES DE AGAVE MEDIADA POR <em>Agrobacterium tumefaciens</em> Y BASADO EN EL PROCESO DE ORGANOGÉNESIS',
					authors: 'Gutiérrez Aguilar P. R., Gil-Vega K.C., Simpson J.',
					file: './files/volume1/1/2/50.pdf'
				},
				{
					title: 'PRUEBAS IN VITRO DE UN SELLADOR POST-ORDEÑO CON BACTERIOCINAS DE <em>Bacillus thuringiensis</em> PARA PREVENIR MASTITIS',
					authors: 'Villarreal Prieto J.M., Díaz León M.A. , Torres Salazar J.E., Valencia Castro C.M., Linaje Treviño M.S., Barboza Corona J.E., De la Fuente Salcido N.M.',
					file: './files/volume1/1/2/51.pdf'
				},
				{
					title: 'EVALUACIÓN PRELIMINAR DE LA TOXICIDAD DEL ZUMO DE <em>Citrus sinensis L.</em>',
					authors: 'Solís Salas L, Silva Belmares S, Belmares Cerda R, Cruz Hernández M, Guzmán Ceferino J',
					file: './files/volume1/1/2/52.pdf'
				},
				{
					title: 'NUEVO PÉPTIDO ANTIMICROBIANO TEN PRODUCIDO POR <em>Bacillus thuringiensis</em> SUBSP tenebrionis',
					authors: 'García Pérez A.P., De la Fuente-Salcido N.M., Barboza-Corona J.E.',
					file: './files/volume1/1/2/53.pdf'
				},
				{
					title: 'ANÁLISIS PRELIMINAR DE LAS CONCENTRACIONES MÍNIMAS INHIBITORIAS DE BACTERIOCINAS DE CEPAS MEXICANAS DE <em>Bacillus thuringiensis</em>',
					authors: 'Díaz León, M.A.; De la Fuente Salcido, N.M.',
					file: './files/volume1/1/2/54.pdf'
				},
				{
					title: 'DIAGNÓSTICO MICROBIOLÓGICO DE <em>Salmonella</em> SPP. EN MUESTRAS DE AMBIENTES AVÍCOLAS',
					authors: 'García-Amador C.L, Gallegos-Robles M. A, Vázquez-Vázquez C, Salazar-Sosa E, García-Hernández J.L, Orona-Castillo I, Trejo-Escareño H.I.',
					file: './files/volume1/1/2/55.pdf'
				},
				{
					title: 'EVALUACIÓN DEL CONTENIDO DE PROTEINAS DE LA BIOMASA DE <em>Spirulina (Arthrospira)</em> MAXIMA CULTIVADA EN CONDICIONES AMBIENTALES EN BIOREACTORES',
					authors: 'Vázquez Pérez, R.N., Hernández Uribe, F., Villegas Aguilera, M.M., Martínez Murillo, R., López García, K.E., Pérez Barragán, C.E. y Arredondo Vega, B.O.',
					file: './files/volume1/1/2/56.pdf'
				},
				{
					title: 'ADSORCIÓN Y DESORCIÓN DE GLUCOSA OXIDASA',
					authors: ' Orozco Alvarez C., García Salas S. y Hernández Sánchez E',
					file: './files/volume1/1/2/57.pdf'
				}
			]
		},
		{
			order: 3,
			articles: [
				{
					title: 'ATRACCIÓN DE INSECTOS-PLAGA POR TRAMPAS DE COLORES EN JITOMATE, CEBOLLA Y MAÍZ EN LA REGIÓN DE IRAPUATO, GUANAJUATO',
					authors: 'Martínez-Jaime O.A., Salas-Araiza M.D., Bucio-Villalobos C.M., Cabrera-Oviedo A.C. y Navarro-López F.A.',
					file: './files/volume1/1/3/58.pdf'
				},
				{
					title: 'DETERMINACIÓN DE PECTINA TOTAL (ÁCIDO GALACTURÓNICO) EN PEPINO DE TIPO HOLANDÉS',
					authors: 'Aviña Galván Iván, Contreras Martínez Cristina Sarai, Corona Jiménez Edith, Carranza Concha José',
					file: './files/volume1/1/3/59.pdf'
				},
				{
					title: 'DETERMINACIÓN DE PIGMENTOS EN ORÉGANO (<em>Poliomintha bustamanta</em> B. L. TURNER.) EN DOS CONDICIONES DE CRECIMIENTO',
					authors: 'Guerra-Cantú J. A., Moreno-Limón S., Martínez-Rodríguez. A., Gámez-González H., Núñez-González M. A., Moreno-Buentello O. M.',
					file: './files/volume1/1/3/60'
				},
				{
					title: 'MÉTODO PRELIMINAR PARA LA DETERMINACIÓN DE CONTAMINANTES EMERGENTES MEDIANTE CROMATOGRAFÍA DE FLUÍDOS SUPERCRITICOS EN JUGO DE FRUTAS',
					authors: 'Salvatierra Stamp V, Zea Velázquez F,, González Nieves A, Ceballos Magaña S, González-González Jorge , Muñiz Valencia R',
					file: ' ./files/volume1/1/3/61.pdf'
				},
				{
					title: 'ELABORACIÓN Y CARACTERIZACIÓN DE VINO DE FRUTAS E INFUSION DE HIERBAS',
					authors: 'Ronquillo Tellez AL., Lazcano Rocha VM., Pérez Xochipa I., Cabrera Hilerio S., Lazcano Hernández MA.',
					file: './files/volume1/1/3/62.pdf'
				},
				{
					title: ' DESARROLLO Y CARACTERIZACIÓN DE UN PRODUCTO ARÁNDANO-MIEL',
					authors: 'Ronquillo Tellez AL., Lazcano Rocha MV, Lazcano Hernández MA., Navarro Cruz AR., Dávila Márquez RM.',
					file: './files/volume1/1/3/63.pdf'
				},
				{
					title: 'CARACTERIZACIÓN FÍSICO-QUÍMICA DE LA SEMILLA DE CHICAYOTA (<em>Cucurbita argyrosperma</em> SORORIA)',
					authors: 'Bautista Justo M., Barragán Romero I., Martínez Soto G., Camarena Aguilar E., Barboza-Corona J.E. y León Galván F.',
					file: './files/volume1/1/3/65.pdf'
				},
				{
					title: 'EFECTO DE LA APLICACIÓN DE PULSOS ELÉCTRICOS DE ALTO VOLTAJE EN LAS CARACTERÍSTICAS FISICOQUÍMICAS DE PULPA DE DIFERENTES GENOTIPOS DE TUNAS',
					authors: 'González Aguayo E., Campos Montiel R. G., Pinedo Espinoza J. M., Contreras Esquibel J. C., Hernández Fuentes A. D',
					file: './files/volume1/1/3/66.pdf'
				},
				{
					title: ' DISTRIBUCIÓN Y DENSIDAD DE CRISTALES DE OXALATO DE CALCIO EN CLADODIOS DE <em>Opuntia streptacantha</em> LEMAIRE, EN FUNCIÓN DE SU PESO',
					authors: ' Palacios Fonseca AJ, De Lira García C, Del Real A, Rodríguez García M E',
					file: './files/volume1/1/3/67.pdf'
				},
				{
					title: 'CALIDAD POSCOSECHA DE TOMATE NATIVO (<em>Solanum lycopersicum</em> L VAR. CERASIFORME) DE MÉXICO, DURANTE SU ALMACENAMIENTO',
					authors: ' López-Palestin, C. U.; Leynes-Garrido, E.; López-Duran, M.C.; Quintero-Lira, A.; Vargas-Torres, A.; Hernández-Fuentes, A. D.',
					file: './files/volume1/1/3/68.pdf'
				},
				{
					title: ' DESARROLLO DE LOS MÉTODOS DE EXTRACCIÓN Y CUANTIFICACIÓN POR GC-FPD EN UN CANDIDATO A MATERIAL DE REFERENCIA DE ACEFATO Y METAMIDOFOS EN AGUACATE',
					authors: 'Ramírez Flores DG, Avila Calderón MA, Villaseñor Ortega F, Arce Osuna M',
					file: './files/volume1/1/3/69.pdf'
				},
				{
					title: 'DETERMINACION DE ACTIVIDAD DE PECTIN METILESTRERASA PARCIALMENTE PURIFICADA DE BAGAZO Y PULPA DE MANGO (<em>Mangifera indica L.</em>) VAR. KEITT',
					authors: ' Díaz-Cruz, C. A.; Regalado, C.; Morales-Sánchez, E.; Velazquez, G.; Amaya-Llano, S.',
					file: './files/volume1/1/3/70.pdf'
				},
				{
					title: 'INFLUENCIA DEL TIPO Y TIEMPO DE COCCIÓN EN LA DEGRADACIÓN DE CLOROFILA EN HORTALIZAS',
					authors: 'Bautista-Villarreal M., Núñez-González A., Amaya-Guerra C., Báez-González Juan, Espinoza-Mata A., Rodríguez-Arzave A., Miranda-Velázquez L., Castañeda-Garza E., Cárdena-Ávila M.',
					file: './files/volume1/1/3/71.pdf'
				},
				{
					title: 'IDENTIFICACIÓN MOLERCULAR DE HONGOS FITOPATÓGENOS DE FRESA POR PCR (ITS Y EF-1Α ) Y SUSCEPTIBILIDAD A BACTERIOCINAS DE BACILLUS THURINGIENSIS',
					authors: 'Lafuente-Rincón DF., Barboza-Corona JE., Salcedo-Hernández R., Abraham-Juárez R, Valadez-Lira J.A., Quistián-Martínez D., De la Fuente-Salcido NM',
					file: './files/volume1/1/3/72.pdf'
				},
				{
					title: 'FUNCIONALIDAD DEL ARÁNDANO AZUL (Vaccinium corymbusum L.)',
					authors: 'Aldaba Márquez Janet , Concha Herrera Victoria, Enciso Muñoz Verónica del Carmen, Carranza Concha José',
					file: './files/volume1/1/3/73.pdf'
				},
				{
					title: 'AISLAMIENTO Y CARACTERIZACIÓN DE BACTERIAS PRODUCTORAS DE PÉPTIDOS ANTIMICROBIANOS OBTENIDAS A PARTIR DE LECHE DE CABRA',
					authors: 'Hernández-Saldaña O F, De la Fuente-Salcido N M, Valencia-Posadas M, Barboza-Corona J E',
					file: './files/volume1/1/3/74.pdf'
				},
				{
					title: 'EVALUACIÓN DE ENVASE ACTIVO EN JITOMATE TIPO SALADETTE PARA EL CONTROL DE <em>Botrytis cinérea</em>',
					authors: 'Mendoza Hernández A, Lira Vargas A., Trejo Márquez M',
					file: './files/volume1/1/3/75.pdf'
				},
				{
					title: 'DESARROLLO DE UN ENVASE ACTIVO CON EFECTO ANTIFÚNGICO Y ANTIBACTERIAL CON ACEITE ESENCIAL DE ORÉGANO PARA CONSERVACIÓN DE PAPAYA ‘MARADOL’',
					authors: 'Pontigo-Suárez A. G., Trejo-Márquez M. A., Lira-Vargas A. A.',
					file: './files/volume1/1/3/76.pdf'
				},
				{
					title: 'EXTRACCIÓN DE FIBRA EN RESIDUOS AGROINDUSTRIALES DE PIÑA PARA SU APLICACIÓN EN ALIMENTOS FUNCIONALES',
					authors: 'Rasgado Vázquez S. M., Trejo-Márquez M. A., Pascual-Bustamante S',
					file: './files/volume1/1/3/77.pdf'
				},
				{
					title: 'ESTUDIO COMPARATIVO DEL USO DE ATMÓSFERAS PASIVAS Y ACTIVAS EN LA CONSERVACIÓN DE PAPAYA MARADOL MÍNIMAMENTE PROCESADA',
					authors: 'Reyes Chavarria A. T,, Trejo Márquez Ma. A, Lira Vargas A. A, Pascual Bustamante, S.',
					file: './files/volume1/1/3/78.pdf'
				},
				{
					title: 'EXTRACCIÓN DE ACEITE ESENCIAL DE EUCALIPTO Y SU APLICACIÓN COMO AGENTE ANTIFÚNGICO EN UN ENVASE ACTIVO PARA CONSERVACIÓN DE FRAMBUESA',
					authors: 'Trejo Ramírez V., Trejo-Márquez M. A., Pascual-Bustamante S., Lira Vargas A. A.',
					file: './files/volume1/1/3/79.pdf'
				},
				{
					title: 'CONSERVACIÓN DE VERDOLAGA MÍNIMAMENTE PROCESADA PROVENIENTE DEL SUELO E HIDROPÓNICA, DESINFECTADA CON UN AGENTE A BASE DE COMPUESTOS ',
					authors: 'Contreras-Ortega J. S., Olivares-Torres C. A., Trejo-Márquez M. A., Pascual-Bustamante S., Lira-Vargas A. A.',
					file: './files/volume1/1/3/80.pdf'
				},
				{
					title: 		'DETECCIÓN DE PATULINA EN MANZANA ‘GOLDEN DELICIOUS’ Y EN PRODUCTOS DERIVADOS ELABORADOS INDUSTRIAL Y ARTESANALMENTE COMERCIALIZADOS EN ',
					authors: 	'Hermosillo Moreno G., Quezada-Viay M. Y., Moreno-Lara J., Pascual Bustamante, S., Trejo Márquez M.',
					file: 		'./files/volume1/1/3/81.pdf'
				},
				{
					title: 		'EFECTO DEL GRADO DE TOSTADO EN GRANOS DE CAFÉ DE DIFERENTES REGIONES PRODUCTORAS DE MÉXICO SOBRE EL CONTENIDO DE COMPUESTOS FENÓLICOS, ',
					authors: 	'Lazcano Sánchez E., Trejo Márquez M. A., Pascual Bustamante S., Vargas Martínez M. G.',
					file: 		'./files/volume1/1/3/82.pdf'
				},
				{
					title: 		'DESARROLLO DE UNA BARRA DE NOPAL, AVENA, ARÁNDANO Y AMARANTO REDUCIDA EN AZÚCAR COMO ALIMENTO FUNCIONAL PARA LA POBLACIÓN MEXICANA',
					authors: 	'Velázquez Pichardo J. A, Trejo Márquez M. A., Pascual Bustamante S., Lira Vargas A. A',
					file: 		'./files/volume1/1/3/83.pdf'
				},
				{
					title: 		'APLICACIÓN DE RECUBRIMIENTOS COMESTIBLES ADICIONADOS CON ACEITE ESENCIAL DE ORÉGANO EN PEPINO (<em>Cucumis sativus L.</em>)',
					authors: 	'Sosa Cantero D. D., Trejo Márquez M. A, Lira Vargas A.A., Pascual Bustamante, S.',
					file: 		'./files/volume1/1/3/84.pdf'
				},
				{
					title: 		'PROPIEDADES FISICOQUÍMICAS DE HIGO VAR. KADOTA: APLICACIÓN DE ALTAS PRESIONES HIDROSTÁTICAS A DIFERENTES TIEMPOS Y TEMPERATURAS',
					authors: 	'Moreno-Astorga, J.J., Meza-Velázquez, J.A., Rouzaud-Sandez, O., Aguilera-Ortíz M., Minjares-Fuentes, R., Femenia, A., Candelas-Cadillo, ',
					file: 		'./files/volume1/1/3/85.pdf'
				},
				{
					title: 		'CINÉTICA DE SECADO, TEXTURA Y COLOR DE JÍCAMA (<em>Pachyrhizus erosus</em>) SOMETIDA A DIFERENTES TRATAMIENTOS DE ESCALDADO',
					authors: 	'./files/volume1/1/3/86.pdf',
					file: 		'Rascón Escajeda L. F., Ibarra Espino E., Ramírez Baca P., Peralta Caballero A., Martínez García J. J. Candelas Cadillo M. G'
				}
			]
		},
		{
			order: 4,
			articles: [
				{
					title: 		'PROPIEDADES NUTRACÉUTICAS Y NUTRICIONALES DEL ESCAPO FLORAL DE AGAVE SALMIANA',
					authors: 	'Medina-Galván M.I., González-Cruz L., Juárez-Goiz J.M.S., Bernardino-Nicanor A.',
					file: 		'./files/volume1/1/4/87.pdf'
				},
				{
					title: 		'PRODUCCIÓN DE PROPÓLEO EN CAMPO, RECOLECTADO POR LAS ABEJAS PRODUCTORAS DE MIEL (<em>Apis mellifera</em>)',
					authors: 	'Bucio Villalobos C.M., Navarro López F.A., Martínez Jaime O.A., Torres Morales J.J., García Aguilera E.',
					file: 		'./files/volume1/1/4/88.pdf'
				},
				{
					title: 		'ANÁLISIS FITOQUÍMICO CUALITATIVO Y ACTIVIDAD ANTIOXIDANTE DE EXTRACTO CRUDO METANOLICO DE HOJA <em>Solnum marginatum</em>',
					authors: 	'Guzmán Ceferino J., Silva Belmares S.Y., López López LL. I. , de la Cruz Galicia Ma .G., Solís Salas L. Ma. y Durán Mendoza T.',
					file: 		'./files/volume1/1/4/89.pdf'
				},
				{
					title: 		'DETERMINACIÓN DE LOS CAMBIOS ORIGINADOS POR LOS PROCESOS DE ASADO Y FREÍDO DEL NOPAL VERDURA (<em>Opuntia ficus-INDICA</em>) SOBRE LA CONCENTRACIÓN DE CAROTENOIDES, FENOLES TOTALES Y LA ACTIVIDAD ANTIOXIDANTE',
					authors: 	'Hernández-Castillo JBE, Bernardino-Nicanor A, Juárez-Goiz JMS, González-Cruz L',
					file: 		'./files/volume1/1/4/90.pdf'
				},
				{
					title: 		'SELECCIÓN DE UN MEDIO DE CULTIVO A NIVEL LABORATORIO PARA EL CULTIVO DE LA CIANOBACTERIA <em>Spirulina (Arthrospira) máxima</em> Y CUANTIFICACIÓN DE LOS NUTRACÉUTICOS',
					authors: 	'Quintero Rodríguez, E., Arredondo Vega, B.O., Flores Tavizón E., Virgen Félix, M., Barrera Domínguez, E., Carballo Verduzco, M. G. y Maldonado Macías A. A.',
					file: 		'./files/volume1/1/4/91.pdf'
				},
				{
					title: 		'DETERMINACIÓN DEL POTENCIAL NUTRACÉUTICO EN DIVERSAS FRUTILLA',
					authors: 	'Abraham Juárez MR,, Vargas Ramos NK, García Casarrubias A, Núñez Palenius HG, Martínez Jaime OA, Martínez Soto G, Mercado Flores J',
					file: 		'./files/volume1/1/4/92.pdf'
				},
				{
					title: 		'EFECTO DEL SECADO CONVENCIONAL SOBRE EL CONTENIDO DE POLIFENOLES Y TANINNOS EN LA SEMILLA DE NONI (<em>Morinda citrifolia L.</em>)',
					authors: 	'Durán Mendoza T., Guzmán Ceferino J., López Vázquez R., González Cortes N. y Silva Belmares S.Y.',
					file: 		'./files/volume1/1/4/93.pdf'
				},
				{
					title: 		'UTILIZACIÓN DE UN MÉTODO IN VITRO PARA EVALUAR LA TOXICIDAD DE CHAYA, UNA PLANTA NUTRITIVA UTILIZADA EN MEDICINA TRADICIONAL PARA LA DISMINUCIÓN DEL COLESTEROL',
					authors: 	'Miranda Velásquez L.G., Núñez González M.A., Rodríguez Arzave J.A.',
					file: 		'./files/volume1/1/4/94.pdf'
				},
				{
					title: 		'EVALUACIÓN DEL IMPACTO DE LA INGESTA DE ARÁNDANO SOBRE LOS NIVELES DE COLESTEROL, GLUCOSA Y TRIGLICÉRIDOS EN RATAS WISTAR ALIMENTADAS CON DIETAS RICAS EN LÍPIDOS',
					authors: 	'Betancourt Mejorado D.A., García Arellano A.R., Vázquez Rodriguez J.A., Núñez González, M.A., Báez González J.G., Amaya Guerra C.A.',
					file: 		'./files/volume1/1/4/95.pdf'
				}
			]
		},
		{
			order: 5,
			articles: [
				{
					title: 		'AISLAMIENTO Y CARACTERIZACIÓN DE THERMOPHILUS DEL SUERO DE LECHE PARA LA SUSTITUCIÓN DE CULTIVOS LÁCTICOS EN LA ELABORACIÓN DE QUESO TIPO CHIHUAHUA',
					authors: 	'Nuñez Flores G. de J., Cortez Muñoz J. M., Jiménez Rodríguez J. J., Prieto Contreras L. F., Concha Herrera V.',
					file: 		'./files/volume1/1/5/96.pdf'
				},
				{
					title: 		'DETECCIÓN DE GLICOMACROPÉPTIDO (GMP) EN LECHE DE CABRA MEDIANTE UN SISTEMA ELISA COMO INDICATIVO DE ADULTERACION CON SUERO DE QUESERÍA',
					authors: 	'Chávez-Vela N.A, Salinas-Miralles E.M, Jáuregui-Rincón J, Medina-Ramírez I.E., Pérez-Téllez D.M, Guerrero-Roque. F.A, Bon-Rosas-F.',
					file: 		'./files/volume1/1/5/97.pdf'
				},
				{
					title: 		'DETERMINACIÓN DE CA++ EN EL CANDIDATO A MATERIAL DE REFERENCIA DE LECHE ENTERA EN POLVO (DMR-274F), POR ESPECTROMETRÍA DE MASAS CON FUENTE DE PLASMA ACOPLADO INDUCTIVAMENTE (ICP-MS)',
					authors: 	'Mercado Pedraza, E. B., Arce Osuna, M., Villaseñor Ortega, F. y Regalado Contreras, L.',
					file: 		'./files/volume1/1/5/98.pdf'
				},
				{
					title: 		'EFECTO DE LA ADICIÓN DE MUCÍLAGO DE DOS VARIEDADES (<em>Opuntia ficus-indica</em> Y <em>Opuntia atropes</em>) EN LECHE CRUDA SOBRE EL CONTENIDO DE MESÓFILAS AEROBIAS Y COLIFORMES TOTALES',
					authors: 	'Aguilar-Barrera J.L., Valdez-Alarcón J.J., Val-Arreola D., Martinez-Flores H.E., Pérez-Sánchez R.E. y Ortiz-Rodriguez R.',
					file: 		'./files/volume1/1/5/99.pdf'
				},
				{
					title: 		'ANÁLISIS DE <em>Brucella</em> Y <em>Salmonella</em> PRESENTES EN LA LECHE DE VACA, EMPLEANDO ESPECTROSCOPIA INFRARROJA (FTIR).',
					authors: 	'Pérez Coyotl A., González Quintero M., Morales Maldonado M., Castañeda Roldan E., Delgado Macuil R., Rojas López M., Zaca Moran O. y Orduña Díaz A.',
					file: 		'./files/volume1/1/5/100.pdf'
				},
				{
					title: 		'CONTENIDO DE CÉLULAS SOMÁTICAS EN LECHE PRODUCIDA EN EL VALLE DE TULANCINGO, HIDALGO',
					authors: 	'González-Montiel L, Franco-Fernández M J y Monroy-Durán R.',
					file: 		'./files/volume1/1/5/101.pdf'
				},
				{
					title: 		'CARACTERIZACIÓN MICROBIOLÓGICA DE UN QUESO TIPO PROVOLONE',
					authors: 	'López-Orozco M. , Mercado-Flores J., Martínez-Soto G. y Abraham-Juárez M. R.',
					file: 		'./files/volume1/1/5/102.pdf'
				},
				{
					title: 		'EVALUACIÓN DE LOS CAMBIOS FISICOQUÍMICOS EN LECHE CRUDA DE CABRAS EXPUESTAS A BACTERIOCINAS DE <em>Bacillus thuringiensis</em>',
					authors: 	'Alvarez-Ibarra PB; Abraham-Juárez MR; Barceló-Acosta A; Gutiérrez-Chávez AJ; Avilés-Ruiz R; Barboza-Corona E; De la Fuente-Salcido N; León-Galván F; Valencia-Posadas M',
					file: 		'./files/volume1/1/5/103.pdf'
				}
			]
		},
		{
			order: 6,
			articles: [
				{
					title: 		'ENCAPSULACIÓN DEL JARABE DE AGAVE',
					authors: 	'Sánchez Quezada V, Concha Herrera V, Prieto Contreras L F, Carranza Téllez J',
					file: 		'./files/volume1/1/6/104.pdf'
				},
				{
					title: 		'EVALUACIÓN DE LOS ATRIBUTOS DE TEXTURA: SUAVIDAD Y ESPONJOSIDAD DE UN PAN TIPO PAMBAZO CON DISTINTAS FORMULACIONES',
					authors: 	'Espino Manzano, Salvador Omar; Alfaro Rodríguez, Rosa Hayde y Güemes Vera, Norma',
					file: 		'./files/volume1/1/6/105.pdf'
				},
				{
					title: 		'VALIDACIÓN DE UN INSTRUMENTO PARA LA EVALUACIÓN DE UN TÉ',
					authors: 	'Roblero Cruz B.G., Palacios Pola G., Zea Caloca S.G., Utrilla Vázquez M.',
					file: 		'./files/volume1/1/6/106.pdf'
				},
				{
					title: 		'GELATINA A BASE DE SUERO DE QUESERÍA Y EXTRACTO DE SOYA',
					authors: 	'Ayanegui Burguete R, Zea Caloca SG',
					file: 		'./files/volume1/1/6/107.pdf'
				},
				{
					title: 		'ACEPTABILIDAD DE TAMALES ELABORADOS CON DIFERENTES SUSTITUTOS DE MANTECA DE CERDO',
					authors: 	'Peréz-Soto E, Soto-Simental S, Güemes-Vera N y González-Montiel L.',
					file: 		'./files/volume1/1/6/108.pdf'
				},
				{
					title: 		'CARACTERIZACIÓN DE LA TEXTURA DE UN QUESO TIPO PROVOLONE',
					authors: 	'López-Orozco M., Mercado-Flores J., Martínez-Soto G. y Abraham-Juárez M. R.',
					file: 		'./files/volume1/1/6/109.pdf'
				},
				{
					title: 		'ESTIMACIÓN DE LA VIDA DE ANAQUEL MEDIANTE PRUEBAS ACELERADAS EN FRESA ENTERA EN BOLSA DE POLIETILENO Y PULPA DE FRESA CONGELADA',
					authors: 	'Mercado-Flores J., López-Orozco M., Martínez-Soto G. y Abraham-Juárez M. R.',
					file: 		'./files/volume1/1/6/110.pdf'
				}
			]
		},
		{
			order: 7,
			articles: [
				{
					title: 		'ANÁLISIS DEL COMPORTAMIENTO DE UN CULTIVO INICIADOR, EN UN EMBUTIDO FERMENTADO, DE CARNE DE CERDO, CARNE RECUPERADA MECÁNICAMENTE DE POLLO Y TEXTURIZADO DE SOYA',
					authors: 	'Morales Cruz J., Roca Argüelles M., Esparza García V.M',
					file: 		'./files/volume1/1/7/111.pdf'
				}
			]
		},
		{
			order: 8,
			articles: [
				{
					title: 		'DESARROLLO DE UNA HARINA PREPARADA CON BASE EN MAÍZ NIXTAMALIZADO POR EXTRUSIÓN',
					authors: 	'Patlan Velazquez L F, Cruz y Victoria M T, Gallardo Navarro Y T',
					file: 		'./files/volume1/1/8/112.pdf'
				},
				{
					title: 		'PEPINO FRANCÉS EN RODAJAS CON RECUBRIMIENTO COMESTIBLE ENCHILADO',
					authors: 	'Rodríguez Ramírez Edgar Omar, Rueda Enríquez Sandra Margarita, Lara Sagahón Alma Virginia',
					file: 		'./files/volume1/1/8/113.pdf'
				},
				{
					title: 		'CARACTERIZACIÓN FÍSICO-QUÍMICA DE BOTANAS HORNEADAS POR RADIACIÓN DE MICROONDAS A PARTIR DE HARINAS DE CHAYOTEXTLE (<em>Sechium edule</em>) Y PAPA DULCE (<em>Ipomoea batatas</em>)',
					authors: 	'Cruz-Villegas, R., Hernández-Uribe, J.P. y Güemes-Vera N.',
					file: 		'./files/volume1/1/8/114.pdf'
				},
				{
					title: 		'FORMULACIÓN DE MICROEMULSIONES A BASE DE ACEITE DE CANOLA Y LECITINA DE SOYA',
					authors: 	'Trejo Salvador G., Pimentel González D.J., Aguirre Álvarez G., Garrido Islas J., Díaz Monroy G. y Campos Montiel R.G.',
					file: 		'./files/volume1/1/8/115.pdf'
				},
				{
					title: 		'USO DE HARINA INTEGRAL DEL CUERPO FRUCTÍFERO DE <em>Pleurotus ostreatus</em> PARA SUPLEMENTAR TORTILLA',
					authors: 	'Ayerdy Rudecindo I, Téllez-Tellez M, Acosta-Urdapilleta L, Díaz-Godínez G',
					file: 		'./files/volume1/1/8/116.pdf'
				},
				{
					title: 		'USO DEL HONGO <em>Pycnoporus sanguineus</em> PARA LA ELABORACIÓN DE BEBIDAS',
					authors: 	'Acosta-Urdapilleta L., Obscura N., Rossano R.',
					file: 		'./files/volume1/1/8/117.pdf'
				},
				{
					title: 		'EVALUACIÓN DEL PROCESO DE OBTENCIÓN DEL NÉCTAR DE MANZANA GOLDEN DELICIOUS (<em>Malus domestica</em>) A PARTIR DE DOS MÉTODOS DE CONSERVACIÓN: PASTEURIZACIÓN – VACÍO',
					authors: 	'Gutiérrez Casiano N., Vivar Vera G., Canseco López A. M., Vicente Martínez J., Hernández Guevara O, Ortiz Sánchez C. A.',
					file: 		'./files/volume1/1/8/118.pdf'
				},
				{
					title: 		'ELABORACIÓN DE UN TÉ A BASE DE GARDENIA (<em>G. jasminoides</em>) Y EVALUACIÓN DE SU ACTIVIDAD ANTIOXIDANTE',
					authors: 	'Ortiz-Sánchez C.A., García-Herrera T., Gutiérrez-Casiano N., Sánchez-Bazán I., Sánchez-Bazán L., Martínez-Reyes J.A., Canseco-López A. M.',
					file: 		'./files/volume1/1/8/119.pdf'
				},
				{
					title: 		'DESARROLLO DE UN PRODUCTO A BASE DE SOYA (<em>Glycine max</em>) ENRIQUECIDO CON OMEGA 3 E INULINA',
					authors: 	'Trujillo Esquivel C.I., Gutiérrez Silva G., Valenzuela Navarro C., Herrera Cadena M.M. y Ramírez Olivas R.',
					file: 		'./files/volume1/1/8/120.pdf'
				},
				{
					title: 		'DESARROLLO DE DOS PRODUCTOS DE CONSUMO POPULAR CON LOS BENEFICIOS NUTRICIONALES DE AVENA (<em>Avena savita</em>) Y NOPAL (<em>Opuntia ficus</em>)',
					authors: 	'Ramírez Díaz M.C., Ruíz López D.G., Téllez Arellano L.H., Herrera Cadena M.M., Graciano Verdugo A.Z., Otero León C.B., Ramírez Olivas, R.',
					file: 		'./files/volume1/1/8/121.pdf'
				},
				{
					title: 		'ELABORACIÓN DE UN PRODUCTO TIPO MACHACA A BASE DE MÚSCULO DE CALAMAR (<em>Dosidicus gigas</em>) DESHIDRATADO',
					authors: 	'Encinas Cárdenas A.G., Quintana Romero L.A., Valenzuela Olivas D.G., Murrillo Ortega R.V., Canizales Rodriguez D.F., Graciano Verdugo A.Z., Ramirez Olivas R., Ocaño Higuera V.M., Herrera Cadena M.M., Herrera Carbajal S.',
					file: 		'./files/volume1/1/8/122.pdf'
				},
				{
					title: 		'PROPIEDADES FISICOQUÍMICAS DE CEREAL PIGMENTADO CON POLVO DE TUNA ROJA',
					authors: 	'Ruiz-Gutiérrez M. G., Amaya-Guerra C. A., Quintero-Ramos A., Pérez-Carrillo E., Báez-González J. G. , Núñez-González M. A.',
					file: 		'./files/volume1/1/8/123.pdf'
				},
				{
					title: 		'PASTA TIPO TALLARÍN A BASE DE HARINA DE AMARANTO (<em>Amaranthus tricolor</em>), SÉMOLA Y SALVADO DE TRIGO (<em>Triticum aestivum</em>)',
					authors: 	'Gutiérrez Lizárraga B. G., Andrade Martínez M. G., Canett Romero R., Sánchez Mariñes R.I., Canizales Rodríguez D.F., Otero León C.B.',
					file: 		'./files/volume1/1/8/124.pdf'
				},
				{
					title: 		'DESARROLLO DE UNA GELATINA HIPOCALÓRICA, CON FRESA Y RICA EN PROTEÍNA',
					authors: 	'Bautista Justo M, Mendoza Rodríguez N, León Galván F, Camarena Aguilar E, De la Fuente Salcido N, Alanís Guzmán MG, García Díaz CL',
					file: 		'./files/volume1/1/8/125.pdf'
				},
				{
					title: 		'EXTRACCIÓN Y PURIFICACIÓN DE TIMOL Y CARVACROL EN ORÉGANO (<em>Lippia graveolens kunth</em>) PARA SU EVALUACIÓN BIOLÓGICA SOBRE SEMILLAS DE MAIZ CEBÚ (<em>Zea mays L.</em>) Y SORGO (<em>Sorghum bicolor L. Moench</em>) COMO FITORREGULADOR NATURAL',
					authors: 	'Gámez González H., Solis Flores V., Escamilla Victorino M., Hernández Fernández E., Francisco Zavala García, Moreno Limón S',
					file: 		'./files/volume1/1/8/126.pdf'
				},
				{
					title: 		'ESTANDARIZACIÓN Y OPTIMIZACIÓN DE UN PROCESO DE ELABORACIÓN ARTESANAL DE QUESO PROVOLONE AHUMADO',
					authors: 	'Oros Flores Z. S, Abraham Juárez Ma. Del R, Garnica Rodriguez B. C, León Galván Ma. F, Martínez Soto G, Pérez Becerra L y Mares_Mares E',
					file: 		'./files/volume1/1/8/127.pdf'
				},
				{
					title: 		'EFECTO DEL TIPO DE CARRAGENINA SOBRE LAS PROPIEDADES DE PELÍULAS COMESTIBLES DE CASEINATO SE SODIO',
					authors: 	'Gutiérrez Cruz R., Barragán Alvarado A., Totosaus A.',
					file: 		'./files/volume1/1/8/128.pdf'
				},
				{
					title: 		'ELABORACIÓN DE PASTA DE PESCADO TEXTURIZADA, CON AYUDA DE LA ENZIMA TRANSGLUTAMINASA',
					authors: 	'Zepeda-Zamora C.A., Navarro-Cruz A.R. , Avila-Sosa R., Dávila-Márquez R.M., Vera-López O., Melgoza-Palma N., Lazcano-Hernández M.',
					file: 		'./files/volume1/1/8/129.pdf'
				},
				{
					title: 		'ELABORACION DE GOLOSINAS TIPO GOMITA BAJAS EN AZUCAR Y ADICIONADAS CON EXTRACTOS DE VERDURAS',
					authors: 	'Rodríguez-Moctezuma K.E., Carreón-Espinoza M.G., Avila-Sosa R., Vera-López O., Dávila-Márquez R.M., Lazcano-Hernández M., Navarro-Cruz A.R.',
					file: 		'./files/volume1/1/8/130.pdf'
				},
				{
					title: 		'ELABORACIÓN DE ENVASADOS A PARTIR DEL HONGO COMESTIBLE <em>Pleurotus djamor VAR. ROSEUS</em> CON RECETAS TRADICIONALES',
					authors: 	'Gómez Cortes A, Acosta-Urdapilleta L, Villegas Villarreal E',
					file: 		'./files/volume1/1/8/131.pdf'
				},
				{
					title: 		'FORMULACIÓN Y DESARROLLO DE UN PROCESO ARTESANAL PARA LA PRODUCCIÓN DE UN ALIMENTO TIPO CHOCOLATE A PARTIR DE LA SEMILLA DE <em>Crescentia alata</em> (CIRIÁN)',
					authors: 	'Palacios Sánchez Vanessa Karen',
					file: 		'./files/volume1/1/8/132.pdf'
				},
				{
					title: 		'BEBIDA ARTESANAL TIPO FRAPPÉ A BASE DE TRIGO (<em>Triticum durum</em>) TOSTADO',
					authors: 	'Aispuro Vizcarra A.E., Flores Chávez D.P., Zavala Contreras B., Herrera Carbajal S., Graciano Verdugo A.Z., Canizales Rodríguez D.F., Ocaño Higuera V.M',
					file: 		'./files/volume1/1/8/133.pdf'
				},
				{
					title: 		'USO DE LA HARINA DE AMARANTO DE DOS VARIEDADES (DGETA Y GABRIELA) EN LA PREPARACIÓN DE GALLETAS TIPO BARRA',
					authors: 	'Flores-Morales A.; Mendoza Medina LE.; Bernal Muñoz R.; Silva Garcia N.',
					file: 		'./files/volume1/1/8/134.pdf'
				},
				{
					title: 		'DESARROLLO DE UNA PAPILLA REHIDRATABLE PARA LA NUTRICIÓN DEL ADULTO MAYOR',
					authors: 	'Meza Martínez M.J., Ortega Ruíz A.L., Sánchez Acosta D.L., Herrera Cadena M.M., Ramírez Olivas R.',
					file: 		'./files/volume1/1/8/135.pdf'
				},
				{
					title: 		'MAZAPÁN ADICIONADO CON HARINA DE GARBANZO COMO ALIMENTO FUNCIONAL',
					authors: 	'Ortega Miramontes M, Perez Blancarte K, Ramírez Porras E.',
					file: 		'./files/volume1/1/8/136.pdf'
				},
				{
					title: 		'EVALUACIÓN DE UN TOTOPO HORNEADO DE MAÍZ AZUL CON HUITLACOCHE (USTILAGO MAYDIS)',
					authors: 	'Amador Rodríguez-KY, Pérez-Cabrera LE, Posadas-Del Río FA, Chávez-Vela NA, Martínez-Bustos F, Sandoval-Cardoso ML, Guevara-Lara F',
					file: 		'./files/volume1/1/8/137.pdf'
				},
				{
					title: 		'DESARROLLO DE UNA BARRA NUTRITIVA A PARTIR DE CEREALES Y LEGUMINOSAS: ANÁLISIS PROXIMAL Y SENSORIAL',
					authors: 	'Gómez-Flores, G. A., Gómez-Acuña, V. H., Pérez-Díaz, C. A., Chávez-Murillo, C. E.',
					file: 		'./files/volume1/1/8/138.pdf'
				}
			]
		},
		{
			order: 9,
			articles: [
				{
					title: 		'CAPACIDAD ANTIOXIDANTE Y CONTENIDO FENÓLICO DE UVA BLANCA (<em>Vitis vinifera L.</em>) SIN SEMILLA',
					authors: 	'Aviña de la Rosa Dulce María del Rosario, Carranza Téllez José, Vásquez Huitrón Bertha Alicia, Carranza Concha José',
					file: 		'./files/volume1/1/9/139.pdf'
				},
				{
					title: 		'EFECTO DE LOS EDULCORANTES EN LAS INTERACCIONES FISICOQUIMICAS EN UNA BEBIDA A BASE DE SEMILLA DE AGUACATE Y MUCILAGO DE NOPAL',
					authors: 	'Hernández-Huerta H.A., Padilla-Camberos E., Espinosa-Andrews H., Villanueva-Rodriguez S.',
					file: 		'./files/volume1/1/9/140.pdf'
				},
				{
					title: 		'EXPLORACIÓN DE LAS INTERACCIONES FLAVONOIDE/POLISACÁIDO PRESENTES EN UN JUGO DE LIMA O NARANJA AGRIA INDUSTRIALIZADO: SISTEMA MODELO',
					authors: 	'Estrada Sierra N. A, Padilla Camberos E, Lugo Cervantes E del C, Villanueva Rodríguez S.J',
					file: 		'./files/volume1/1/9/141.pdf'
				},
				{
					title: 		'EFECTO DE ULTRASONIDO EN LA DESCRISTALIZACIÓN DE LA MIEL',
					authors: 	'Ángeles Santos A., Pimentel González D.J., González Vargas E.A, Solís Silva R., Campos Montiel R.G.',
					file: 		'./files/volume1/1/9/142.pdf'
				},
				{
					title: 		'DETERMINACIÓN DE ACTIVIDAD ANTIOXIDANTE EN EXTRACTOS ACUOSOS DE CEDRÓN (<em>Aloysia triphylla</em>)',
					authors: 	'Ramírez-Godínez J, Jaimez-Ordaz J, Añorve-Morga J, Salazar-Pereda V, Castañeda-Ovando, González Olivares G y Contreras López E',
					file: 		'./files/volume1/1/9/143.pdf'
				},
				{
					title: 		'EFECTO DE LA ADICIÓN DE UNA EMULSIÓN MÚLTIPLE CON LA FASE ACUOSA EXTERNA GELADA SOBRE LAS PROPIEDADES VISCOELÁSTICAS DE UN PRODUCTO LÁCTEO FERMENTADO BAJO EN GRASA',
					authors: 	'Ruíz Garzón R., García Nava E., Maldonado Fuentes C., Vernon-Carter E.J., Román-Guerrero A.*',
					file: 		'./files/volume1/1/9/144.pdf'
				},
				{
					title: 		'EVALUACIÓN DE SUBPRODUCTOS AGROINDUSTRIALES COMO POSIBLES PREBIÓTICOS',
					authors: 	'Hernández-Alcántara A. M., Díaz-Vela J., Totosaus A., Pérez-Chabela M. L.',
					file: 		'./files/volume1/1/9/145.pdf'
				},
				{
					title: 		'EFECTO DE LA TEMPERATURA SOBRE LOS COMPUESTOS FENÓLICOS Y LA CAPACIDAD ANTIOXIDANTE EN EL RESIDUO DE LA PRODUCCIÓN DE JUGO DE MANDARINA (<em>Citrus reticulata</em> SATSUMA)',
					authors: 	'Esparza-Martínez F. J., Miranda-López R., Guzmán-Maldonado S. H.',
					file: 		'./files/volume1/1/9/146.pdf'
				},
				{
					title: 		'EFECTO DE HARINA DE CÁSCARAS DE TUNA Y PIÑA SOBRE LAS CARACTERISTICAS FISICOQUÍMICAS Y TEXTURALES DE SALCHICHAS COCIDAS INOCULADAS CON BACTERIAS ÁCIDO LÁCTICAS',
					authors: 	'Díaz-Vela J., Totosaus A., Pérez-Chabela, M. L.',
					file: 		'./files/volume1/1/9/147.pdf'
				},
				{
					title: 		'CARACTERIZACIÓN FISICOQUÍMICA Y MICROBIOLÓGICA DE UNA MERMELADA ELABORADA A BASE DE NOPAL (<em>Opuntia ficus-indica</em>) UTILIZANDO PECTINA INDUSTRIAL Y NATURAL',
					authors: 	'Quintero-Lira A., Piloni-Martíni J., Guemes-Vera N., Gutierrez-Fernández A. K., Garrido-Islas E., Cruz-Arellano V. S',
					file: 		'./files/volume1/1/9/148.pdf'
				},
				{
					title: 		'EFECTO DE LOS EDULCORANTES EN LAS INTERACCIONES FISICOQUÍMICAS EN UNA BEBIDA A BASE DE SEMILLA DE AGUACATE Y MUCILAGO DE NOPAL',
					authors: 	'Hernández-Huerta H.A., Padilla-Camberos E., Espinosa-Andrews H., Villanueva-Rodríguez S.',
					file: 		'./files/volume1/1/9/149.pdf'
				},
				{
					title: 		'COMPARACION DE LA ACTIVIDAD ANTIOXIDANTE DE PASTAS SECAS ALIMENTICIAS TIPO ESPAGUETI ELABORADAS CON LEGUMINOSAS',
					authors: 	'Pilotzi-Mendoza, V., Michicotl-Meneses, M.M., Sánchez-Mundo M.L., Hernández-Nava R., García-Ignacio, H.M., Tlecuitl-Beristain, S., y García-Barrientos R.',
					file: 		'./files/volume1/1/9/150.pdf'
				},
				{
					title: 		'EVALUACIÓN DE ENZIMAS XILANASAS PARA EL DESARROLLO UN PRODUCTO FUNCIONAL EN PANIFICACIÓN',
					authors: 	'Hernández Mendoza M., Román-Gutiérrez Alma Delia',
					file: 		'./files/volume1/1/9/151.pdf'
				},
				{
					title: 		'INULINA, NUEVA ALTERNATIVA EN LA ELABORACIÓN DE HELADOS DE YOGUR',
					authors: 	'Araiza Alcántara K.I., Guerra Palos I. del C., López López A., Herrera Carbajal S., Ramírez Olivas R., Herrera Cadena M.M.',
					file: 		'./files/volume1/1/9/152.pdf'
				},
				{
					title: 		'EVALUACIÓN DEL MOSTO PARA LA OBTENCIÓN DE UN ALIMENTO FUNCIONAL',
					authors: 	'Gutiérrez Osnaya Laura Jacqueline, Mónica Hernández Mendoza, María Angélica Gutiérrez Nava, Edith Angelina Vásquez Siordia, Alma Delia Román-Gutiérrez',
					file: 		'./files/volume1/1/9/153.pdf'
				},
				{
					title: 		'BIOPÉPTIDOS ENCRIPTADOS DE NUEZ (<em>Carya illinoinensis</em>) RESISTENTES A ALTAS TEMPERATURAS PARA LA FORMULACIÓN DE UN ALIMENTO FUNCIONAL',
					authors: 	'Clara Aguilar Bravo, Everardo Mares Mares, Mayela Bautista Justo, Cristina del Rincón Castro, Leandro Gabriel Ordoñez Acevedo, Ma. Fabiola León Galván',
					file: 		'./files/volume1/1/9/154.pdf'
				}
			]
		},
		{
			order: 10,
			articles: [
				{
					title: 		'EVALUACIÓN DE MÉTODOS DE EXTRACCIÓN DE PROLINA COMO INDICADOR DE OSMOPROTECCIÓN EN DOS ESPECIES DE LA FAMILIA CHENOPODIACEAE',
					authors: 	'González Luna, A.R., Moreno Limón, S., Núñez González, M.A., Garza Aguirre, R.A., Sánchez Sánchez, A.A., Guerra Cantú, J.A.',
					file: 		'./files/volume1/1/10/155.pdf'
				},
				{
					title: 		'IDENTIFICACIÓN DE COMPUESTOS AGONISTAS A RECEPTORES INVOLUCRADOS EN EL SÍNDROME METABÓLICO DE UN EXTRACTO DE HOJA DE <em>Moringa oleífera</em>',
					authors: 	'Chávez Macías J. A, Carvallo-Ruiz T., y González-León A.',
					file: 		'./files/volume1/1/10/156.pdf'
				},
				{
					title: 		'REVISIÓN DE LOS COMPUESTOS RESPONSABLES DEL OLOR Y SABOR DEL TEQUILA',
					authors: 	'Soto-Romero L., Gutiérrez-Osnaya L. J. y Fragoso-Trejo L.',
					file: 		'./files/volume1/1/10/157.pdf'
				},
				{
					title: 		'PERFIL QUÍMICO Y ORGANOLÉPTICO DE LOS COMPUESTOS VOLATILES DEL MEZCAL',
					authors: 	'Gómez-Zamora O, De Jesús-Fuentes KI, Peñafiel-López F y Tovar-Hernández P',
					file: 		'./files/volume1/1/10/158.pdf'
				},
				{
					title: 		'POTENCIAL PROBIÓTICO DE BACTERIAS AISLADAS DEL PULQUE: UNA REVISIÓN',
					authors: 	'González Mesillas F. Vázquez Castro P., Jaimez Ordaz J. Zúñiga Juárez M. A.',
					file: 		'./files/volume1/1/10/159.pdf'
				},
				{
					title: 		'CAMBIOS EN LA PERMEABILIDAD Y PROPIEDADES MECÁNICAS DE PELÍCULAS BICAPA DE ALGINATO Y QUITOSAN EN DIFERENTES HUMEDADES RELATIVAS',
					authors: 	'Reyes Avalos M. C., Contreras Esquivel J. C., Aguilar González C. N., Montañez Saenz J. C. y Meza Velázquez J. A.',
					file: 		'./files/volume1/1/10/160.pdf'
				},
				{
					title: 		'ÍNDICE DE SAPONIFICACIÓN DE CINCO MANTECAS DETERMINADO MEDIANTE UN MICROMÉTODO',
					authors: 	'Rodríguez Arzave, J. A., Maldonado Salazar, J. M., Muro Campillo, M.A., Miranda Velásquez, L.G.',
					file: 		'./files/volume1/1/10/161.pdf'
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
					title: 'Incremento de compuestos bioactivos en muffins elaborados con harina de quinoa bajo dos condiciones de procesamiento',
					authors: 'C. Maldonado-Garfias, M.A.C. Centeno-Rodríguez, O.D. León-Gómez, A. Rosas- Hernández y A. Cerón-García',
					file: './files/volume1/3/1/1.pdf'
				},
                {
					title: 'Efecto de las condiciones de horneo sobre el desarrollo de color y su relación con la capacidad antioxidante en pan',
					authors: 'J. Peñaloza-Espinosa, M.P Salgado-Cruz, J.J Chanona-Pérez, G. Calderón-Domínguez',
					file: './files/volume1/3/1/2.pdf'
				},
				{
					title: 'Efecto en la capacidad antioxidante, fenoles y flavonoides totales del pan bolillo parcialmente sustituido con harina de fibra de mango',
					authors: 'A. Rosas-Hernández, C. Maldonado-Garfia, M.A.C. Centeno-Rodríguez, Ma. R. Abraham-Juárez y A. Cerón-García',
					file: './files/volume1/3/1/3.pdf'
				},
				{
					title: 'Desarrollo de una formulación para elaborar una galleta a base de trigo (<em>Triticum aestivum</em>) y chía (<em>Salvia hispánica l.</em>) sabor chocolate con alta calidad nutrimental',
					authors: 'A.M. García-Lozano, V. Jiménez-Vera y E. Martínez-Manrique',
					file: './files/volume1/3/1/4.pdf'
				},
				{
					title: 'Compuestos bioactivos y capacidad antioxidante en galleta salada a base de desechos agroindustriales',
					authors: 'M. Hernández-Ayala, D. Castañeda-Arriaga, MdL. Corona-Castro, A.K. Rangel- Contreras, M.J. Flores-Mosqueda y A. Cerón García',
					file: './files/volume1/3/1/5.pdf'
				},
				{
					title: 'Calidad física y culinaria de arroz',
					authors: 'V. Cerda-Cova y L. Vázquez-Chávez',
					file: './files/volume1/3/1/6.pdf'
				},
				{
					title: 'Cambios en compuestos bioactivos asociados al procesamiento en semillas de mijo (<em>Pennisetum glaucum</em>)',
					authors: 'I.J. Belmán-Ramírez, A. Cerón-García, M. E. Sosa-Morales y J.A. Gómez Salazar',
					file: './files/volume1/3/1/7.pdf'
				},
				{
					title: 'Características de hot cakes elaborados con diferentes mezclas de harinas de; amaranto, arroz y papa',
					authors: 'P. Velásquez-Meléndez y L. Vázquez –Chávez',
					file: './files/volume1/3/1/8.pdf'
				},
				{
					title: 'Elaboración de pan por el método directo, adicionando una solución láctea de kéfir',
					authors: 'P. Velásquez-Meléndez y L. Vázquez-Chávez',
					file: './files/volume1/3/1/9.pdf'
				},
				{
					title: 'Diferentes masas de trigo prefermentadas usadas para mejorar la calidad del pan',
					authors: 'V. Cerda-Cova y L .Vázquez-Chávez',
					file: './files/volume1/3/1/10.pdf'
				},
				{
					title: 'Análisis comparativo de extracción secuencial y extracción directa de proteínas de reserva de nuez (<em>Carya illinoinensis</em>)',
					authors: 'J.A. López-Castro, L.G. Ordoñez-Acevedo y M.F. León-Galván',
					file: './files/volume1/3/1/11.pdf'
				},
				{
					title: 'Composición y caracterización de las proteínas de las principales variedades de frijol (<em>Phaseolus vulgaris l.</em>) que se cultivan en el estado de Jalisco, México',
					authors: 'M.T. Espino-Sevilla, L.R. Pérez-Bernala, M.Z. Reyna-Villela, D. Rojas-Bravoa , E.C. Lugo-Cervantes',
					file: './files/volume1/3/1/12.pdf'
				},
				{
					title: 'Evaluación de las propiedades fisicoquímicas de almidón de frijol modificado hidrotérmicamente',
					authors: 'M. Rojas-del Muro, C. A. Pérez-Díaz, O.J. Ramos-Herrera, J. de la Rosa-Millán y C.E. Chávez-Murillo',
					file: './files/volume1/3/1/13.pdf'
				},
				{
					title: 'Evaluación de la actividad quelante de cobre de hidrolizados proteínicos del grano de amaranto (<em>Amaranthus hypochondriacus</em>)',
					authors: 'A. Becerril-Ramírez, F.M.H. Paredes-Ruiz, J. López-Sánchez y J. Soriano-Santos',
					file: './files/volume1/3/1/14.pdf'
				},
			]
		},
		{
		    order: 2, 
		    articles: [
		        {
					title: 'Actividad antagónica de levaduras killer contra <em>Alternaria</em> spp. In vitro',
					authors: 'Marquina-Luévano, M.P. Sangorrín, M. Elizondo-Zertuche, R. Treviño-Rangel , G.M. González, E.R. Robledo-Leal',
					file: './files/volume1/3/2/15.pdf'
				},
				{
					title: 'Evaluación de la producción de xilitol por <em>Debaryomyces hansenii</em> en medios a base de hidrolizados no detoxificados de bagazo de sorgo rb-paloma',
					authors: 'E.M. Ledezma-Orozco, G.C. Rodríguez-Castillejos, G. Bustos Vázquez, C. Lizarazo- Ortega',
					file: './files/volume1/3/2/16.pdf'
				},
				{
					title: 'Bioluminiscencia para medir nisina, aplicación en quesos y optimización',
					authors: 'Z.S. Oros-Flores, B.E. García-Almendárez y R. Salcedo-Hernández',
					file: './files/volume1/3/2/17.pdf'
				},
				{
					title: 'Análisis fisicoquímico de agua purificada distribuida por pipas móviles en la ciudad de Reynosa, Tamaulipas; México',
					authors: 'S.R. Paz-Delgado, G.C. Rodríguez-Castillejos, L.M. Isidro-Requejo, M.C. Hernández Jiménez',
					file: './files/volume1/3/2/18.pdf'
				},
				{
					title: 'Utilización de bacterias lácticas termotolerantes probióticas en la fermentación de masas ácidas para panificación',
					authors: 'N. Saucedo-Briviesca, A.M. Hernández-Alcántara, L.C. Vázquez-Chávez, M.L. Pérez- Chabela',
					file: './files/volume1/3/2/19.pdf'
				},
				{
					title: 'Aislamiento y caracterización molecular del gen “Ahp” con capacidad antihipertensiva obtenido de semilla de <em>Cucurbita argyrosperma sororia</em>',
					authors: 'M.F. León-Galván, M.A. Rocha-Mendoza, M.C. Del Rincón-Castro y E. Mares-Mares',
					file: './files/volume1/3/2/20.pdf'
				},
				{
					title: 'Crecimiento de bacterias ácido lácticas en presencia de una concentración crítica de inhibición de Na2SeO3',
					authors: 'X. Martínez-Ramírez, G. M. Rodríguez-Serrano, E. Contreras-López, J. Añorve-Morga, J. Jaimez-Ordaz, L.G. González-Olivares',
					file: './files/volume1/3/2/21.pdf'
				},
				{
					title: 'Solución electrolizada de superoxidación con ph neutro (SoluVet®) como nueva tecnología en la desinfección de huevo para plato y embrionado contaminados con <em>Listeria monocytogenes</em>',
					authors: 'A. Rivera-García, L. Santos-Ferro, J. Medina-Gudiño, J. C. Ramírez-Orejel, P. Ochoa- Galván, D. Páez-Esquilano, E. Andrade-Esquivel y J. A. Cano-Buendía',
					file: './files/volume1/3/2/22.pdf'
				},
				{
					title: 'Actividad antibacteriana y capacidad antioxidante en diferentes extractos de <em>Prosopis glandulosa</em> de Coahuila, México',
					authors: 'A. Valenzuela-Balderas, A. Pimentel-Zapata, E. Gutiérrez-Reyes, M.A. Ávila-Damián, Linaje-Treviño, M.S., Valencia-Castro, C.M., De la Fuente-Salcido, N.M.',
					file: './files/volume1/3/2/23.pdf'
				},
				{
					title: 'Biotransformación del ácido linoleico (AL) en ácido linoleico conjugado (CLA) por bacterias lácticas nativas de queso adobera artesanal del estado de Jalisco',
					authors: 'S. Jiménez-Espinoza, M. Estarrón-Espinosa, M.R. Kirchmayr, E.C. Lugo-Cervantes , S.J. Villanueva-Rodríguez , M.D. García-Parra',
					file: './files/volume1/3/2/24.pdf'
				},
				{
					title: 'Detección molecular del virus de la hepatitis a (VHA) en lechuga y brócoli en el municipio de Irapuato, Guanajuato',
					authors: 'C. Ramírez-Martínez, M.F. León-Galván, y M.C. Del Rincón-Castro',
					file: './files/volume1/3/2/25.pdf'
				},
				{
					title: 'Identificación y susceptibilidad a los antibióticos de bacterias cultivables, deterioradoras, aisladas de queso ranchero fresco',
					authors: 'M. S. Maldonado-López, B. García-Almendarez, R. Salcedo-Hernández, J. E. Barboza-Corona',
					file: './files/volume1/3/2/26.pdf'
				},
				{
					title: 'Evaluación de solución electrolizada de superoxidación pH neutro SoluVet® sobre calidad del huevo para plato y supervivencia de embriones de pollo, contaminados con <em>Campylobacter jejuni</em>',
					authors: 'L. Santos-Ferro, A. Rivera-García, J. Medina-Gudiño, J.C. Ramírez-Orejel, D. Paez- Esquiliano, P. Ochoa-Galván, E. Andrade-Esquivel, J.A Cano-Buendía',
					file: './files/volume1/3/2/27.pdf'
				},
				{
					title: 'Determinación de la estabilidad y condiciones de almacenamiento de las quitinasas: ChiA74, ChiABtt y ChiA Nima',
					authors: 'M.C. Bravo-Rivas, L.E. Casados-Vázquez, J.E. Barboza-Corona',
					file: './files/volume1/3/2/28.pdf'
				},
				{
					title: 'Efecto sinérgico de sistemas binarios de bacteriocinas de <em>Bacillus thuringiensis</em>-nisina contra bacterias patógenas',
					authors: 'M.A. Díaz-León, E. Gutiérrez-Reyes, C.M. Valencia-Castro, J.E. Barboza-Corona, R. Salcedo-Hernández, N.M. De la Fuente-Salcido',
					file: './files/volume1/3/2/29.pdf'
				},
				{
					title: 'Efecto de la quitinasa chia 74 sobre levaduras silvestres aisladas de un queso artesanal',
					authors: 'M. Rico-Vela, Y. Ceballos-Polina, R.G. Campos-Montiel, J.E. Barboza-Corona, R. Salcedo-Hernández',
					file: './files/volume1/3/2/30.pdf'
				},
				{
					title: '31.	Evaluación de actividad fungicida de extractos crudos de raíces de <em>Heliopsis longipes</em> contra <em>Alternaria</em> sp, <em>Fusarium</em> sp y <em>Rizophus</em> SP',
					authors: 'G. Morales-López, I.C. Torres-Arteaga, M. E. Salas-Galván, D. Méndez-Valencia, G. Carreño-Aguilera, J. C. Baltazar Vera, A. Ramos-García',
					file: './files/volume1/3/2/31.pdf'
				},
				{
					title: 'Actividad antagónica de levaduras killer frente a hongos del género <em>Aspergillus</em> sección <em>nigri</em>',
					authors: 'I.J. Gutiérrez-Martínez, L.M. Nieto-Ojeda, M.P. Sangorrín, M. Elizondo-Zertuche, R. Treviño-Rangel, G.M. González, E.R. Robledo-Leal',
					file: './files/volume1/3/2/32.pdf'
				},
				{
					title: 'Características fisicoquímicas y sensoriales de pan fermentado con bacterias lácticas termotolerantes probióticas',
					authors: 'N. Saucedo-Briviesca, A.M. Hernández-Alcántara, L.C. Vázquez-Chávez, M.L. Pérez-Chabela',
					file: './files/volume1/3/2/33.pdf'
				},
				{
					title: 'Actividad antibacteriana y perfil fitoquímico de <em>Ariocarpus fissuratus</em> (Engelmann) Shumann1',
					authors: 'E. Gutiérrez-Reyes, N. De La Fuente-Salcido, Ma. Del S. Linaje-Treviño. F. Hernández- Terán., C. M. Valencia-Castro',
					file: './files/volume1/3/2/34.pdf'
				},
				{
					title: 'Evaluación de la actividad antimicrobiana y perfil fitoquímico del <em>Agave lechuguilla</em> torrey',
					authors: 'D. Ontiveros-Floriano, P.A. Sandoval-Palacios, M.A. Ávila-Damián, N.M. de la Fuente Salcido, Ma. S. Linaje-Treviño, C.M. Valencia-Castro',
					file: './files/volume1/3/2/35.pdf'
				},
			]
		},
		{
		    order: 3, 
		    articles: [
		        {
					title: 'Tratamientos poscosecha asistidos con microondas para evitar el decaimiento en frambuesas (<em>Rubus idaeus L.</em>)',
					authors: 'T. Flores-López, A. Cerón-García, R. Salcedo-Hernández y M.E. Sosa-Morales',
					file: './files/volume1/3/3/36.pdf'
				},
				{
					title: 'Tratamientos hidrotérmicos asistidos con microondas para manzana golden nacional',
					authors: 'G. del R. Santoyo Haro, A. Cerón García, J.A. Gómez Salazar, M.E. Sosa Morales',
					file: './files/volume1/3/3/37.pdf'
				},
				{
					title: 'Comparación de dos aislados mexicanos del vmap para determinar las causas de infección en una plantación de plantas de papaya tolerantes',
					authors: 'L. Sánchez-Noriega, M. Reinhart-Kirchmayr, B. Rodríguez-Garay y A. Gutiérrez- Mora',
					file: './files/volume1/3/3/38.pdf'
				},
				{
					title: 'Recubrimientos formulados con quitosano y extractos de mezquite para el control de <em>Fusarium verticilloides</em>',
					authors: 'A.N. López-Anchondo, M.S. Linaje-Treviño, C.M. Valencia-C., N.M De la Fuente- Salcido',
					file: './files/volume1/3/3/39.pdf'
				},
				{
					title: '40.	Propiedades fisicoquímicas y nutracéuticas de dos genotipos de maracuyá (<em>Passiflora edulis</em> var. <em>flavicarpa</em>) procedentes de dos regiones de México',
					authors: 'O.A. Martínez-Jaime, M.R. Abraham-Juárez y A. Gómez-Ortega',
					file: './files/volume1/3/3/40.pdf'
				},
				{
					title: 'Cambios en la estructura del almidón jícama (<em>Pachyrhizus erosus</em>) durante el tratamiento térmico por simulación de horneo y su efecto en el índice glicémico',
					authors: 'M. Ramírez-Miranda, M. de la P. Salgado-Cruz, G. Calderón-Domínguez',
					file: './files/volume1/3/3/41.pdf'
				},
				{
					title: 'Efecto de las variables de secado convectivo sobre los parámetros de color de rodajas de carambola (<em>Averrhoa carambola</em> L.)',
					authors: 'X.C. Lara-Cervantes, I. Paniagua-Martínez, F. Morales-Trejo, y R.I. Castillo-Zamudio',
					file: './files/volume1/3/3/42.pdf'
				},
				{
					title: 'Análisis digital de imágenes (ADI) cómo método de clasificación de dos variedades de fresa',
					authors: 'S.G. Jiménez Castillo, L. E. Paredes Ávila, L. Sánchez Segura y M. R. Abraham Juárez',
					file: './files/volume1/3/3/43.pdf'
				},
				{
					title: 'Estabilidad de una base dulce de tamarillo (<em>Cyphomandra betacea</em>) conservada por métodos combinados',
					authors: 'G. Preciado-Iñiga, G.G. Amador-Espejo y M.E. Bárcenas-Pozos',
					file: './files/volume1/3/3/44.pdf'
				},
			]
		},
		{
		    order: 4, 
		    articles: [
		        {
					title: 'Análisis fitoquímico cualitativo y evaluación de capacidad nutracéutica del extracto etanólico de <em>Croton incanus</em>',
					authors: 'R.G. López-Ramos, J. Guzmán-Ceferino, L. Hernández-Ocura, A. Iliná, Ll.I. López-López, L.E. Cobos-Puc, S.Y. Silva-Belmares',
					file: './files/volume1/3/4/45.pdf'
				},
				{
					title: 'Actividad antioxidante in vitro de extracto de flor y hoja de la sosa (<em>Solanum marginatum</em> L.)',
					authors: 'M.C. de la Cruz-Leyva, L. Hernández-Ocura, T. Durán-Mendoza, C. del C. Pérez Sánchez, R.G. López-Ramos, J.U. González-de la Cruza, L.E. Cobos-Puc, S.Y. SilavaBelmares, J.C. Contreras-Esquivel y J. Guzmán-Ceferino',
					file: './files/volume1/3/4/46.pdf'
				},
				{
					title: 'Desarrollo de una bebida nutracéutica fermentada de extracto de semilla de Prosopis glandulosa de Coahuila, México',
					authors: 'A. Pimentel-Zapata, Valenzuela-Balderas, A., P.A. Sandoval-Palacios, D. Ontiveros-Floriano, E. Gutiérrez-Reyes, Linaje-Treviño, M.S., Valencia-Castro, C.M., N.M. De la Fuente-Salcido',
					file: './files/volume1/3/4/47.pdf'
				},
				{
					title: 'Extracción y caracterización de proteínas de alfalfa (<em>Medicago sativa</em>)',
					authors: 'N. Medina-Chávez, D. Baigts-Allende',
					file: './files/volume1/3/4/48.pdf'
				},
				{
					title: 'Aprovechamiento integral de los subproductos agrícolas para la obtención de polifenoles',
					authors: 'J.C. Metri-Ojeda, E. Gastélum-Martínez y D.K. Baigts-Allende',
					file: './files/volume1/3/4/49.pdf'
				},
				{
					title: 'Actividad Antioxidante de las fracciones Hidrofílicas y Lipofílicas de Rubus idaeus <em>‘Autunm Bliss’</em> (frambuesa) y <em>Rubus fruticosus</em> ‘Jumbo’ (mora)',
					authors: 'Y.E. Rossi, D. Maestri y A.R. Lespinard',
					file: './files/volume1/3/4/50.pdf'
				},
				{
					title: 'Mejoramiento de la calidad proteica de tortillas hechas a base de maíz adicionadas con soya y amaranto',
					authors: 'J. I. Martínez-Vázquez, S. N. Pérez-Carrera, M.A. Quiroz-Ramírez, F. J. Espitia Orozco',
					file: './files/volume1/3/4/51.pdf'
				},
				{
					title: 'Efecto de los parámetros de homogeneización mecánica sobre el tamaño de gota de emulsiones agua en aceite (w/o) de aceite esencial de orégano',
					authors: 'G.A. Cardoso-Ugarte, A. López-Malo, E. Palou, M.T. Jiménez-Munguía',
					file: './files/volume1/3/4/52.pdf'
				},
			]
		},
		{
		    order: 5, 
		    articles: [
		        {
					title: 'Formación y caracterización de una emulsión elaborada con péptidos de proteína de suero de leche por combinación de métodos de alta y baja energía',
					authors: 'C. E. Hernández-Mauro, M. Díaz-Ramírez, G. Calderón-Domínguez, M. P. Salgado-Cruz, M. García-Garibay, J. Jiménez-Guzmán, J.J. Chanona Pérez',
					file: './files/volume1/3/5/53.pdf'
				},
				{
					title: 'Perfil de la composición volátil de quesos frescos producidos en el occidente de México. Estudio preliminar',
					authors: 'J.E. López-Ramírez, M.P. Chombo-Morales, M. Estarrón-Espinosa',
					file: './files/volume1/3/5/54.pdf'
				},
			]
		},
		{
		    order: 6, 
		    articles: [
				{
					title: 'Optimización de un pan dulce tipo “concha” adicionado de hojas de Stevia y Neem',
					authors: 'G.Y. Camacho-González, M. de la P. Salgado-Cruza, G. Calderón-Domínguez, M. Díaz-Ramírez, L. B. González Lemus',
					file: './files/volume1/3/6/55.pdf'
				},
				{
					title: 'Entrenamiento de un grupo de jueces para describir sensorialmente frutos de papaya variedad maradol',
					authors: 'Y. Roman-Maldonado, S.J. Villanueva-Rodríguez y A. Gutiérrez-Mora',
					file: './files/volume1/3/6/56.pdf'
				},
				{
					title: 'Influencia del color de <em>Salvia hispánica</em> en la preferencia y nivel de agrado de un alimento funcional a base de arroz',
					authors: 'J. Jaimez-Ordaz, R. Gayosso-Hernández, A. Castañeda-Ovando, J.G. Pérez Flores, L.G. González Olivares, J. Añorve-Morga y E. Contreras-López',
					file: './files/volume1/3/6/57.pdf'
				},
				{
					title: 'Análisis sensorial en salchichas tipo frankfurt empleando maltodextrina como sustituto parcial de la grasa',
					authors: 'A. Bravo-Yucumá, M. Coral-Ruíz, y W. Albarracín-Hernández',
					file: './files/volume1/3/6/58.pdf'
				},
				{
					title: 'Características fisicoquímicas, microbiológicas y sensoriales de queso sardo tratado con enzimas proteolíticas',
					authors: 'A.I. Mireles Arriaga, I. Nieto, E. Schmith, M. de Maria, J. Hajduzik',
					file: './files/volume1/3/6/59.pdf'
				},
				{
					title: 'Estimación de la vida de anaquel mediante pruebas aceleradas en puré de manzana, puré de guayaba, puré de mango, puré de tomatillo y fresa entera',
					authors: 'R.J. Aguirre-Pantoja, M.R. Abraham-Juárez, O.A. Martínez-Jaime, M.E. Sosa-Morales, A. Ceron-García',
					file: './files/volume1/3/6/60.pdf'
				},
			]
		},
		{
		    order: 7, 
		    articles: [
				{
					title: 'Evaluación de la deshidratación solar en carne de cabra (<em>Caprus dominiuniversi</em>), determinación de su composición química y compararla con una comercial',
					authors: 'J. Morales- Cruz, G. B. Juárez- Canales, J.J. Figueroa- González, J. Mancillas-Medina',
					file: './files/volume1/3/7/61.pdf'
				},
			]
		},
		{
		    order: 8, 
		    articles: [
				{
					title: 'Efecto de la concentración de harina de chaya en la calidad sensorial y humedad de totopos de maíz y yuca',
					authors: 'T. Durán-Mendoza, J. Guzmán-Ceferino, C.C. Pérez Sánchez, M.C. de la Cruz-Leyva, J.U. González-de la Cruz, M.A. Perera-García, R.E Hernández-Gómez',
					file: './files/volume1/3/8/62.pdf'
				},
				{
					title: 'Medición de maduración en guayabas para el control de calidad en base a técnicas RGB',
					authors: 'J.D. Filoteo-Razo, L.F. Samano-Aguilar, J.C. Hernández-García, J.M. Estudillo-Ayala, R. Rojas-Laguna, D. Jáuregui-Vázquez',
					file: './files/volume1/3/8/63.pdf'
				},
				{
					title: 'Mayonesas y aderezos adicionados con extracto de Jamaica (<em>Hibiscus sabdariffa L.</em>)',
					authors: 'M. Bautista-Villarreal, J.G. Báez-González, M.G. Alanís-Guzmán, E. García-Saucedo, R. Flores-Alemán, V. Walle-Castro',
					file: './files/volume1/3/8/64.pdf'
				},
				{
					title: 'Elaboración y estudio de un producto de panificación adicionado con harina de cáscara de tuna',
					authors: 'D. Muro-Barajas, S.E. Gómez-Ruiz, A. Castañeda-Pérez, J.A. Chávez-Rosales y C. E. Chávez-Murillo',
					file: './files/volume1/3/8/65.pdf'
				},
				{
					title: 'Síntesis de nanocompositos (Ag-Quitosano) y su inclusión en recubrimientos comestibles a base de quitosano y mucilago de linaza',
					authors: 'R. P. Sandoval-Muñoz; K. F. Romo-Zamarrón, G. Ortiz-Duarte, I. E. Medina-Ramírez, L. E. Pérez-Cabrera',
					file: './files/volume1/3/8/66.pdf'
				},
				{
					title: 'Desarrollo de un queso análogo con proteínas exclusivas de lactosuero',
					authors: 'S. S. Monroy-Galván, J. C. Ramírez-Orejel, A.H. Ramírez-Pérez',
					file: './files/volume1/3/8/67.pdf'
				},
				{
					title: 'Elaboración de yogurt a base de soya enriquecido con quinoa y camote',
					authors: 'M.Y. Soria-Chico, B.I. Bravo-Romero, E.B. Cermeño-Hernández y A.J. Ruiz-García',
					file: './files/volume1/3/8/68.pdf'
				},
			]
		},
		{
		    order: 9, 
		    articles: [
				{
					title: 'Caracterización bromatológica y tecnofuncional de la harina de berenjena (<em>Solanum melongena</em>) y quínoa (<em>Chenopodium quinoa</em>)',
					authors: 'J. Rodríguez-Jiménez, C. Amaya-Guerra, A. Núñez-González, J. G. Báez-González, C. J. Aguilera-González y J. Montemayor-Leal',
					file: './files/volume1/3/9/69.pdf'
				},
				{
					title: 'Caracterización funcional de fibras comerciales modificadas por medios físicos',
					authors: 'A.E. Ruiz-Garza, M.A. Núñez-González, C.A. Amaya-Guerra, J.G Báez-González, C.J. Aguilera-González y J. Montemayor-Leal',
					file: './files/volume1/3/9/70.pdf'
				},
				{
					title: 'Efecto en la calidad galletas de mantequilla tipo pastissetas por la adición de glucosamina',
					authors: 'S. M. Ramos-Puebla, R. P. Sandoval-Muñoz, K. F. Romo-Zamarrón, R. E. Ramírez-Carrillo y L. E. Pérez-Cabrera.',
					file: './files/volume1/3/9/71.pdf'
				},
				{
					title: 'Propiedades fisicoquímicas y de digestibilidad de harinas de plátano esterificadas con ácido cítrico',
					authors: 'M. M. Sánchez-Rivera, R. A. González-Soto, Ma. Del C. Núñez-Santiago',
					file: './files/volume1/3/9/72.pdf'
				},
				{
					title: 'Gelatina adicionada con microcápsulas de ingredientes bioactivos de mamey (<em>Pouteria sapota</em>)',
					authors: 'K. Velázquez-Paulín, A. Reyes-Munguía, M. L. Carrillo-Inungaray, B. Alvarado-Sánchez y R. Campos-Montiel',
					file: './files/volume1/3/9/73.pdf'
				},
				{
					title: 'Inducción de compuestos bioactivos en germinados de amaranto mediante el uso de tratamientos de electro-inducción',
					authors: 'A. Montoya-González, A. Cerón-García, J.A. Gómez -Salazar, Ma. E. Sosa-Morales y C. Ozuna',
					file: './files/volume1/3/9/74.pdf'
				},
				{
					title: 'Desarrollo, caracterización y aceptación sensorial de golosinas gelificada con adición de inulina',
					authors: 'D. L. Flores-Sánchez, R. E. Ramírez-Carrillo, K.F. Romo-Zamarrón, M. M. Ramírez-Gómez y L. E. Pérez-Cabrera',
					file: './files/volume1/3/9/75.pdf'
				},
				{
					title: 'Conservación de la calidad en frutos frescos mediante el uso de películas comestibles y residuos agroindustriales',
					authors: 'K. Rosales-García, J.A. Gómez-Salazar, A. Cerón-García y C. Ozuna',
					file: './files/volume1/3/9/76.pdf'
				},
				{
					title: 'Efecto de nanoemulsión con capacidad antimicrobiana en un queso funcional tipo oaxaca en su vida de anaquel',
					authors: 'S. Olivares-García, A. J. Cenobio-Galindo, A. Manzur-Chávez, G. Aguirre -Álvarez, B. E. García-Almendárez, R. G. Campos-Montiel',
					file: './files/volume1/3/9/77.pdf'
				},
				{
					title: 'Efecto de un microencapsulado con capacidad antioxidante en un queso funcional tipo Oaxaca en su vida de anaquel',
					authors: 'A.J. Cenobio-Galindo, I. Rodríguez-Díaz, R. Salcedo-Hernández, A.D. Hernández-Fuentes, A. Quintero-Lira, R.G. Campos-Montiel',
					file: './files/volume1/3/9/78.pdf'
				},
				{
					title: 'Comparación de dos técnicas de extracción de fenólicos totales y capacidad antioxidante a partir de chipilín (<em>Crotalaria maypurensis</em> H.B.K.)',
					authors: 'A. Valadez-Villarreal, E. López-Hernández, R. García-Jiménez, F.L. Ruíz-Santiago',
					file: './files/volume1/3/9/79.pdf'
				},
				{
					title: 'Efecto de las condiciones de proceso sobre el grado de extracción de almidón de jícama',
					authors: 'LB González-Lemus, G Calderón-Domínguez, MP Salgado-Cruza, E Morales-Sánchez, V Martínez-Martínez y JL Hernández-Rangel',
					file: './files/volume1/3/9/80.pdf'
				},
				{
					title: 'Antioxidant activity, lycopene content and total phenolics of home garden tomato (<em>Solanum Lycopersicum</em> L.)',
					authors: 'L.G. Ramos-Muñoz, I. Cordero-Quintero, N.G. Delgado-Tarín, V. Concha-Herrera, y J. Carranza-Concha',
					file: './files/volume1/3/9/81.pdf'
				},
				{
					title: 'Formulación y caracterización proteómica de una bebida funcional',
					authors: 'C. Aguilar-Bravo, M.C. del Rincón-Castro, M. F. León-Galván',
					file: './files/volume1/3/9/82.pdf'
				},
				{
					title: 'Obtención de inulina a partir de desechos de jícama (<em>Pachyrhizus erosus</em>) como fuente prebiótica',
					authors: 'O. E. Melgoza-Sevilla, L. Cázarez-Barragán y E. Olivarez-Echevarria',
					file: './files/volume1/3/9/83.pdf'
				},
				{
					title: 'Evaluación de la actividad y estabilidad antioxidante de un yogurt funcional a base de proteína de nuez (<em>Carya illinoinensis</em>) durante su vida de anaquel en refrigeración',
					authors: 'E.L. Juárez-Iturriaga, E. Mares-Mares, G.A. López-Andrade, M.F. León-Galván',
					file: './files/volume1/3/9/84.pdf'
				},
				{
					title: 'Evaluación de la termoestabilidad del perfil proteómico de ingredientes funcionales para la elaboración de una bebida con potencial antihipertensivo',
					authors: 'N.Z Ramírez-Rojas, E. Mares-Mares, G.A. López-Andrade, M.F. León-Galván',
					file: './files/volume1/3/9/85.pdf'
				},
				{
					title: 'Obtención de un complejo ovoalbúmina-antioxidantes provenientes del té verde (<em>Camellia sinensis</em>) por el método de gelación iónica',
					authors: 'M.M. Gallegos-Garza, D.L. Lozoya-Castillo, J. Báez-González, Ma. G. Alanís-Guzmán',
					file: './files/volume1/3/9/86.pdf'
				},
				{
					title: 'Diseño de microcápsulas de alginato con matriz prebiótica de aloe vera para la encapsulación de <em>Lactobacillus plantarum</em>',
					authors: 'S.L. Castillo, J.M. Alvarado, J. Báez, E. Macías, P. Ramírez-Baca, Ma. G. Candelas-Cadillo, C.T. Gallardo ',
					file: './files/volume1/3/9/87.pdf'
				},
			]
		},
		{
		    order: 10, 
		    articles: [
				{
					title: 'Modelación de las cinéticas de deshidratación de jitomate y nopal por dos métodos de secado (aire caliente y radiación infrarroja)',
					authors: 'G.S. Mosqueda Sánchez, M. del R. Abraham Juárez, J.A. Gómez Salazar y M.E. Sosa Morales',
					file: './files/volume1/3/10/88.pdf'
				},
				{
					title: 'Modelo matemático para la estimación de la vida útil de compotas de mango y durazno durante su almacenamiento a diferentes temperaturas',
					authors: 'J. G. Pérez-Flores, A. Castañeda-Ovando, J. Jaimez-Ordaz, J. Añorve-Morga, L. G. González-Olivares, J. Ramírez-Godinez y E. Contreras-López',
					file: './files/volume1/3/10/89.pdf'
				},
				{
					title: 'Velocidad de penetración de ácido cítrico en zanahoria y modelado del proceso',
					authors: 'J. S. García-Ramírez, A. Cerón-García, C. Ozuna, J. A. Gómez-Salazar',
					file: './files/volume1/3/10/90.pdf'
				},
			]
		},
		{
		    order: 11, 
		    articles: [
				{
					title: 'Evaluación del índice de saponificación de 5 margarinas de mesa mediante un método a pequeña escala',
					authors: 'J.A. Rodríguez-Arzave, M.A. Hernández-Torres, E.A. Estrada-Garza y M.A. Santoyo-Stephano',
					file: './files/volume1/3/11/91.pdf'
				},
				{
					title: 'Extracción y purificación de cafeína y ácido clorogénico de pulpa de beneficio húmedo de café',
					authors: 'J.M. Peña-Aguilar, B. Murúa-Pagola, M. Santos-Basurto, R. Reynoso-Camacho, S.J. Romero-Gómez, M.E. Vázquez-Barrios, S.L. Amaya-Llano',
					file: './files/volume1/3/11/92.pdf'
				},
				{
					title: 'Determinación de la vida de anaquel de camote (<em>Ipomoea batata</em> L.) entero en conserva dulce evaluando empaque y temperatura',
					authors: 'J. Rangel-Mares, M.R. Abraham-Juárez, O.A. Martínez-Jaime, C. Ozuna-López, J.A. Gómez-Salazar',
					file: './files/volume1/3/11/93.pdf'
				},
				{
					title: 'Obtención de pectina de guayaba (<em>Psidium guajava</em> L. var. media china) mediante hidrólisis ácida asistida con ultrasonido de alta intensidad',
					authors: 'T. Meza-Gaspar, H. A. Váquiro-Herrera, R. I. Castillo-Zamudio, I. Paniagua-Martínez, C. Ozuna, E. Corona-Jiménez',
					file: './files/volume1/3/11/94.pdf'
				},
				{
					title: 'Evaluación de propiedades mecánicas de películas biodegradables a base de almidón de papa, almidón de yuca y proteína de suero de leche',
					authors: 'D.F. López-Enriquez, A. Cerón-Cárdenas, O. Osorio-Mora, O.E. Checa-Coral, H.S. Villada-Castillo',
					file: './files/volume1/3/11/95.pdf'
				},
				{
					title: 'Determinación de la eficiencia de encapsulación y oxidación del aceite esencial de canela microencapsulado mediante secado por atomización y evaluación de sus propiedades',
					authors: 'N.I. Gómez-Cruz, A. López-Malo, E. Palou-García y M.T. Jiménez-Munguía',
					file: './files/volume1/3/11/96.pdf'
				},
				{
					title: 'Microextracción en fase sólida aplicada en la caracterización del perfil volátil en cerveza',
					authors: 'M. Estarrón-Espinosa, M.V. Montoya-Hernández, J.E. López-Ramírez, F.J. Pérez-Martínez, M. Arellano-Plaza, J. Villafaña-Rojas',
					file: './files/volume1/3/11/97.pdf'
				},
				{
					title: 'Evaluación de la calidad de uchuva (<em>Physalis peruviana</em> L.) con la aplicación de un recubrimiento comestible a base de proteína de suero y cera de abeja',
					authors: 'D.F. López-Enriquez, O. Osorio-Mora, E.M Alegria-Vivas, O.E. Checa-Coral',
					file: './files/volume1/3/11/98.pdf'
				},
				{
					title: 'Contenido de flavonoides, fenoles y actividad antioxidante de propóleos colectados en Guanajuato, México',
					authors: 'M. S. Hernández-Zarate, M. R. Abraham-Juárez, A. Cerón-García A. J. Gutiérrez-Chávez, D. A. Gutiérrez Arenas y F. Ávila-Ramos',
					file: './files/volume1/3/11/99.pdf'
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