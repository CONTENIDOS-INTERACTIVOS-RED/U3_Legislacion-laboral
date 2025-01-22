export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
    numeroUnidad: '3',
    tituloUnidad: 'Principios y características de la contratación estatal',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Clases de contratos administrativos',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Nulidad del contrato estatal',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Fundamento normativo en Colombia',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: '¿Cuándo aplica la nulidad en la contratación estatal?',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Declaratoria de nulidad y sus efectos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'La responsabilidad derivada del contrato administrativo o estatal',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Naturaleza de la responsabilidad en el contrato administrativo',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Tipos de responsabilidad en el contrato estatal',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Formas de contratación pública (directa - pública o por licitación)',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ávalos, E. Buteler, A. & Massimino, L. (2014). Derecho administrativo 1 (ed.). Alveroni Ediciones.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/78472',
    },
    {
      referencia:
        'Congreso de Colombia. (1993). Ley 80 de 1993: Por la cual se expide el Estatuto General de Contratación de la Administración Pública. Diario Oficial No. 41.094.',
      link:
        'https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes/1790106',
    },
    {
      referencia:
        'Roa Rojas, H. (2008). Régimen de contratación estatal (ed.). Ecoe Ediciones.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/69056',
    },
    {
      referencia:
        'Consejo de Estado, Sala de lo Contencioso Administrativo, Sección Tercera. (2020). Sentencia del 14 de mayo de 2020, Radicación No. 05001-23-31-000-2005-07646-01. Relatoría del Consejo de Estado.',
      link:
        'https://relatoria.colombiacompra.gov.co/providencias/05001-23-31-000-2005-07646-01/?utm_source=chatgpt.com',
    },
    {
      referencia:
        'Congreso de Colombia. (2011). Ley 1437 de 2011: Por la cual se expide el Código de Procedimiento Administrativo y de lo Contencioso Administrativo. Diario Oficial No. 47.956.',
      link:
        'https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes/1680117',
    },
    {
      referencia:
        'Congreso de Colombia. (1887). Código Civil Colombiano: Por la cual se adopta el Código Civil para la República de Colombia. Diario Oficial No. 4390.',
      link:
        'https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes/1827111',
    },
    {
      referencia:
        'Corte Suprema de Justicia de Colombia. (2020). Sentencia SC1778-2020.',
      link:
        'https://cortesuprema.gov.co/corte/wp-content/uploads/2020/12/SC1778-2020.pdf',
    },
    {
      referencia:
        'García, A. B. & Pedreros Sáchica, M. F. (2015). Algunos temas sobre contratación estatal (ed.). Editorial Pontificia Universidad Javeriana.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/123260',
    },
    {
      referencia:
        'Congreso de Colombia. (2007). Ley 1150 de 2007: Por medio de la cual se introducen medidas para la eficiencia y la transparencia en la Ley 80 de 1993 y se dictan otras disposiciones generales sobre la contratación con recursos públicos. Diario Oficial No. 46.691.',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=1674903',
    },
  ],
  glosario: [
    {
      termino: 'Contratación Directa',
      significado:
        'modalidad excepcional de contratación pública en la que la entidad estatal selecciona directamente al contratista, sin un proceso de licitación abierta. Se justifica en situaciones específicas como urgencia manifiesta o contratación interadministrativa.',
    },
    {
      termino: 'Contratación Estatal',
      significado:
        'proceso mediante el cual las entidades públicas adquieren bienes, servicios y obras necesarias para el cumplimiento de sus funciones y fines esenciales del Estado.',
    },
    {
      termino: 'Contratación Pública',
      significado:
        'modalidad ordinaria en la que se convoca a múltiples oferentes para que participen en procesos de selección transparentes, como la licitación pública.',
    },
    {
      termino: 'Contratos Administrativos',
      significado:
        'acuerdos legales donde interviene una entidad estatal como contratante. Tienen características especiales como sujeción a normas públicas y preeminencia del interés general.',
    },
    {
      termino: 'Contratos de Concesión',
      significado:
        'forma de contrato mediante el cual una entidad pública autoriza a un particular la explotación económica de un bien o la prestación de un servicio público bajo ciertas condiciones.',
    },
    {
      termino: 'Contrato de Interventoría',
      significado:
        'acuerdo en el cual un tercero especializado supervisa y controla la ejecución de un contrato estatal para garantizar su cumplimiento conforme a los términos técnicos y legales.',
    },
    {
      termino: 'Contrato de Obra Pública',
      significado:
        'contrato celebrado para la construcción, reparación o mantenimiento de infraestructuras que beneficien a la comunidad, como carreteras o edificios públicos.',
    },
    {
      termino: 'Contrato de Suministro',
      significado:
        'acuerdo mediante el cual una entidad estatal adquiere bienes necesarios para sus funciones, garantizando la entrega periódica de los productos según lo pactado.',
    },
    {
      termino: 'Economía',
      significado:
        'principio de la contratación estatal que busca optimizar el uso de los recursos públicos, asegurando la selección de propuestas con la mejor relación costo-beneficio.',
    },
    {
      termino: 'Interés General',
      significado:
        'principio fundamental de la contratación estatal que prioriza el beneficio de la comunidad y la satisfacción de necesidades públicas por encima de intereses particulares.',
    },
    {
      termino: 'Legalidad',
      significado:
        'principio rector que establece que todos los procesos de contratación estatal deben realizarse conforme a las normas legales vigentes, como la Ley 80 de 1993.',
    },
    {
      termino: 'Licitación Pública',
      significado:
        'procedimiento general y competitivo mediante el cual una entidad pública selecciona al contratista que mejor cumple con los requisitos económicos y técnicos establecidos.',
    },
    {
      termino: 'Nulidad Absoluta',
      significado:
        'figura jurídica que invalida un contrato cuando existen vicios graves que afectan normas de orden público, como la falta de competencia o el objeto ilícito.',
    },
    {
      termino: 'Nulidad Relativa',
      significado:
        'situación en la que el contrato presenta vicios menos graves, como errores en el consentimiento, que pueden subsanarse sin afectar el interés general.',
    },
    {
      termino: 'Transparencia',
      significado:
        'principio que garantiza que los procesos de contratación sean públicos, verificables e imparciales, permitiendo el control ciudadano y evitando actos de corrupción.',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
