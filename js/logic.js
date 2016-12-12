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
					title: '',
					authors: '',
					file: ''
				},
				{
					title: '',
					authors: '',
					file: ''
				},
				{
					title: '',
					authors: '',
					file: ''
				},
				{
					title: '',
					authors: '',
					file: ''
				}
			]
		}
		{
			order: 4,
			articles: [
				{
					title: '',
					authors: '',
					file: ''
				},
				{
					title: '',
					authors: '',
					file: ''
				},
				{
					title: '',
					authors: '',
					file: ''
				},
				{
					title: '',
					authors: '',
					file: ''
				}
			]
		},
		{
			order: 5,
			articles: [
				{
					title: '',
					authors: '',
					file: ''
				},
				{
					title: '',
					authors: '',
					file: ''
				},
				{
					title: '',
					authors: '',
					file: ''
				},
				{
					title: '',
					authors: '',
					file: ''
				}
			]
		},
		{
			order: 6,
			articles: [
				{
					title: '',
					authors: '',
					file: ''
				},
				{
					title: '',
					authors: '',
					file: ''
				},
				{
					title: '',
					authors: '',
					file: ''
				},
				{
					title: '',
					authors: '',
					file: ''
				}
			]
		},
		{
			order: 7,
			articles: [
				{
					title: '',
					authors: '',
					file: ''
				},
				{
					title: '',
					authors: '',
					file: ''
				},
				{
					title: '',
					authors: '',
					file: ''
				},
				{
					title: '',
					authors: '',
					file: ''
				}
			]
		},
		{
			order: 8,
			articles: [
				{
					title: '',
					authors: '',
					file: ''
				},
				{
					title: '',
					authors: '',
					file: ''
				},
				{
					title: '',
					authors: '',
					file: ''
				},
				{
					title: '',
					authors: '',
					file: ''
				}
			]
		},
		{
			order: 9,
			articles: [
				{
					title: '',
					authors: '',
					file: ''
				},
				{
					title: '',
					authors: '',
					file: ''
				},
				{
					title: '',
					authors: '',
					file: ''
				},
				{
					title: '',
					authors: '',
					file: ''
				}
			]
		},
		{
			order: 10,
			articles: [
				{
					title: '',
					authors: '',
					file: ''
				},
				{
					title: '',
					authors: '',
					file: ''
				},
				{
					title: '',
					authors: '',
					file: ''
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