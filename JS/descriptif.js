// Variable de type array qui contient les informations à propos des modèles
const listeModele = [
    {
		"titre": "Histoire",
		"description": "Lors de la Première Guerre, BMW va voir son destin changé. Cette société aéronautique est alors réputée pour ses moteurs. Le Traité de Versailles, signé en 1919, interdit, en effet, aux industries allemandes de poursuivre toute activité dans les domaines militaires et aéronautiques. C'est un revers sévère pour la jeune société, qui vient de prouver une nouvelle fois sa maîtrise en matière de moteurs expérimentaux, avec un vol à l'attitude record de 9760 mètres. Pendant la Seconde Guerre mondiale, la production automobile est bien sûr suspendue et les usines qui fonctionnent à plein rendement pour la Luftwaffe sont naturellement la cible des bombardements alliés. En 1945, les usines BMW de Munich sont vide et dévastées.<br><br> L'histoire aurait pu s'arrêter là sans la détermination d'anciens cadres et ouvriers qui relancent une chaîne de production… d'ustensiles de cuisine. La reprise de la construction de motos en 1948 est un premier signe de redémarrage industriel et précède de trois ans celle du secteur automobile. Ne disposant ni de l'usine, ni de l'outillage nécessaire, BMW n'hésite pas effectuer son retour sur quatre roues avec une grande berline luxueuse. Malgré l'enivie, les ventes ne suivent pas. <br><br>Au bord de la faillite, menacée de rachat par Mercedes, BMW trouve son salut en 1959 à travers d'un groupe d'actionnaires aussi réalistes qu'enthousiastes menés par Herbert Quandt. Financier avisé, celui-ci investit des millions de marks dans un ambitieux programme visant à construire une berline moyenne. Pour mieux affirmer la rupture avec ce passé chaotique, le projet intitulé \"Neue Klasse\" (Nouvelle Classe) se concrétise par l'apparition d'une \"1500\" en 1962. Imposant une image dynamique, ces berlines modernes et performantes rencontrent d'emblée un immense succès. Sur un marché particulièrement porteur BMW double la mise et remporte le banco en lançant une série sportive à deux portes, dont le succès lui ouvre les portes de la prospérité et lui donne enfin une dimension internationale.<br><br> Pendant les deux décennies suivantes, pourtant marquées par les chocs pétroliers et la récession économique, BMW n'en poursuit pas moins son expansion. Avec une politique de renouvellement progressif de ses modèles, conjuguée à de constantes améliorations esthétiques et techniques, la marque n'a cessé de consolider ses positions en Europe, mais aussi réussi une spectaculaire percée aux Etats-Unis. Porté par le fantastique succès des différentes générations de la Série 3, BMW a enfin pu se donner les moyens de ses ambitions. Etoffant ses gammes, la marque est désormais présente pratiquement dans tous les segments du marché. Des modèles compacts, presque bon marché, aux luxueux hauts de gamme gavés d'électronique, en passant les séduisants roadsters et les versions \"Motorsport\" gavées de chevaux, BMW s'est hissé au rang des plus grands et des plus fortunés constructeurs du monde.L'aéronautique, l'activité des origines, a laissé une profonde empreinte dans l'esprit de la marque, tout comme son implantation à Munich, capitale de la Bavière.<br><br> Son emblème rappelle parfaitement bien ces racines historiques. Au centre d'un cercle noir frappé des trois lettres BMW, figure une hélice stylisée symbolisant une hélice en rotation bleue et blanche, les couleurs nationales de la Bavière. Ornant le réservoir des motos, dès 1922, puis le capot des automobiles six ans plus tard, ce logo est resté le même aujourd'hui. Au fil du temps, il n'a, en effet, subi que quelques légères retouches esthétiques: le blanc remplaçant le doré des lettres BMW, un bleu plus clair, pour l'hélice dans les années cinquante/soixante et enfin, retour à un bleu plus soutenu, accompagné d'une typologie plus moderne des caractères BMW pour la période contemporaine. Pour les modèles sportifs développés par la division Motorsport, BMW a créé en 1972 un logo spécifique. L'emblème traditionnel est au centre d'un cercle plus large reprenant les trois couleurs (bleu, rouge et bleu foncé) décorant les carrosseries blanches des voitures de compétition, alignées par l'écurie officielle.",
        "image": "../Images/Other/Hist-logo.jpg",
        "texte": "Tous les modèles Bmw <br><br><br>3/15 (1929/34) (4 cylindres – 748,5 cm3 - 5 ch – 75 km/h)<br><br>3/20 (1932/34) (6 cylindres – 788 cm3 – 20 ch – 80 km/h)<br><br>303 (1933/34) (6 cylindres – 1173 cm3 – 30 ch – 90 km/h)<br><br>309 (1934/36) (4 cylindres – 845 cm3 – 22 ch – 80 km/h)<br><br>315 (1934/37) (6 cylindres – 1490 cm3 – 34 ch – 100 km/h)<br><br>315/1 Sport (1934/36) Roadster (6 cylindres – 1490 cm3 -40 ch – 120 km/h)<br><br>319/1 Sport (1934/36) Roadster (6 cylindres – 1911 cm3 – 55 ch – 130 km/h)<br><br>319 (1935/37) (6 cylindres – 1911 cm3 – 45 ch – 115 km/h)<br><br>329 (1936/37) Cabriolet 4 places (6 cylindres – 1911 cm3 – 45 ch – 110 km/h)<br><br>326 (1936/41) (6 cylindres – 1971 cm3 – 50 ch – 115 km/h)<br><br>320 et 321 (1937/38 et 1939/41) (6 cylindres – 1971 cm3 – 45 ch – 110 km/h)<br><br>327 (1937/41) Coupé et cabriolet (6 cylindres – 1971 cm3 -55 ch – 125 km/h)<br><br>327/28 (1938/40) Coupé et cabriolet (6 cylindres – 1971 cm3 – 80 ch – 140 km/h)<br><br>328 (1937/39) Roadster Sport (6 cylindres – 1971 cm3 – 80 ch – 150 km/h)<br><br>335 (1939/41) (6 cylindres – 3485 cm3 – 90 ch – 145 km/h)<br><br>501 (1951/58) (6 cylindres – 1971/2077 cm3 – 65/72 ch – 135/145 km/h)<br><br>501 V8 (1955/61) V8 – 2580 cm3 – 95 ch – 160 km/h)<br><br>502 (1954-62) V8 – 2580/3168 cm3 – 100/120/140 ch – 160/170/175 km/h)<br><br>Isetta ( 1955/1962) Mini citadine (Monocylindre – 245/298 cm3 – 12/13 ch – 85 km/h)<br><br>600 (1957/59) (2 cylindres à plat – 582 cm3 – 19,5 ch – 100 km/h)<br><br>503 (1956/59) Coupé et cabriolet (V8 – 3168 cm3 – 140 ch – 190 km/h)<br><br>507 (1956/59) Roadster et Spider (V8 – 3168 cm3 – 150 ch – 200/220 km/h)<br><br>700/ 700 LS (1959/1965) Coupé et cabriolet (2 cylindres à plat – 697 cm3 – 30/32 ch – 120 km/h)<br><br>700 \"Sport\"/700 CS (1961/64) (2 cylindres à plat – 697 cm3 – 40 ch – 135 km/h)<br><br>2600 (1961/64) (V8 – 2580 cm3 – 100/110 ch – 165 km/h)<br><br>3200/3200 S (1961/63) Coupé (V8 – 3168 cm3 – 140/160 ch – 175/190 km/h)<br><br>1500 (1962/64) (4 cylindres – 1499 cm3 – 80 ch – 148 km/h)<br>1600 (1964/66) (4 cylindres – 1573 cm3 – 83 ch – 155 km/h)<br><br>1800/1800 Ti/1800 Ti Sa (1963/1971) (4 cylindres – 1773 cm3 – 90/110/130 ch – 162/175/186 km/h)<br><br>2000 C/2000 CS (1965/70) Coupé (4 cylindres – 1990 cm3 – 100/120 ch – 168/185 km/h)<br><br>2000/2000 Ti/2000 Tii (1966/1972) (4 cylindres – 1990 cm3 – 100/120/130 ch – 165/180/185 km/h)<br><br>1600-2 (196675) Berline 2 portes, cabriolet, \"Touring\" (4 cylindres – 1573 cm3 – 85 ch – 162 km/h)<br><br>1600 Ti (1967/68) (4 cylindres – 1573 cm3 – 105 ch – 175 km/h)<br><br>1802 (1971/75) Berline 2 portes et \"Touring\" (4 cylindres – 1766 cm3 – 90 ch – 167 km/h)<br><br>2002/2002 Ti/2002 tii (1968/75) Berline 2 portes, cabriolet et \"Touring\" (4 cylindres - 1990 cm3 – 100/120/130 ch – 170/185/190 km/h)<br><br>2002 \"Turbo\" (1973/74) (4 cylindres – 1990 cm3 – 170 ch – 210 km/h)<br><br>2500/2800 (1968/77) (6 cylindres – 2494/2788 cm3 – 150/170 ch – 190/200 km/h)<br><br>2800 CS (1968/71) Coupé (6 cylindres – 2788 cm3 – 170 ch – 206 km/h)<br><br>3.0 S/3.0 L/3.0 Si (1971/77) (6 cylindres – 2895 cm3 – 180/200 ch - 200/210 km/h)<br><br>3.0 CS/3.0 CSi (1971/75) (6 cylindres – 2985 cm3 – 180/200 ch – 210/220 km/h)<br><br>3.0 CSL (1973/75) (6 cylindres – 3153 cm3 – 206 ch – 220 km/h)<br><br>3.3 L/Li (1974/77) (6 cylindres - 3285 cm3 – 190/197 ch – 205 km/h)<br><br>1502 (1975/77) (4 cylindres – 1573 cm3 – 75 ch – 157 km/h)<br><br>Série 5 (1972/81) Berline (moteurs 4 cyl-1.8/2.0 et 6 cyl. 2.0/2.5/2.8)<br><br>M 535i (1979/81) (6 cyl.- 3453 cm3 – 218 ch – 222 km/h)<br><br>Série 3 (1975/82) Berline 2 portes (moteurs 4 cyl. 1.6/1.8/2.0 et 6 cyl. 2.0/2.3)<br><br>Série 6 (1976/89) Coupé (moteurs 6 cyl. 2.8/3.0/3.2/3.5)<br><br>M 635 CSi (1983/89) (6 cyl. – 3453 cm3 – 286 ch -255 km/h)<br>Série 7 (1977/86) Berline, moteurs 6 cyl. 2.8/3.0/3.2/3.5)<br><br>M 1 (1978/81) Coupé (moteur central 6 cyl. - 3453 cm3 - 277 ch - 262 km/h)<br><br>Série 5 (1982/1987) Berline (moteurs 4 cyl. 1.8, 6 cyl. 2.0/2.5/2.8/3.5 et 6 cyl. 2.4 D/TD)<br><br>M 5 (1985/87) (6 cyl. – 3453 cm3 – 286 ch – 245 km/h)<br><br>Série 3 (1983/1991) Berline 2/4 portes, break \"Touring\" et cabriolet Moteurs 4 cyl. 1.6/1.8, 6 cyl. 2.0/2.3/2.7 et 6 cyl. 24D/TD)<br><br>M 3 (moteur 4 cyl. - 2302 cm3 – 195/215 ch – 235/240 km/h)<br><br>Série 7 (1986/1993) Berline (moteurs 6 cyl. 3.0/3.5, V8 3.0/4.0 et V12 5.0)<br><br>Série 8 (1989/) Coupé, moteur V12 5.0/5.4/5.6 et V8 4.0/4.4)<br><br>Série 5 (1988/1995) Berline et break \"Touring\" (Moteurs 4 cyl. 1.8, 6 cyl. 2.0/2.5/3.0/3.5, V8 4.0 et 6 cyl. 2.4 TD)<br><br>M 5 (moteur 6 cyl. – 3535 cm3 – 315 ch – 250 km/h)<br><br>Z 1 (1988/91) Roadster (moteur 6 cyl. – 2494 cm3 – 170 ch – 220 km/h)<br><br>Série 3 (1990/1997) Berline 2 et 4 portes, coupé, cabriolet et break \"Touring\" (Moteurs 4 cyl. 1.6/1.8/2.0, 6 cyl. 2.5/2.8/3.0 et 6 cyl. 2.5 TD)<br><br>M 3 (6 cyl. 3.0/3.2 – 286/321 ch)<br><br>Série 3 \"Compact\" (1994/2003) Berline 3 portes, moteurs 4 cyl. 1.6/1.8, 6 cyl. 2.5 et 1.8 TD Série 7 (1994/2001) Berline, moteurs 6 cyl. 2.8, V8 3.5/4.4, V12 5.4 et TD 6 cyl. 2.5/3.0 + V8 4.0 Z 3 (1996/2002) Roadster et Coupé, moteurs 4 cyl. 1.8/1.9 et 6 cyl. 3.0/3.2 Série 5 (1996/2002) Berline et break \"Touring\" Moteurs: 6 cyl. 2.0/2.2/2.5/3.0, V8 3.5/4.4 et TD 4 cyl. 2.0/6 cyl. 2.5/3.0 M 5 : V8 – 5.0 – 400 ch – 250 km/h - Série 3 (1998/2004) Berline, coupé, cabriolet, break \"Touring\" Moteurs: 4 cyl. 1.9, 6 cyl. 2.2/2.5/3.0 et TD 4 cyl. 2.0/6 cyl. 3.0 M 3 : 6 cyl. – 3.2 – 343 ch -250 km/h X 5 (1999/2006) 4 x 4, moteurs 6 cyl. 3.0, V8 4.4/4.6, V12 6.0 et 6 cyl. 3.0 TD Z 8 (2000/2002) Roadster, moteur V8 – 4941 cm3 – 400 ch – 250 km/h)<br><br>Série 7 (2002/2007) Berline, moteurs 6 cyl. 3.0, V8 3.6/4.4, V12 6.0 et TD 6 cyl. 3.0 + V8 4.0)<br><br>X 3 (2003/...) 4x4, Moteurs 4 cyl. 2.0, 6 cyl. 2.5/3.0 et TD 4 cyl. 2.0 + 6 cyl. 3.0)<br><br>Série 5 (2003/...) Berline et break \"Touring\" (Moteurs: 4 cyl. 2.0, 6 cyl. 2.5/3.0, V8 4.0/4.4/4.8 et TD 4 cyl. 2.0 + 6 cyl. 2.5/3.0/3.5)<br><br>M 5 (V10-5.0-507 ch)<br><br>Série 6 (2003/...) Coupé et Cabriolet (moteurs: 6 cyl. 3.0, V8 4.4/4.8 et TD 6 cyl. 3.0)<br><br>M 6 (V10-5.0-507 ch)<br><br>Z 4 (2003/2008) Roadster et Coupé (moteurs 4 cyl. 2.0 et 6 cyl. 2.5/3.0/3.2<br><br>Série 1 (2004/...) Berline compacte 3/5 portes, coupé et cabriolet (Moteurs 4 cyl. 1.6/2.0, 6 cyl. 3.0 et TD 4 cyl. 2.0/2.3)<br><br>Série 3 (2005/...) Berline, coupé, cabriolet et break \"Touring\" (Moteurs: 4 cyl. 1.6/2.0, 6 cyl. 3.0, V8 4.0 et TD 4 cyl. 2.0 + 6 cyl. 3.0)<br><br>M 3 (V8 3999 cm3 – 420 ch – 250 km/h)<br><br>X 5 (2007/...) 4x4, moteurs 6 cyl. 3.0, V8 4.4/4.8 et TD 6 cyl. 3.0)<br><br>Série 7 (2008/...) Berline, moteurs 6 cyl. 3.0, V8 4.4, V12 6.0 et TD 6 cyl. 3.0)<br><br>X 6 (2008/...) 4x4, moteurs 6 cyl. 3.0, V8 4.4 et TD 6 cyl. 3.0/3.5)<br><br>Z 4 (2009/...) Roadster, moteurs 6 cyl. 2.5/3.0)</br><br>X 1 (2009/...) 4x4, moteurs 6 cyl. 3.0 et TD 4 cyl. 2.0)<br><br>Série 5 \"Gran Turismo\" (2009/...) \"Coupé/berline\", moteurs 6 cyl. 3.0, V8 4.4 et TD 6 cyl. 3.0)",
        "tableau1": "",
        "image2": "../Images/Other/Engine_Bmw.jpg",
        "tableau2": "",
        "image3": "",
        "tableau3":"",
        "image4": "",
        "tableau4":""
    },
    {
		"titre": "BMW M2 CS",
		"description": "Les BMW M2 incarnent le plaisir de la conduite sportive dans sa plus pure expression. Découvrez quatre coupés pleins de tempérament : les BMW M240i Coupé et BMW M240i xDrive Coupé sont le parfait compromis entre sportivité et confort au quotidien. La BMW M2 Competition se distingue par une sportivité accrue et impressionne par son mélange exceptionnel de performances, d’agilité et de précision. La BMW M2 CS est le pionnier en matière de performances : elle a été en tout point conçue pour délivrer de hautes performances et être utilisée sur circuit.",
        "image": "../Images/M2-CS/BmwM2-2.jpg",
        "texte": "Palpitante. Sportive. Non conformiste. La BMW M2 Competition respire l'adrénaline pure à chaque détail. Des prises d'air surdimensionnées et la double calandre avec badge M habillent la partie avant. La silhouette de coupé caractéristique est présente depuis l'impressionnant capot jusqu'à la poupe aux lignes musculeuses. Des jantes M en alliage léger de 19\" marquent une tension dynamique tandis que les ouïes M avec inscription du modèle et les rétroviseurs extérieurs M dans la teinte extérieure soulignent le caractère sportif. À l'arrière, le diffuseur M et les sorties d'échappement en biseau, à la finition noire chromée, signalent sans équivoque ses ambitions sportives.",
        "tableau1": "<table border style='border-collapse'><thead><tr><th colspan='2'>Poids</th></tr></thead><tbody><tr><td>Poids à vide en kg (UE)</td><td>1625kg</td></tr><tr><td>Poids total admissible en kg</td><td>2010kg</td></tr><tr><td>Charge utile en kg</td><td>460kg</td></tr><tr><td>Charge autorisée sur l'essieu avant/arrière en kg</td><td>970/1080kg</td></tr></tbody></table>",
        "image2": "../Images/M2-CS/BmwM2-3.jpg",
        "tableau2": "<table border style='border-collapse'><thead><tr><th colspan='2'>Moteur à combustion</th></tr></thead><tbody><tr><td>Cylindres/soupapes par cylindre</td><td>6/4</td></tr><tr><td>Cylindrée en cm³</td><td>2979</td></tr><tr><td>Puissance en kW (ch) à t/min</td><td>331 (450) /6250</td></tr></tbody></table>",
        "image3": "../Images/M2-CS/BMWM2-CS-size.jpg",
        "tableau3":"<table border style='border-collapse'><thead><tr><th colspan='2'>Performances</th></tr></thead><tbody><tr><td>Vitesse de pointe en km/h</td><td>280</td></tr><tr><td>Accélération de 0 à 100 km/h en s</td><td>4,2</td></tr></tbody></table>",
        "image4": "../Images/M2-CS/BmwM2.jpg",
        "tableau4":"<table border style='border-collapse'><thead><tr><th colspan='2'>Consommation</th></tr></thead><tbody><tr><td>Cycle urbain en l/100 km</td><td>14,9</td></tr><tr><td>Cycle extra-urbain en l/100 km	</td><td>7,8</td></tr><tr><td>Cycle mixte en l/100 km</td><td>10,4</td></tr><tr><td>Émissions de CO₂ en cycle mixte en g/km</td><td>238</td></tr><tr><td>Capacité (approximative) du réservoir en l</td><td>52</td></tr></tbody></table>"
    },
    {
        "titre": "BMW M4 Coupé",
		"description": "Une sportive inconditionnelle aux lignes dynamiques et à l’intensité perceptible, qui recherche encore son égale sur l’asphalte. L'avant impressionnant avec ses imposantes prises d'air, les jantes en alliage léger expressives et la poupe musclée soulignent toute la puissance de la BMW M4 Coupé.",
        "image": "../Images/M4/BmwM4-1.jpg",
        "texte": "Une sportive hautes performances pour la route et pour les pistes, pour des dérives parfaites, des courbes rapides et les longues lignes droites intermédiaires. Pour une expérience de conduite remplie d’adrénaline, quand les mains enserrent le volant bien maniable et les doigts effleurent les palettes de changement de vitesse très réactives. Assis dans son siège M intégral, le conducteur ne fait qu’un avec la voiture. Une voiture sportive qui accélère le pouls : la BMW M4 Coupé.",
        "tableau1": "<table border style='border-collapse'><thead><tr><th colspan='2'>Poids</th></tr></thead><tbody><tr><td>Poids à vide en kg (UE)</td><td>1645kg</td></tr><tr><td>Poids total admissible en kg</td><td>2040kg</td></tr><tr><td>Charge utile en kg</td><td>470kg</td></tr><tr><td>Charge autorisée sur l'essieu avant/arrière en kg</td><td>970/1130kg</td></tr><tr><td>Volume du compartiment à bagages min. (sièges non rabattus ou toit fermé)</td><td>445</td></tr></tbody></table>",
        "image2": "../Images/M4/BmwM4-2.jpg",
        "tableau2": "<table border style='border-collapse'><thead><tr><th colspan='2'>Moteur à combustion</th></tr></thead><tbody><tr><td>Cylindres/soupapes par cylindre</td><td>6/4</td></tr><tr><td>Cylindrée en cm³</td><td>2979</td></tr><tr><td>Puissance en kW (ch) à t/min</td><td>317 (431) 5550/6500</td></tr></tbody></table>",
        "image3": "../Images/M4/BmwM4-size.jpg",
        "tableau3": "<table border style='border-collapse'><thead><tr><th colspan='2'>Performances</th></tr></thead><tbody><tr><td>Vitesse de pointe en km/h</td><td>250</td></tr><tr><td>Accélération de 0 à 100 km/h en s</td><td>4,3</td></tr></tbody></table>",
        "image4": "../Images/M4/BmwM4-4.jpg",
        "tableau4": "<table border style='border-collapse'><thead><tr><th colspan='2'>Consommation</th></tr></thead><tbody><tr><td>Cycle urbain en l/100 km</td><td>12,9</td></tr><tr><td>Cycle extra-urbain en l/100 km	</td><td>8,4</td></tr><tr><td>Cycle mixte en l/100 km</td><td>10,0</td></tr><tr><td>Émissions de CO₂ en cycle mixte en g/km</td><td>227</td></tr><tr><td>Capacité (approximative) du réservoir en l</td><td>60</td></tr></tbody></table>"
    },
    {
        "titre": "BMW M8 Competition",
		"description": "Le design progressiste de la BMW M8 Competition Coupé convaincant par ses lignes au tracé à la fois radicalement dynamique et élégant. Il donne naissance à une voiture de sport envoûtante, dont chaque facette exprime souverainement son caractère luxueux. L’aménagement intérieur recourt à des matériaux nobles et à un savoir-faire artisanal magistral pour réaliser une parfaite symbiose entre un tempérament sportif authentique et un luxe raffiné.",
        "image": "../Images/M8_Competition/BmwM8-1.jpg",
        "texte": "Les BMW M8 atteignent le summum du plaisir de conduire et du luxe. Avec grande élégance, elles combinent leurs gènes M authentiques avec l’exclusivité la plus raffinée – pour communiquer au conducteur des sensations sportives sur route comme sur circuit. Elles se déclinent en deux versions aussi séduisantes l’une que l’autre : la BMW M850i xDrive Coupé séduit par la synthèse unique qu’elle établit entre confort, puissance et efficience et la BMW M8 Competition Coupé avec M xDrive représente le summum. Il s’agit en effet d'une version encore plus puissante et extravagante de ce coupé élégant hautes performances.",
        "tableau1": "<table border style='border-collapse'><thead><tr><th colspan='2'>Poids</th></tr></thead><tbody><tr><td>Poids à vide en kg (UE)</td><td>1960kg</td></tr><tr><td>Poids total admissible en kg</td><td>2385kg</td></tr><tr><td>Charge utile en kg</td><td>500kg</td></tr><tr><td>Charge autorisée sur l'essieu avant/arrière en kg</td><td>1200/1230kg</td></tr><tr><td>Volume du compartiment à bagages min. (sièges non rabattus ou toit fermé)</td><td>420</td></tr></tbody></table>",
        "image2": "../Images/M8_Competition/BmwM8-3.jpg",
        "tableau2": "<table border style='border-collapse'><thead><tr><th colspan='2'>Moteur à combustion</th></tr></thead><tbody><tr><td>Cylindres/soupapes par cylindre</td><td>8/4</td></tr><tr><td>Cylindrée en cm³</td><td>4395</td></tr><tr><td>Puissance en kW (ch) à t/min</td><td>460 (625) 6000</td></tr></tbody></table>",
        "image3": "../Images/M8_Competition/BmwM8-size.jpg",
        "tableau3": "<table border style='border-collapse'><thead><tr><th colspan='2'>Performances</th></tr></thead><tbody><tr><td>Vitesse de pointe en km/h</td><td>250</td></tr><tr><td>Accélération de 0 à 100 km/h en s</td><td>3,2</td></tr></tbody></table>",
        "image4": "../Images/M8_Competition/BmwM8.jpg",
        "tableau4": "<table border style='border-collapse'><thead><tr><th colspan='2'>Consommation</th></tr></thead><tbody><tr><td>Cycle urbain en l/100 km</td><td>15,3</td></tr><tr><td>Cycle extra-urbain en l/100 km	</td><td>8,0</td></tr><tr><td>Cycle mixte en l/100 km</td><td>10,6</td></tr><tr><td>Émissions de CO₂ en cycle mixte en g/km</td><td>242</td></tr><tr><td>Capacité (approximative) du réservoir en l</td><td>68</td></tr></tbody></table>"
    },
    {
        "titre": "BMW X5 M Competition",
		"description": "Supérieures dans toutes les disciplines : les nouvelles BMW X5 M manifestent leur sportivité par des proportions imposantes, un design M exclusif et des performances hors du commun. Découvrez les trois SUV sportifs extravertis : la BMW X5 M50i et la BMW X5 M50d convainquent par leur combinaison unique de puissance, de confort et d’efficience. La BMW X5 M Competition avec système de transmission intégrale intelligente M xDrive séduit par un aménagement intérieur somptueux et un dynamisme emprunté au sport automobile.",
        "image": "../Images/X5M/BmwX5M-1.jpg",
        "texte": "Le design extérieur athlétique de la BMW X5 M Competition, par ses proportions vigoureuses et ses lignes au tracé précis, dégage une présence forte. Dans l’habitacle, des matériaux somptueux et des détails spécifiques M constituent la promesse d’une expérience au volant unique, conjuguant sensations sportives et luxe exclusif.",
        "tableau1": "<table border style='border-collapse'><thead><tr><th colspan='2'>Poids</th></tr></thead><tbody><tr><td>Poids à vide en kg (UE)</td><td>2385kg</td></tr><tr><td>Poids total admissible en kg</td><td>3000kg</td></tr><tr><td>Charge utile en kg</td><td>690kg</td></tr><tr><td>Charge autorisée sur l'essieu avant/arrière en kg</td><td>1410/1630kg</td></tr><tr><td>Volume du compartiment à bagages min. (sièges non rabattus ou toit fermé)</td><td>650</td></tr></tbody></table>",
        "image2": "../Images/X5M/BmwX5M-2.jpg",
        "tableau2": "<table border style='border-collapse'><thead><tr><th colspan='2'>Moteur à combustion</th></tr></thead><tbody><tr><td>Cylindres/soupapes par cylindre</td><td>8/4</td></tr><tr><td>Cylindrée en cm³</td><td>4395</td></tr><tr><td>Puissance en kW (ch) à t/min</td><td>460 (625) 6000</td></tr></tbody></table>",
        "image3": "../Images/X5M/BmwX5M-size.jpg",
        "tableau3": "<table border style='border-collapse'><thead><tr><th colspan='2'>Performances</th></tr></thead><tbody><tr><td>Vitesse de pointe en km/h</td><td>250 (290)</td></tr><tr><td>Accélération de 0 à 100 km/h en s</td><td>3,8</td></tr></tbody></table>",
        "image4": "../Images/X5M/BmwX5M-3.jpg",
        "tableau4": "<table border style='border-collapse'><thead><tr><th colspan='2'>Consommation</th></tr></thead><tbody><tr><td>Cycle urbain en l/100 km</td><td>17,2</td></tr><tr><td>Cycle extra-urbain en l/100 km	</td><td>11,0</td></tr><tr><td>Cycle mixte en l/100 km</td><td>13,0</td></tr><tr><td>Émissions de CO₂ en cycle mixte en g/km</td><td>296</td></tr><tr><td>Capacité (approximative) du réservoir en l</td><td>83</td></tr></tbody></table>"
    },
    {
		"titre": "Formule 1 et Formule E",
		"description": "Formule 1:<br> BMW Sauber F1 Team est une écurie de Formule 1 basée à Hinwil en Suisse qui évolue dans le championnat du monde de Formule 1 à partir de 2006. Elle est fondée à la fin de la saison 2005 après le rachat de l'écurie Sauber par le constructeur BMW, qui fournissait précédemment des moteurs à Williams. L'écurie décroche deux podiums et termine à la cinquième place du classement constructeur en 2006, sa première saison en Formule 1, et finit deuxième du classement constructeur 2007 après que McLaren a été exclue du championnat. Robert Kubica remporte la première et unique victoire BMW Sauber au Grand Prix du Canada 2008.Le 29 juillet 2009, BMW annonce son retrait de la compétition à la fin de la saison 2009 et la revente de l'écurie1. Peter Sauber rachète son ancienne équipe mais son inscription au championnat du monde demeure BMW Sauber. L'équipe est rebaptisée Sauber F1 Team en 2012.",
        "image": "../Images/Other/Bmw-Sauber.jpg",
        "texte": "Formule E:<br>La Formule E, aussi appelée formule électrique, est une catégorie de voitures de type monoplace de compétition. La compétition est basée sur des ePrix, courses à bord de voitures monoplaces disputées sur circuits urbains temporaires tracés en ville. Les monoplaces sont propulsée par un moteur électrique dont le bruit a une sonorité aiguë qui rappelle celle d'un avion au décollage1. La Formule E est conçue pour participer au championnat de Formule E FIA.<br> Depuis le début de la première série de courses entièrement électrique, BMW a non seulement fourni l'ensemble du parc de véhicules de sécurité, mais a également joué un rôle actif dans le développement de la Formule E. La prochaine étape logique du partenariat est intervenue dans la saison 5, avec Entrée des travaux de BMW. Fidèle à la devise #RacingBeyond, BMW i transporte depuis les valeurs de la Formule E dans l'environnement urbain des circuits de Formule E.",
        "tableau1": "",
        "image2": "../Images/Other/Weel-1.jpg",
        "tableau2": "",
        "image3": "../Images/Other/logo-m.png",
        "tableau3":"",
        "image4": "../Images/Other/FE.jpg",
        "tableau4":""
    }
];