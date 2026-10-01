/* Menú de Los Compadres Centro — transcrito de assets/menu/menu-los-compadres-centro.pdf */
const MENU = [
  {
    id: "desayunos",
    tab: "Desayunos",
    color: "orange",
    image: "assets/img/desayuno.jpg",
    sections: [
      {
        title: "Desayunos Compadres",
        items: [
          ["Los Sarapes", "$167", "Huevos estrellados sobre fajas de res gratinado, bañados en salsa verde y roja."],
          ["Del Antojo Norteño", "$178", "Machacado con huevo natural o en salsa, acompañado de mollete de frijol gratinado, tiras de tocino y chilaquiles rojos."],
          ["Del Antojo", "$160", "Huevos al gusto acompañados de mollete, tiras de tocino y chilaquiles rojos."],
          ["Combinado Los Compadres", "$167", "Machacado con huevo natural, chilaquiles, queso con rajas y frijoles refritos."],
          ["Los Montados a Caballo", "$150", "Huevos estrellados sobre sincronizada de jamón y queso bañados en salsa ranchera."],
          ["Mariachi Loco", "$150", "Huevos estrellados sobre cama de jamón, bañados en salsa de chorizo con frijoles de la olla."],
          ["El Compadre Atropellado", "$167", "Huevos estrellados bañados en salsa picosita de machaca con frijoles de la olla, morrón y cebolla."],
          ["El Compadre", "$167", "Huevos estrellados bañados en salsa de machaca o chorizo con frijoles refritos."],
          ["Machaca Norteña", "$175", "Machacado con huevo natural, en salsa molcajeteada o a la mexicana."],
          ["De Mi Tierra", "$152", "Machacado con huevo en salsa, nopalitos a la mexicana y queso panela."],
          ["Huevos Campiranos", "$152", "Cazuela con cama de nopal, huevos revueltos o estrellados bañados en salsa de la plaza."],
          ["Los Rancheros", "$152", "Huevos estrellados sobre tortilla frita, jamón o tocino, bañados en salsa ranchera."],
          ["Juntos Pero No Revueltos", "$145", "Huevos estrellados sobre cama de nopales, queso panela a la plancha bañados en salsa verde y roja."],
          ["Revueltos del Compadre", "$152", "A elegir: jamón, chorizo, migas norteñas, frijoles, nopales, tocino o a la mexicana."],
          ["Huevos del Rancho", "$152", "Huevos estrellados con chilaquiles en salsa verde y queso gratinado."],
          ["Estrellados de Boda", "$167", "Huevos estrellados sobre cama de tortilla de harina con queso al gratín, bañados en salsa de asado."],
          ["Rajas de Múzquiz", "$175", "Quesos de Múzquiz, Coah. (panela y gouda), con salsa molcajeteada, rajas de morrón y cebolla, acompañadas de frijoles en bola."],
          ["Pa'l Ahijado", "$85", "Huevito al gusto, con papas."]
        ]
      },
      {
        title: "Arma tu Omelette",
        items: [
          ["Omelette al gusto", "2 ingr. $152 · 3 ingr. $159", "Jamón, queso, tocino, champiñón, huitlacoche, chorizo y flor de calabaza."],
          ["Omelette en Salsa de Champiñones", "$159", "Relleno de queso, bañado en salsa de tomate y champiñones."],
          ["Omelette Sin Culpa", "$165", "Claras de huevo en omelette, relleno de flor de calabaza o huitlacoche, abrazado en nopal, queso panela, bañado en salsa verde."],
          ["Barbacoa 250 gr", "$252", "Acompañada de cebolla, cilantro y tortillas."],
          ["La Cazuela del Compadre", "$172", "Tres guisos al gusto. No aplica barbacoa."],
          ["Hotcakes", "$95", "Con chocolate $105."],
          ["Plato de Fruta", "$85", "Con yogurt y granola $95."]
        ]
      }
    ]
  },
  {
    id: "chilaquiles",
    tab: "Chilaquiles",
    color: "red",
    image: "assets/img/molcajete.jpg",
    sections: [
      {
        title: "Chilaquiles",
        items: [
          ["Chilaquiles en Salsa de Chicharrón", "$175", "Platillo muy nuestro, creación de Doña Emilia en los 90's. Tiras de tortilla bañadas en salsa de chicharrón y queso gratinado.", "Clásico"],
          ["Chilaquiles Suizos", "$175", "Tiras de tortilla frita con pollo, queso gratinado y crema."],
          ["Chilaquiles Rojos con Pollo", "$175", "Tiras de tortilla frita con pollo en salsa roja con queso gratinado y crema."],
          ["Chilaquiles Saltillo", "$175", "Con barbacoa, bañados en salsa verde, acompañados de frijoles refritos."],
          ["Chilaquiles Rancheros", "$175", "Tortilla frita bañada en salsa mañanera con par de huevos estrellados."],
          ["Chilaquiles con Arrachera", "$175", "Con arrachera, bañados en salsa verde y queso gratinado."],
          ["Chilaquiles con Arrachera en Salsa Norteña", "$175", "Con arrachera, bañados en salsa norteña y queso gratinado, acompañados con frijoles refritos."],
          ["Chilaquiles Don Juan", "$175", "Tiras de tortilla frita y queso gratinado bañado en machaca guisada con pico de gallo y salsa molcajeteada. Con huevo $188.", "Nuevo"],
          ["Chilaquiles al Chipotle", "$175", "De pollo en salsa de chipotle, acompañados de frijoles refritos."],
          ["Migas Norteñas", "$175", "Tiras de tortilla frita con huevo y salsa de tomate."]
        ]
      }
    ]
  },
  {
    id: "gorditas",
    tab: "Gorditas y Tacos",
    color: "magenta",
    image: "assets/img/enchiladas-montadas.jpg",
    sections: [
      {
        title: "Gorditas o Tacos · $30 harina o maíz",
        list: ["Asado", "Chicharrón", "Barbacoa", "Huevo al gusto", "Choriqueso", "Queso con rajas", "Cortadillo", "Papa con chorizo", "Deshebrada", "Nopalitos a la mexicana", "Frijoles con queso", "Discada", "Picadillo", "Nopales con huevo y chile colorado"],
        items: [
          ["Gorditas Ahogadas", "$120", "(3) Gorditas de maíz rellenas de carnitas de puerco, bañadas en salsa verde de la casa con un toque picosito, decoradas con cilantro, cebolla y queso panela."],
          ["Tacos de Cachete", "$168", "(4) Cachete de cerdo en tortilla de maíz de nixtamal con pico de gallo a base de cebolla morada, tomate y chile jalapeño, acompañado de abanico de aguacate.", "Nuevo"],
          ["Bistec Ranchero", "$185", "Bistec guisado en salsa ranchera y frijoles refritos."]
        ]
      },
      {
        title: "Quesadillas a la plancha o fritas · $47",
        list: ["Huitlacoche", "Flor de calabaza (en temporada)", "Choriqueso", "Champiñones", "Chicharrón", "Asado", "Papa"]
      },
      {
        title: "Fin de Semana",
        items: [
          ["Menudo", "$140", ""],
          ["Tacos Hundidos (5)", "$165", "Tacos de barbacoa en tortilla de maíz amarillo hundidos en una salsa roja con base de 3 chiles."]
        ]
      },
      {
        title: "Extras",
        compact: true,
        items: [
          ["Huevo estrellado", "$35"], ["Tocino", "$25"], ["Aguacate", "$30"], ["Queso asadero", "$25"],
          ["Queso panela", "$25"], ["Frijoles refritos", "$25"], ["Jamón", "$25"], ["Salsa de chorizo", "$35"],
          ["Salsa de machaca", "$40"], ["Huitlacoche", "$25"], ["Flor de calabaza", "$25"], ["Champiñones", "$25"]
        ]
      }
    ]
  },
  {
    id: "botanas",
    tab: "Botanas",
    color: "orange",
    image: "assets/img/parrilla.jpg",
    sections: [
      {
        title: "La Botana del Compadre",
        items: [
          ["Mollejas al Carbón", "$187", "Servidas en comal caliente sobre cama de cebolla asada."],
          ["Guacamole", "$160", "Chile, tomate, cebolla y totopos."],
          ["Queso Fundido", "$160", "Pastor, chicharrón o chorizo."],
          ["Salchicha Asada con Queso, envuelta en Tocino", "$95", "(2) Salchichas asadas sobre cama de pimientos y cebolla, envueltas en tocino, bañadas en queso asadero, montadas en comal caliente."],
          ["Gorditas Ahogadas", "$120", "(3) Gorditas de maíz rellenas de carnitas de puerco, bañadas en salsa verde de la casa con un toque picosito, decoradas con cilantro, cebolla y queso panela."],
          ["Ensalada Los Compadres", "$155", "Fajita de pollo (150 gr) sobre una cama de lechuga, tomate, pimiento morrón, cebolla, aguacate y queso panela. Pide el aderezo de la casa."],
          ["Papas a la Francesa", "$80", "Preparadas con queso cheddar y queso asadero gratinado, servidas en comal de acero con chiles jalapeños $95."]
        ]
      },
      {
        title: "Hecho en Saltillo",
        items: [
          ["Enchiladas Suizas (4 pzas)", "$172", ""],
          ["Enchiladas de la Plaza (4 pzas)", "$172", ""]
        ]
      }
    ]
  },
  {
    id: "taqueria",
    tab: "Taquería",
    color: "blue",
    image: "assets/img/enchiladas.jpg",
    sections: [
      {
        title: "Taquería Tradicional · harina / maíz",
        items: [
          ["Tacos de Arrachera (5)", "$175 / $165", ""],
          ["Tacos de Carne Asada (5)", "$165 / $155", ""],
          ["Tacos al Pastor (5)", "$165 / $155", ""],
          ["Tacos de Barbacoa (5)", "$168 / $158", ""],
          ["Palomas de Ternera (4)", "$165 / $155", ""],
          ["Pirata Patrón", "$190", "Tortilla de harina gigante con frijoles refritos, queso cheddar, carne asada y cebolla asada."],
          ["Pirata · Campechana · Gringa", "$180", ""],
          ["Tacos Hundidos (5)", "$165", "Tacos de barbacoa en tortilla de maíz amarillo hundidos en una salsa roja con base de 3 chiles."],
          ["Tacos Arrieros de Nixtamal (5)", "$185", "De arrachera en tortilla de nixtamal amarillo, con queso panela, aguacate, cilantro y cebolla asada. Servidos en plato caliente."],
          ["Tacos del Norte (5)", "$165", "De bistec en tortilla de maíz, tapados con queso asadero, bañados en salsa roja de chipotle, cascabel y chile puya, acompañados de cebolla asada."],
          ["Tacos de Cachete (4)", "$168", "Cachete de cerdo en tortilla de maíz de nixtamal con pico de gallo a base de cebolla morada, tomate y chile jalapeño, acompañado de abanico de aguacate.", "Tienes que probarlos"]
        ]
      }
    ]
  },
  {
    id: "asador",
    tab: "Que Chille el Asador",
    color: "red",
    image: "assets/img/arrachera.jpg",
    sections: [
      {
        title: "Cortes · 350 gr aprox.",
        note: "Acompañados de papa al horno, cebolla asada y chile toreado.",
        items: [
          ["T-Bone", "$350", ""],
          ["Rib Eye", "$365", ""],
          ["Top Sirloin", "$330", ""]
        ]
      },
      {
        title: "Del Asador",
        items: [
          ["Toreras de Sirloin (350 gr aprox.)", "$365", "Fajeado y servido en una tortilla de harina y otra de maíz de nixtamal, abrazado de chilaca tatemada, relleno de queso asadero, acompañado de cebolla asada y guacamole.", "Nuevo"],
          ["Arrachera Individual (220 gr)", "$230", "Cebolla asada y chile toreado."],
          ["Arrachera Especial (220 gr)", "$268", "Con rajas de morrón, cebolla, champiñones, queso asadero gratinado y (2) quesadillas en maíz."],
          ["Alambre de Res (200 gr)", "$230", "El tradicional con morrón, cebolla, tocino y salchicha asada."],
          ["Arrachera Albañil", "$215", "Con tocino, cebolla asada, cilantro y un toque de cerveza, con dos quesadillas de maíz.", "Nuevo"],
          ["El Tapadito de Carne Asada (220 gr)", "$225", "Carne asada tapada con 4 tortillas de maíz a las brasas, acompañada de cebolla asada."],
          ["Fajita de Pollo (220 gr)", "$215", "Pimiento morrón, cebolla y queso asadero."],
          ["Huarache \"Del Norte\"", "$295", "Carne asada, arrachera o pastor, presentado sobre huarache de masa."],
          ["Surtido Los Compadres (220 gr)", "$268", "Arrachera, pastor, alambre y chuleta ahumada."],
          ["Chilindrina estilo Los Compadres", "$220", "Carne asada o pastor (200 gr) finamente picados, con 4 tortillas de maíz tatemadas con gratinado de queso asadero y queso de puerco, acompañados de cebolla asada."],
          ["Papa Compadre", "$175", "Arrachera o pastor, salchicha, morrón, tocino, queso asadero y crema."],
          ["Hamburguesa", "$140", "Jamón, queso asadero, queso cheddar, lechuga, tomate y cebolla asada, acompañada de papas a la francesa y jalapeño."]
        ]
      }
    ]
  },
  {
    id: "compartir",
    tab: "Pa' Compartir",
    color: "blue",
    image: "assets/img/parrillada.jpg",
    sections: [
      {
        title: "Pa' Compartir",
        items: [
          ["Parrillada Los Compadres", "$785", "Arrachera, pastor, alambre, salchicha, cebolla asada y 4 órdenes de frijoles charros. ½ Parrillada $550."],
          ["Parrillada \"Así es mi Tierra\"", "$940", "Top sirloin, T-bone, papa asada, pimiento morrón con queso gratinado, champiñones, queso gratinado y 4 órdenes de frijoles charros."],
          ["Kilo de Top Sirloin", "$795", "Acompañado con 4 frijoles a la charra y cebolla asada. ½ kilo $435."],
          ["Kilo de Arrachera", "$860", "Acompañado con 4 frijoles a la charra y cebolla asada. ½ kilo $480."],
          ["Molcajete \"Del Norte\"", "$380", "Arrachera, pastor, pechuga de pollo, queso panela y nopal asado bañados con salsa de la casa."]
        ]
      }
    ]
  },
  {
    id: "dulce",
    tab: "Lo Dulce",
    color: "lime",
    image: "assets/img/postres.jpg",
    sections: [
      {
        title: "Lo Dulce",
        items: [
          ["Pastel de la Casa", "$95", ""],
          ["Empanada de Pulque", "$45", ""],
          ["Gordita de Azúcar", "$30", "Con mantequilla o cajeta."],
          ["Concha con Nata", "$70", ""],
          ["Pan de Elote", "$70", ""]
        ]
      }
    ]
  },
  {
    id: "bebidas",
    tab: "Bebidas",
    color: "lime",
    image: "assets/img/naranjada.jpg",
    sections: [
      {
        title: "Bebidas",
        compact: true,
        items: [
          ["Limonada natural (340 ml)", "$42"], ["Limonada mineral (340 ml)", "$45"],
          ["Naranjada natural (340 ml)", "$42"], ["Naranjada mineral (340 ml)", "$45"],
          ["Refresco (355 ml)", "$40"], ["Chocolate con leche (250 ml)", "$43"],
          ["Leche (250 ml)", "$30"], ["Nuestro tradicional café de olla (refill)", "$55"],
          ["De la Familia (café de olla, chocolate, leche y canela)", "$71"], ["Americano (refill)", "$55"],
          ["Jugo de naranja (250 ml)", "$45"], ["Botella de agua (500 ml)", "$30"],
          ["Agua fresca de sabor", "$42"], ["Jarra de limonada natural 2 L", "$175"],
          ["Jarra de limonada mineral 2 L", "$185"], ["Jarra de naranjada natural 2 L", "$175"],
          ["Jarra de naranjada mineral 2 L", "$185"], ["Vampiro / tequila tradicional (150 ml)", "$125"],
          ["Paloma / tequila tradicional (150 ml)", "$125"], ["Bacardí blanco (44 ml)", "$110"]
        ]
      },
      {
        title: "Nuestra Cantina",
        compact: true,
        note: "Cerveza 2x1 · aplican restricciones.",
        items: [
          ["Capitán Morgan (44 ml)", "$110"], ["Cerveza importada (325 ml)", "$57"],
          ["Cerveza clara (325 ml)", "$57"], ["Bohemia clara / oscura (325 ml)", "$57"],
          ["Michelada", "$30"], ["Clamato especial", "$60"],
          ["Tequila Don Julio 70 (44 ml)", "$149"], ["Tequila Maestro Dobel (44 ml)", "$140"],
          ["Tequila tradicional (44 ml)", "$125"], ["Whisky Black Label (44 ml)", "$160"],
          ["Whisky Red Label (44 ml)", "$125"], ["Whisky Buchanan's 12 (44 ml)", "$160"]
        ]
      }
    ]
  }
];
