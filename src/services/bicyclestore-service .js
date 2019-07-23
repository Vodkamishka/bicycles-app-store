export default class BicyclestoreService {

    getGallery = () => {
        return [
            { text: "Велосипеды BMX", text2: "bmx", id: 85, path: "https://vodkamishka.github.io/bicycles-app-store/images/gallery/bmx.jpg", link: '/pages/bmx' },
            { text: "Велосипеды беговелы", text2: "беговелы", id: 86, path: "https://vodkamishka.github.io/bicycles-app-store/images/gallery/run.jpg", link: '/pages/runbikes' },
            { text: "Велосипеды горные", text2: "горные", id: 87, path: "https://vodkamishka.github.io/bicycles-app-store/images/gallery/mountain.jpg", link: '/pages/mountain' },
            { text: "Велосипеды круизные", text2: "круизеры", id: 88, path: "https://vodkamishka.github.io/bicycles-app-store/images/gallery/cruise.jpg", link: '/pages/cruisebikes' },
            { text: "Велосипеды прогулочные", text2: "прогулочные", id: 89, path: "https://vodkamishka.github.io/bicycles-app-store/images/gallery/walking.jpg", link: '/pages/walkingbikes' },
            { text: "Велосипеды складные", text2: "складные", id: 90, path: "https://vodkamishka.github.io/bicycles-app-store/images/gallery/folding.jpg", link: '/pages/foldingbicycles' },
            { text: "Велосипеды шоссейные", text2: "шоссейные", id: 91, path: "https://vodkamishka.github.io/bicycles-app-store/images/gallery/highway.jpg", link: '/pages/highway' },
            { text: "Велосипеды", text2: "велосипеды", id: 92, path: "https://vodkamishka.github.io/bicycles-app-store/images/gallery/bicycles.jpg", link: '/pages/allbicycles' }
        ]
    }
    getDetailsBicycle = () => {
        return (
            {
                name: "Nirve CLASSIC LADIES 7-SPEED", brend: "Nirve", frame: "алюминий", series: "круизный велосипед" , year: 2018, sex: "для женщин",
                age: "для взрослых", price: 33060, guarantee: "3 года",
                description: "Алюминиевая патентованная рама Nirve Galaxie Cruiser Design",
                size: 26, path: "https://vodkamishka.github.io/bicycles-app-store/images/cruisebikes/Nirve CLASSIC LADIES 7-SPEED.jpg",  id: 100,  count: 1, inCart: false, totalBicyclePrice: 0
            }
        )
    }
    getHighway = () => {
        return [
            {
                name: "Cannondale SYSTEMSIX HM D/A DI2", brend: "Cannondale", frame: "карбон", series: "шоссейный велосипед" , year: 2019, sex: "унисекс",
                age: "для взрослых", price: 771540, guarantee: "5 лет",
                description: "SistemSix сделает любого спортсмена быстрее. Вы можете назвать это аэродинамическим преимуществом, дающим прибавку к скорости. Cannondale называет это квинтэссенцией системного подхода к эффективности для увеличения скорости в реальной жизни. Колеса, рама, вилка, а также вынос и подседельный штырь разработаны, как единое целое и прошли многочисленные тесты в аэродинамической трубе. При этом, велосипед сертифицирован для гонок UCI и оснащен измерителем мощности.",
                size: 28, path: "https://vodkamishka.github.io/bicycles-app-store/images/highway/Cannondale SYSTEMSIX HM.jpg",  id: 1, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Cannondale SYSTEMSIX CRB", brend: "Cannondale", frame: "карбон", series: "шоссейный велосипед" , year: 2019, sex: "унисекс",
                age: "для взрослых", price: 455560, guarantee: "5 лет",
                description: "Перед вами самый совершенный велосипед в мире с точки аэродинамики. Все его основные детали – рама, вилка, колеса и подседельный штырь разрабатывались одновременно и тестировались в аэродинамической трубе для достижения идеальных форм. Благодаря этому вы станете быстрее на самых ответственных стартах.",
                size: 28, path: "https://vodkamishka.github.io/bicycles-app-store/images/highway/Cannondale SYSTEMSIX CRB.jpg",  id: 2, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Cannondale SUPERX APEX 1", brend: "Cannondale", frame: "карбон", series: "шоссейный велосипед" , year: 2019, sex: "унисекс",
                age: "для взрослых", price: 213710, guarantee: "5 лет",
                description: "Чтобы испытать возможности карбоновой ракеты для велокросса SuperX необязательно переплачивать за навеску спортивного уровня. Оцените впечатляющие возможности этого байка в жестких гоночных условиях или на захватывающих покатушках по грунтовкам и тропам.",
                size: 28, path: "https://vodkamishka.github.io/bicycles-app-store/images/highway/Cannondale SUPERX APEX 1.jpg",  id: 3, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Jamis ICON PRO", brend: "Jamis", frame: "карбон", series: "шоссейный велосипед" , year: 2019, sex: "унисекс",
                age: "для взрослых", price: 144760, guarantee: "5 лет",
                description: "Велосипед для шоссейных гонок от Jamis порадует любителей непревзойденной жесткости алюминиевой рамы, которая унаследовала спортивную геометрию профессиональной модели Xenith. Идеально точная передача ваших усилий колесам и надежная управляемость в крутых виражах являются отличительными особенностями этой модели.",
                size: 28, path: "https://vodkamishka.github.io/bicycles-app-store/images/highway/Jamis ICON PRO.jpg",  id: 4, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Jamis RENEGADE EXPERT", brend: "Jamis", frame: "карбон", series: "шоссейный велосипед" , year: 2018, sex: "унисекс",
                age: "для взрослых", price: 145380, guarantee: "5 лет",
                description: "На этом велосипеде можно с одинаковым удовольствием ездить на работу, тренироваться с друзьями на шоссе или отправиться в невероятное автономное путешествие на несколько дней. Карбоновая рама и вилка снабжены технологией ECO, которая эффективно гасит вибрации и удары, а более 20 креплений на раме и вилке позволяют установить полноценные крылья, багажники и емкости с водой. Для дополнительного комфорта и сцепления на грунтовых дорогах вы можете установить покрышки шириной до 40 мм, при этом в креплении колес используются жесткие сквозные 12-ти миллиметровые оси. Компоненты трансмиссии Shimano 105 надежны и обеспечивают точное переключение, а дисковые тормоза с технологией Ice Tech без проблем справятся даже со спусками в горах.",
                size: 28, path: "https://vodkamishka.github.io/bicycles-app-store/images/highway/Jamis RENEGADE EXPERT.jpg",  id: 5, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Corratec CCT TEAM", brend: "Corratec", frame: "карбон", series: "шоссейный велосипед" , year: 2018, sex: "унисекс",
                age: "для взрослых", price: 119820, guarantee: "5 лет",
                description: "Если шоссейный велоспорт – ваша страсть, ССЕ Team станет идеальным орудием на любых дорогах и улицах городов. Он создан для тех, кто выкладывается на полную во время тренировок, а в гонках нацелен только на победу. Карбоновая рама обладает выдающейся жесткостью и аэродинамикой, а задние перья и карбоновая вилка с технологией Pro Control эффективно борются с вибрациями. Компоненты Shimano Ultegra обеспечивают точное переключение, а внутренняя проводка рубашек тросов создает модный облик и защищает уязвимые соединения от попадания воды.",
                size: 28, path: "https://vodkamishka.github.io/bicycles-app-store/images/highway/Corratec CCT TEAM.jpg",  id: 6, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "GT GTS SPORT", brend: "GT", frame: "алюминий", series: "шоссейный велосипед" , year: 2018, sex: "унисекс",
                age: "для взрослых", price: 48960, guarantee: "5 лет",
                description: "Шоссейные велосипеды серии GTS – это ещё одна страсть компании GT по скорости, произрастающая из успехов легендарной команды Lotto. Это перчатка, брошенная дорожному полотну, уходящему за горизонт. Сильные и несгибаемые, они сделаны, чтобы стать вашими верными спутниками и незаменимыми партнерами в тренировках, любительских гонках, бреветах или путешествиях. Классические шоссейники GTS Сомр и Sport – это, прежде всего, легкая, быстрая, жесткая и прочная алюминиевая рама, сваренная из гидроформированных труб переднего треугольника без привлечения усилений, увеличивающих её вес. Это современная геометрия, достойная профессионалов мирового тура. Это набор компонентов, не вступающих в компромисс с функциональностью, но делающих эти велосипеды привлекательными и доступными многочисленным любителям шоссейного велоспорта. Шоссейники GT всегда легкие в подъеме и точные в управлении. Каким бы длинным и сложным не был ваш маршрут, эти велосипеды смогут сделать его короче и легче. И если вы слышите зов дороги - не сопротивляйтесь, уступите ему.",
                size: 28, path: "https://vodkamishka.github.io/bicycles-app-store/images/highway/GT GTS SPORT.jpg",  id: 7, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Pure Fix THE KILO (FRAME GLOWS)", brend: "Pure", frame: "сталь", series: "шоссейный велосипед" , year: 2018, sex: "унисекс",
                age: "для взрослых", price: 33735, guarantee: "5 лет",
                description: "Велосипед серии GLOW. Катайте найтрайд на новом уровне! Рама этой модели светится в темноте. Просто оставьте велосипед на солнце на один час. Перевернув колесо вы можете менять фиксированную передачу на передачу со свободным ходом.",
                size: 28, path: "https://vodkamishka.github.io/bicycles-app-store/images/highway/Pure Fix THE KILO (FRAME GLOWS).jpg",  id: 8, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Pure Fix ZERO (RIMS GLOW)", brend: "Pure", frame: "сталь", series: "шоссейный велосипед" , year: 2017, sex: "унисекс",
                age: "для взрослых", price: 33735, guarantee: "5 лет",
                description: "Велосипед серии GLOW. Катайте найтрайд на новом уровне! Обода этой модели светятся в темноте. Просто оставьте велосипед на солнце на один час. Перевернув колесо вы можете менять фиксированную передачу на передачу со свободным ходом.",
                size: 28, path: "https://vodkamishka.github.io/bicycles-app-store/images/highway/Pure Fix ZERO (RIMS GLOW).jpg",  id: 9, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Cannondale SUPERX SE FORCE 1", brend: "Cannondale", frame: "карбон", series: "шоссейный велосипед" , year: 2018, sex: "унисекс",
                age: "для взрослых", price: 229140, guarantee: "5 лет",
                description: "Технологии и универсальность карбоновых рам для велокросса теперь на службе у тех, кто любит покорять просторы за пределами асфальта на шоссейном велосипеде. Перья заднего треугольника изготовлены по технологии SAVE, позволяющей материалу гасить вибрации и удары, благодаря чему катание покажется вам непривычно комфортным для этого типа велосипеда. Трансмиссия Sram FORCE имеет расширенный диапазон передач для преодоления затяжных подъемов, а покрышки WTB Riddler шириной 37 мм добавят контроля и проходимости на грунтовых дорогах и тропах.",
                size: 28, path: "https://vodkamishka.github.io/bicycles-app-store/images/highway/Cannondale SUPERX SE FORCE 1.jpg",  id: 10, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Cannondale S6 EVO CRB ULT DI2", brend: "Cannondale", frame: "карбон", series: "шоссейный велосипед" , year: 2018, sex: "унисекс",
                age: "для взрослых", price: 206160, guarantee: "5 лет", 
                description: "Шоссейные гонки – это самый популярный вид велоспорта в мире. Для тех, кто хочет получить лучшие технологии, применяемые профессиональными спортсменами, Cannondale предлагает более доступную модель с карбоновой рамой Supersix Evo и электрической трансмиссией Shimano Ultegra Di2. Трубы рамы имеют аэродинамический профиль, которого удалось добиться без ущерба весу, жесткости и прочности. Карбоновая вилка выполнена единой деталью от штока до дропаутов колеса, что делает ее максимально прочной и легкой. Ставьте себе новые цели и добивайтесь их – Supersix Evo всегда будет надежным помощником.",
                size: 28, path: "https://vodkamishka.github.io/bicycles-app-store/images/highway/Cannondale S6 EVO CRB ULT DI2.jpg",  id: 11, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "GT GRADE CARBON ULTEGRA", brend: "GT", frame: "карбон", series: "шоссейный велосипед" , year: 2018, sex: "унисекс",
                age: "для взрослых", price: 213915, guarantee: "5 лет",
                description: "«По долинам и по взгорьям…». Новый GT Grade Carbon Ultegra обожает лесные дороги, длительное пребывание на свежем воздухе и не знает усталости. Полностью карбоновая рама с геометрией All Day, отличающейся от рамы для велокросса удлиненной колесной базой для большей стабильности и более пологим углом рулевой колонки для лучшей обработки препятствий. Кроме этого, у его рамы более короткий рич, обеспечивающий комфортную посадку, и удлиненные нижние перья для плавного движения. С ним вы можете без устали провести весь день. Ну и незначительные бонусы в виде трансмиссии Shimano Ultegra 2х11 с расширенным диапазоном передач, дисковые гидравлические тормоза и роскошный вилсет Mavic Aksium, обрамленный внедорожными покрышками Clement Strada USH, готовыми к бескамерной установке.",
                size: 28, path: "https://vodkamishka.github.io/bicycles-app-store/images/highway/GT GRADE CARBON ULTEGRA.jpg",  id: 12, count: 1, inCart: false, totalBicyclePrice: 0
            }
        ]
    }
   
    getBMX = () => {
        return [
            {
                name: "WeThePeople ENVY 20.5", brend: "WeThePeople", frame: "алюминий", series: "велосипед BMX" , year: 2019, sex: "унисекс",
                age: "для взрослых", price: 75040, guarantee: "1 год",
                description: "WETHEPEOPLE Envy, хромомолибденовая конструкция из труб переменной толщины марки Sanko, кованые дропауты толщиной 7.5 мм.",
                size: 20, path: "https://vodkamishka.github.io/bicycles-app-store/images/bmx/WeThePeople ENVY 20.5.jpg",  id: 13, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "GT SPEED SERIES PRO", brend: "WeThePeople", frame: "алюминий", series: "велосипед BMX" , year: 2019, sex: "унисекс",
                age: "для взрослых", price: 66010, guarantee: "1 год",
                description: "Ультражесткая и супербыстрая алюминиевая рама – победоносное наследие, корнями вросшее в многолетнюю гоночную BMX-историю GT. Каждый из байков Speed Series оснащен лучшими компонентами, делающих их ещё быстрее и одними из самых желанных на рынке ВМХ Race. И даже если вам не удалось сегодня выиграть гонку, Pro поднимет ваше катание на новый уровень, а значит – поможет стать ближе к победе.",
                size: 20, path: "https://vodkamishka.github.io/bicycles-app-store/images/bmx/GT SPEED SERIES PRO.jpg",  id: 14, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "GT SPEED SERIES PRO 21.25", brend: "GT", frame: "алюминий", series: "велосипед BMX" , year: 2018, sex: "унисекс",
                age: "для взрослых", price: 70020, guarantee: "1 год",
                description: "Гоночная трасса ВМХ. Именно отсюда GT начали свой путь – и ни у кого другого нет такого победоносного наследия. Олимпийское серебро, более полутора десятков радужных маек Чемпиона Мира UCI, 15 титулов Чемпиона США и более 700 побед в категории Pro - гонщики из команды GT ВМХ знают все о том, как быть первым. Это отношение компании к гонкам BMX и другого подхода никогда не было. Именно поэтому трудно найти байки, которые будут более приемистыми, быстрыми, легкими и управляемыми, чем Speed Series. Пускай вам не удалось сегодня выиграть гонку, с ними вы можете подняться на новый уровень и всё равно стать ближе к победе. Суперпрочные, супержесткие рамы и готовые к битвам компоненты, делают байки Speed Series одними из желанных райдерами ВМХ Race.",
                size: 20, path: "https://vodkamishka.github.io/bicycles-app-store/images/bmx/GT SPEED SERIES PRO 21.25.jpg",  id: 15, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "GT SPEED SERIES EXPERT", brend: "GT", frame: "алюминий", series: "велосипед BMX" , year: 2019, sex: "унисекс",
                age: "для взрослых", price: 49280, guarantee: "1 год",
                description: "Байки Speed Series не делятся по принципу «лучше/хуже». Каждая из рам выполнена с целью без потерь преобразовать мощь, приложенную к педалям, в движение вперед и имеет уникальную геометрию, наиболее подходящую райдеру определенного роста. Более короткая чем Pro, рама Expert являет собой классический пример гоночного байка, собранного на, как и у верхних моделей, ультралегкой и ультражесткой алюминиевой раме с баттированными трубами Speed Metal, но в более скромной комплектации.",
                size: 20, path: "https://vodkamishka.github.io/bicycles-app-store/images/bmx/GT SPEED SERIES EXPERT.jpg",  id: 16, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Radio COBALT EXPERT 19.5", brend: "Radio", frame: "алюминий", series: "велосипед BMX" , year: 2019, sex: "унисекс",
                age: "для взрослых", price: 37800, guarantee: "1 год",
                description: "Конструкция полностью из хромомолибдена, шток 1-1/8 переменной толщины",
                size: 20, path: "https://vodkamishka.github.io/bicycles-app-store/images/bmx/Radio COBALT EXPERT 19.5.jpg",  id: 17, count: 1, inCart: false, totalBicyclePrice: 0
            },
            
            {
                name: "Radio CEPlinkR", brend: "Radio", frame: "алюминий", series: "велосипед BMX" , year: 2019, sex: "унисекс",
                age: "для взрослых", price: 37920, guarantee: "1 год",
                description: "Трубы из хроммолибдена 4130, каретка Mid, длина перьев 391 мм, дропауты 14 мм, верхняя труба - 22.7",
                size: 20, path: "https://vodkamishka.github.io/bicycles-app-store/images/bmx/Radio CEPTOR.jpg",  id: 18, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Eastern TRAILDIGGER 20.75", brend: "Eastern", frame: "алюминий", series: "велосипед BMX" , year: 2019, sex: "унисекс",
                age: "для взрослых", price: 29890, guarantee: "1 год",
                description: "Хромомолибденовый передний треугольник. Длина верхней трубы - 20.75. Длина нижних перьев - 13.38. Каретка MID.",
                size: 20, path: "https://vodkamishka.github.io/bicycles-app-store/images/bmx/Eastern TRAILDIGGER 20.75.jpg",  id: 19, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "GT TEAM DC 21.0", brend: "GT", frame: "алюминий", series: "велосипед BMX" , year: 2019, sex: "унисекс",
                age: "для взрослых", price: 29680, guarantee: "1 год",
                description: "Вся уличная инфраструктура просто трясется от страха, ожидая нападения Дэна Конвея (DC). Его беспощадная манера катания требует от байка максимум надежности, и Дэн досыта накормил ею все три модели, к созданию которых прикоснулся. Для всех, кто стремится кататься как Дэн: жестко, бесстрашно и уверенно.",
                size: 20, path: "https://vodkamishka.github.io/bicycles-app-store/images/bmx/GT TEAM DC 21.0.jpg",  id: 20, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Eastern ORBIT 20.25", brend: "Eastern", frame: "алюминий", series: "велосипед BMX" , year: 2019, sex: "унисекс",
                age: "для взрослых", price: 24290, guarantee: "1 год",
                description: "Хайтэн сплав, хромомолибденовая нижняя труба. Длина верхней трубы - 20.25. Длина нижних перьев - 13.36. Каретка MID.",
                size: 20, path: "https://vodkamishka.github.io/bicycles-app-store/images/bmx/Eastern ORBIT 20.25.jpg",  id: 21, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Eastern COBRA 20", brend: "Eastern", frame: "алюминий", series: "велосипед BMX" , year: 2019, sex: "унисекс",
                age: "для взрослых", price: 20020, guarantee: "1 год",
                description: "Хайтэн сплав. Длина верхней трубы - 20. Длина нижних перьев - 13.38. Каретка USA.",
                size: 20, path: "https://vodkamishka.github.io/bicycles-app-store/images/bmx/Eastern COBRA 20.jpg",  id: 22, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Eastern LOWDOWN 20", brend: "Eastern", frame: "алюминий", series: "велосипед BMX" , year: 2019, sex: "унисекс",
                age: "для взрослых", price: 15300, guarantee: "1 год",
                description: "Конические ноги, цельный хроммолибденовый шток, вынос дропаутов 28 мм, под ось 10 мм.",
                size: 20, path: "https://vodkamishka.github.io/bicycles-app-store/images/bmx/Eastern LOWDOWN 20.jpg",  id: 23, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Eastern COMMANDO 20", brend: "Eastern", frame: "алюминий", series: "велосипед BMX" , year: 2019, sex: "унисекс",
                age: "для взрослых", price: 15300, guarantee: "1 год",
                description: "	14 мм хроммолибденовая ось на промышленных подшипниках. Фрезерованный алюминиевый корпус с отверстиями под 36 спиц",
                size: 20, path: "https://vodkamishka.github.io/bicycles-app-store/images/bmx/Eastern COMMANDO 20.jpg",  id: 24, count: 1, inCart: false, totalBicyclePrice: 0
            }
        ]
    }
    getMountain = () => {
        return [
            {
                name: "Cannondale SCALPEL SI HM WC", brend: "Cannondale", frame: "карбон", series: "горный велосипед" , year: 2019, sex: "унисекс",
                age: "для взрослых", price: 708470, guarantee: "5 лет",
                description: "Этот велосипед используется командой Cannondale в соревнованиях Кубка Мира по кросс-кантри и завоевал немало наград вместе с гонщиками. Рама из высокомодульного карбонового волокна отличается повышенной жесткостью при меньшем весе, а новая модель вилки, Lefty Ocho - низким весом и впечатляющей торсионной жесткостью для точного управления. Scalpel WC укомплектован только самыми легкими компонентами, ведь у спортсменов на счету каждый грамм.",
                size: 29, path: "https://vodkamishka.github.io/bicycles-app-store/images/mountain/Cannondale SCALPEL SI HM WC.jpg",  id: 25, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Norco SIGHT C7 GX VLT", brend: "Norco", frame: "карбон", series: "горный велосипед" , year: 2019, sex: "унисекс",
                age: "для взрослых", price: 655760, guarantee: "5 лет",
                description: "Если вы хотите побывать в красивых местах без лишних усилий, подняться на горные вершины, где нет подъемников, но сделать это на обычном велосипеде нет сил или желания, ваш выбор Sight VLT с электромотором. Нет, он не едет сам, но добавит изрядное количество мощности, которой будет достаточно, чтобы без лишнего труда одолеть любой подъем. Емкости батареи хватит, чтобы набрать до 1400 м высоты, мощнейшие тормоза Avid Code стоят на страже вашей безопасности, а широкие покрышки справятся с возросшими нагрузками. Этот байк выглядит как обычный Sight и управляется не хуже, но он открывает мир возможностей, недоступных даже профессиональному спортсмену за рулем обычного велосипеда.",
                size: 27.5, path: "https://vodkamishka.github.io/bicycles-app-store/images/mountain/Norco SIGHT C7 GX VLT.jpg",  id: 26, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Norco SIGHT C7 NX12 VLT", brend: "Norco", frame: "карбон", series: "горный велосипед" , year: 2019, sex: "унисекс",
                age: "для взрослых", price: 522480, guarantee: "5 лет",
                description: "Взгляните по-новому на знакомые тропы, оседлав Sight VLT с электромотором. Катание по трейлам в соседнем лесу вызовет бурю эмоций, когда без лишних усилий будете поддерживать скорость до 25 км/ч. Но истинные возможности этого велосипеда раскроются в горах, ведь благодаря батарее емкостью 630 W/h, вы сможете уехать гораздо дальше за меньшее время и вдоволь накататься, не истратив все силы без остатка. Современная геометрия и оптимизированная кинематика подвески позволят атаковать техничные трассы, как на обычном велосипеде, а широкая резина справится с возросшими нагрузками.",
                size: 27.5, path: "https://vodkamishka.github.io/bicycles-app-store/images/mountain/Norco SIGHT C7 NX12 VLT.jpg", id: 27, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Norco REVOLVER FS 9.1", brend: "Norco", frame: "карбон", series: "горный велосипед" , year: 2019, sex: "унисекс",
                age: "для взрослых", price: 298440, guarantee: "5 лет",
                description: "Для многих поклонников внедорожного велоспорта классический велосипед для кросс-кантри является синонимом маунтинбайка, но если при этом хочется комфорта, то двухподвес Revolver станет прекрасным выбором для вашего увлечения. Марафоны, короткие динамичные заезды в кросс-кантри или просто гонки с друзьями по лесу откроются с новой стороны в седле этого велосипеда. В вашем распоряжении вилка Rock Shox Sid с возможностью удаленной блокировки, первоклассная трансмиссия Sram X01 Eagle, которая позволяет навсегда забыть о переднем переключателе, а также легкие и прочные колеса DT Swiss.",
                size: 29, path: "https://vodkamishka.github.io/bicycles-app-store/images/mountain/Norco REVOLVER FS 9.1.jpg", id: 28, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "GT SANCTION EXPERT", brend: "GT", frame: "карбон", series: "горный велосипед" , year: 2019, sex: "унисекс",
                age: "для взрослых", price: 246610, guarantee: "3 года",
                description: "Как и верхняя модель серии, GT Sanction Expert стремителен как даунхилльный байк, но сильно «похудевший» за счет облегченных труб рамы и укороченной до 165мм подвески Independent Drivetrain. Без проблем он способен заехать в любую гору, чтобы сразу после этого разорвать в клочья самый жесткий трейл, начинающийся с её вершины. Лучший друг и залог успеха для эксперта эндуро. Символ свободы для любого маунтинбайкера, катающегося в горах.",
                size: 27.5, path: "https://vodkamishka.github.io/bicycles-app-store/images/mountain/GT SANCTION EXPERT.jpg", id: 29, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "GT FORCE AL ELITE", brend: "GT", frame: "алюминий", series: "горный велосипед" , year: 2019, sex: "унисекс",
                age: "для взрослых", price: 225320, guarantee: "5 лет",
                description: "Хороший байк для All Mountain не обязан быть непременно карбоновым, особенно если его рама имеет такую же, как и у «пластмассовых» собратьев, настраиваемую геометрию Flip Chip и не менее функциональна. Всё это – новый Force Al Elite с воздушной амортизацией и тщательно подобранными компонентами, не бьющими по бюджету, готовый участвовать в любом полете вашей фантазии, не задумываясь: «а могу ли я тут подняться, а вот тут - проехать», вернуться вместе с вами домой и ждать следующей поездки.",
                size: 27.5, path: "https://vodkamishka.github.io/bicycles-app-store/images/mountain/GT FORCE AL ELITE.jpg", id: 30, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Corratec INSIDE LINK 10 HZ 140 Y", brend: "Corratec", frame: "алюминий", series: "горный велосипед" , year: 2019, sex: "унисекс",
                age: "для взрослых", price: 185770, guarantee: "2 года",
                description: "Сварная конструкция, тройной баттинг. Алюминий 7005. Подвеска Inside Link 10Hz с ходом 140 мм. Кареточный узел и некоторые элементы рамы облегчены по технологии HTC. Конусный рулевой стакан - 1 1/8-1.5. Дропауты под сквозную ось 142х12 мм",
                size: 27.5, path: "https://vodkamishka.github.io/bicycles-app-store/images/mountain/Corratec INSIDE LINK 10 HZ 140 Y.jpg", id: 31, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "GT ZASKAR 9R CARBON ELITE", brend: "GT", frame: "карбон", series: "горный велосипед" , year: 2018, sex: "унисекс",
                age: "для взрослых", price: 148200, guarantee: "3 года",
                description: "Симбиоз гоночного духа, присущего без исключения, всем байкам GT серии XC, c жаждой приключений вдали от соревнований сделали этот GT Zaskar 9R Carbon Elite идеальным для каждого, кто одержим страстью к катанию, будь это любительские гонки кросс-кантри, марафоны или поездки с друзьями «от дома и до вечера». Карбоновая рама от флагмана, крепкие накатистые колеса и надежные компоненты нужны каждому любителю маунтинбайка, даже если он не является спортсменом, нацеленным на подиумы. Каждая деталь этого велосипеда от выноса руля до заднего переключателя кропотливо подобрана с одной целью – не обращая на себя пристального внимания, служить вам годами.",
                size: 29, path: "https://vodkamishka.github.io/bicycles-app-store/images/mountain/GT ZASKAR 9R CARBON ELITE.jpg", id: 32, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Norco FLUID 24 FS", brend: "Norco", frame: "алюминий", series: "горный велосипед" , year: 2019, sex: "унисекс",
                age: "для подростков", price: 115290, guarantee: "5 лет",
                description: "Если ваши дети выросли достаточно для того, чтобы гонять по трассам вместе с вами, у Norco есть для них достойный велосипед. Геометрия этого байка специально разработана для подростков, чтобы сделать обучение технике катания и управление велосипедом максимально удобным. Подвеска A.R.T. с ходом 100 мм эффективно гасит удары от приземлений и неровностей, при этом, не мешает крутить в гору. 10-ти скоростная трансмиссия Shimano позволит не отставать от взрослых и преодолевать даже самые крутые подъемы, а гидравлические дисковые тормоза помогут контролировать скорость в любых условиях.",
                size: 29, path: "https://vodkamishka.github.io/bicycles-app-store/images/mountain/Norco FLUID 24 FS.jpg", id: 33, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Corratec Inside Link 65 Y", brend: "Corratec", frame: "алюминий", series: "горный велосипед" , year: 2014, sex: "унисекс",
                age: "для взрослых", price: 202032, guarantee: "2 года",
                description: "Хотите приобщиться к технологии подвески Inside Link, но при этом сэкономить на покупке? Тогда этот байк для вас. Его легкая и прочная алюминиевая рама использует патентованную подвеску от Corratec, исключающую раскачку при педалировании и педал-кик при срабатывании подвески на неровностях, оставаясь чувствительной к препятствиям под колесами. Набор надежных и функциональных комплектующих приятно удивят как спортсмена, так и любителя катания на горном байке. Вы также сможете насладиться плавностью хода нового стандарта колес размера 27.5 дюймов.",
                size: 27.5, path: "https://vodkamishka.github.io/bicycles-app-store/images/mountain/Corratec Inside Link 65 Y.jpg", id: 34, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Jamis DAKAR A2", brend: "Jamis", frame: "алюминий", series: "горный велосипед" , year: 2019, sex: "унисекс",
                age: "для взрослых", price: 97230, guarantee: "5 лет",
                description: "Бюджетная версия Dakar позволит оценить преимущества двухподвеса, не переплачивая за дорогую навеску. Задняя подвеска отрабатывает корни, камни и неровности рельефа, обеспечивая постоянное сцепление заднему колесу, как на спусках, так и на подъемах. На этом велосипеде вы сможете гонять по трейлам в соседнем парке и по горным тропам с одинаковым удовольствием.",
                size: 27.5, path: "https://vodkamishka.github.io/bicycles-app-store/images/mountain/Jamis DAKAR A2.jpg", id: 35, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "GT PANTERA ELITE", brend: "GT", frame: "алюминий", series: "горный велосипед" , year: 2019, sex: "унисекс",
                age: "для взрослых", price: 87150, guarantee: "5 лет",
                description: "Взяв лучшее из трех полюсов маунтинбайка, «плюсовой» трейл-хардтейл исключил из своего рациона слово «невозможно». Современная геометрия дала ему маневренность. Колеса, по размеру схожие с найнерами, обеспечили легкость хода и стабильность, а покрышки увеличенного размера принесли комфорт и мягкость фэт-байка. Для всех, кто катается много, часто, по любому типу ландшафта и желающих всегда оставаться в «зоне комфорта».",
                size: 27.5, path: "https://vodkamishka.github.io/bicycles-app-store/images/mountain/GT PANTERA ELITE.jpg", id: 36, count: 1, inCart: false, totalBicyclePrice: 0
            },
        ]
    }
    
    getRunBikes = () => {
        return [
            {
                name: "Cannondale KIDS TRAIL BALANCE", brend: "Cannondale", frame: "алюминий", series: "велосипед беговел" , year: 2019, sex: "унисекс",
                age: "для детей",  price: 13790, guarantee: "5 лет",
                description: "Для самых маленьких Cannondale создал невероятно легкий и стильный беговел, который позволит быстро научиться балансировать на 2х колесах. Аналогично дорогим моделям для взрослых, он оснащен вилкой Lefty, которая экономит вес и необычно выглядит.",
                size: 12, path: "https://vodkamishka.github.io/bicycles-app-store/images/runbikes/Cannondale KIDS TRAIL BALANCE.jpg",  id: 37, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "GT VAMOOSE 12", brend: "GT", frame: "алюминий", series: "велосипед беговел" , year: 2019, sex: "унисекс",
                age: "для детей",  price: 12040, guarantee: "3 года",
                description: "«Беговел» - это способ познания мира настолько юным райдером, что умение нажимать на педали к нему ещё пришло. Благодаря этому маленькому велосипеду без педалей ребенок сможет не только быстрее освоиться с равновесием, его развитие происходит интенсивнее, он растет самостоятельным, смелым и уверенным в своих возможностях. Приобретенные навыки, будут полезны не только ко времени велосипеда с педалями, но и обязательно пригодятся ему во взрослой жизни.",
                size: 16, path: "https://vodkamishka.github.io/bicycles-app-store/images/runbikes/GT VAMOOSE 12.jpg",  id: 38, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Eastern PUSHER", brend: "Eastern", frame: "алюминий", series: "велосипед беговел" , year: 2019, sex: "унисекс",
                age: "для детей",  price: 7110, guarantee: "1 год",
                description: "Лёгкий алюминиевый беговел для самых маленьких детишек. Легко и быстро разбирается и собирается.",
                size: 12, path: "https://vodkamishka.github.io/bicycles-app-store/images/runbikes/Eastern PUSHER.jpg",  id: 39, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "GT MACH ONE PUSH 12", brend: "GT", frame: "алюминий", series: "велосипед беговел" , year: 2019, sex: "унисекс",
                age: "для детей",  price: 8190, guarantee: "5 лет",
                description: "Естественное желание, которому подвержен любой ребёнок – это тяга к познанию окружающего мира. Но что делать, когда умение одновременно нажимать на педали и удерживать равновесие ещё не пришло? Решение есть. Это - «беговел» GT Mach One с колесами 12 дюймов, с которым ребенок вполне быстро и безопасно может освоиться, едва научившись ходить. Благодаря этому маленькому велосипеду без педалей развитие ребёнка происходит интенсивнее, он растет самостоятельным, смелым и уверенным в своих возможностях. Навыки, приобретённые в самом юном возрасте, будут полезны, когда придет время велосипеда с педалями, и, несомненно, пригодятся во взрослой жизни.",
                size: 12, path: "https://vodkamishka.github.io/bicycles-app-store/images/runbikes/GT MACH ONE PUSH 12.jpg",  id: 40, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Rebel Kidz CLASSIC RUNNER BIKE FOR BOYS", brend: "Rebel", frame: "сталь", series: "велосипед беговел" , year: 2019, sex: "унисекс",
                age: "для детей",  price: 6480, guarantee: "1 год",
                description: "Симпатичный беговел в классическом стиле для самых маленьких велосипедистов-первооткрывателей. Беспедальная конструкция позволяет стоять ногами на земле, отталкиваться и держать баланс, тем самым, убирая страх и, позволяя совершенствовать свои навыки езды маленьким велосипедистам. Рама с заниженным центром тяжести для большего контроля и устойчивости, мягкое сиденье регулируется по высоте, а надувные колёса можно подкачать или подспустить. Беговел Rebel Kidz подарит вашему ребёнку много радости и станет отличным другом на первых шагах в интересный мир велосипедов!",
                size: 12, path: "https://vodkamishka.github.io/bicycles-app-store/images/runbikes/Rebel Kidz CLASSIC RUNNER BIKE FOR BOYS.jpg",  id: 41, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Rebel Kidz CLASSIC RUNNER BIKE FOR GIRLS", brend: "Rebel", frame: "сталь", series: "велосипед беговел" , year: 2019, sex: "унисекс",
                age: "для детей",  price: 6480, guarantee: "1 год",
                description: "Симпатичный беговел в классическом стиле для самых маленьких велосипедистов-первооткрывателей. Беспедальная конструкция позволяет стоять ногами на земле, отталкиваться и держать баланс, тем самым, убирая страх и, позволяя совершенствовать свои навыки езды маленьким велосипедистам. Рама с заниженным центром тяжести для большего контроля и устойчивости, мягкое сиденье регулируется по высоте, а надувные колёса можно подкачать или подспустить. Беговел Rebel Kidz подарит вашему ребёнку много радости и станет отличным другом на первых шагах в интересный мир велосипедов!",
                size: 12, path: "https://vodkamishka.github.io/bicycles-app-store/images/runbikes/Rebel Kidz CLASSIC RUNNER BIKE FOR GIRLS.jpg",  id: 42, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Outleap JOYRIDE", brend: "Cannondale", frame: "алюминий", series: "велосипед беговел" , year: 2019, sex: "унисекс",
                age: "для детей",  price: 2400, guarantee: "2 года",
                description: "Баланс - одна из важнейших вещей в жизни, однако, чтобы его приобрести, иной раз приходится очень долго работать над собой. Но это куда проще будет сделать вашим детям, если они обуздали баланс в детстве. Если говорить о физическом проявлении баланса, то лучший способ - беговел, ведь это не только тренажер, но и игра, развлечение! Joyride - облегченный беговел, который сможет поднять даже 2 летний ребенок, вес ниже 2 кг. Мягкая сидушка и EVA покрышки позволят малышу покорять новые вершины с комфортом.",
                size: 12, path: "https://vodkamishka.github.io/bicycles-app-store/images/runbikes/Outleap JOYRIDE.jpg",  id: 43, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Rebel Kidz CLASSIC RUNNER BIKE", brend: "Rebel", frame: "сталь", series: "велосипед беговел" , year: 2016, sex: "унисекс",
                age: "для детей",  price: 9110, guarantee: "1 год",
                description: "Симпатичный беговел в классическом стиле для самых маленьких велосипедистов-первооткрывателей. Беспедальная конструкция позволяет стоять ногами на земле, отталкиваться и держать баланс, тем самым, убирая страх и, позволяя совершенствовать свои навыки езды маленьким велосипедистам. Рама с заниженным центром тяжести для большего контроля и устойчивости, мягкое сиденье регулируется по высоте, а надувные колёса можно подкачать или подспустить. Беговел Rebel Kidz подарит вашему ребёнку много радости и станет отличным другом на первых шагах в интересный мир велосипедов!",
                size: 12, path: "https://vodkamishka.github.io/bicycles-app-store/images/runbikes/Rebel Kidz CLASSIC RUNNER BIKE.jpg",  id: 44, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Outleap ROCKET", brend: "Outleap", frame: "сталь", series: "велосипед беговел" , year: 2018, sex: "унисекс",
                age: "для детей",  price: 1800, guarantee: "1 год",
                description: "Баланс - одна из важнейших вещей в жизни, однако, чтобы его приобрести, иной раз приходится очень долго работать над собой. Но это куда проще будет сделать вашим детям, если они обуздали баланс в детстве. Если говорить о физическом проявлении баланса, то лучший способ - беговел, ведь это не только тренажер, но и игра, развлечение! Rocket - крайне мощный аппарат с хорошим накатом. Мягкая сидушка и EVA покрышки позволят малышу покорять новые вершины с комфортом.",
                size: 12, path: "https://vodkamishka.github.io/bicycles-app-store/images/runbikes/Outleap ROCKET.jpg",  id: 45, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "GT VAMOOSE 12", brend: "GT", frame: "алюминий", series: "велосипед беговел" , year: 2017, sex: "унисекс",
                age: "для детей",  price: 9230, guarantee: "1 год",
                description: "Баланс байк от GT с низким центром тяжести, который дает отличную стабилизацию. Широкие покрышки 2.25 отлично подходят для такого типа велосипеда, ведь чем шире, тем проще ребенку балансировать. Помимо удовольствия, такие велосипеды развивают в ребенке чувство баланса и тренируют вестибулярный аппарат.",
                size: 12, path: "https://vodkamishka.github.io/bicycles-app-store/images/runbikes/GT VAMOOSE.jpg",  id: 46, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Outleap JOYRIDE", brend: "Cannondale", frame: "алюминий", series: "велосипед беговел" , year: 2019, sex: "унисекс",
                age: "для детей",  price: 2400, guarantee: "2 года",
                description: "Баланс - одна из важнейших вещей в жизни, однако, чтобы его приобрести, иной раз приходится очень долго работать над собой. Но это куда проще будет сделать вашим детям, если они обуздали баланс в детстве. Если говорить о физическом проявлении баланса, то лучший способ - беговел, ведь это не только тренажер, но и игра, развлечение! Joyride - облегченный беговел, который сможет поднять даже 2 летний ребенок, вес ниже 2 кг. Мягкая сидушка и EVA покрышки позволят малышу покорять новые вершины с комфортом.",
                size: 12, path: "https://vodkamishka.github.io/bicycles-app-store/images/runbikes/Outleap JOYRIDE pink.jpg",  id: 47, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Eastern PUSHER", brend: "Eastern", frame: "алюминий", series: "велосипед беговел" , year: 2017, sex: "унисекс",
                age: "для детей",  price: 8060, guarantee: "1 год",
                description: "Лёгкий алюминиевый беговел для самых маленьких детишек. Легко и быстро разбирается и собирается.",
                size: 12, path: "https://vodkamishka.github.io/bicycles-app-store/images/runbikes/Eastern PUSHER black.jpg",  id: 48, count: 1, inCart: false, totalBicyclePrice: 0
            },
        ]
    }
    getFoldingBikes = () => {
        return [
            {
                name: "Outleap BERN", brend: "Outleap", frame: "алюминий", series: "велосипед складной" , year: 2019, sex: "унисекс",
                age: "для взрослых", price: 19990, guarantee: "3 года",
                description: "Bern - как хороший автомобиль, обладает лаконичным дизайном, качественной трансмиссией и приятной покраской. Ехать по городу на нем крайне удобно, ведь благодаря 16 колесами он очень маневренный, а в складном состоянии попросту мал. Nexus-3 обеспечивает переключение скоростей плавно и четко, а самое главное не боится грязи и пыли, ведь все система заключена в корпусе втулки.",
                size: 16, path: "https://vodkamishka.github.io/bicycles-app-store/images/foldingbikes/Outleap BERN.jpg",  id: 49, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Ubike MINI 8", brend: "Ubike", frame: "алюминий", series: "велосипед складной" , year: 2015, sex: "унисекс",
                age: "для взрослых", price: 52960, guarantee: "3 года",
                description: "Алюминиевая рама под 8 колеса. Патентированный замок для складывания велосипеда. Велосипед создан для мегаполиса! В сложенном состоянии габариты велосипеда не превышают (50 В*70 Д*25 Ш) см!!! Любителям новых ощущений он придётся по вкусу.",
                size: 8, path: "https://vodkamishka.github.io/bicycles-app-store/images/foldingbikes/Ubike MINI 8.jpg",  id: 50, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Bickerton JUNCTION 1507 COUNTRY", brend: "Bickerton", frame: "алюминий", series: "велосипед складной" , year: 2019, sex: "унисекс",
                age: "для взрослых", price: 31920, guarantee: "3 года",
                description: "Классическая модель от Bickerton. Именно тот пример, когда в велосипеде все настолько сбалансированно, что и не нужно ничего менять. Английская классика складного велосипеда.",
                size: 20, path: "https://vodkamishka.github.io/bicycles-app-store/images/foldingbikes/Bickerton JUNCTION 1507 COUNTRY.jpg",  id: 51, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Outleap RIO", brend: "Outleap", frame: "алюминий", series: "велосипед складной" , year: 2019, sex: "унисекс",
                age: "для взрослых", price: 16450, guarantee: "3 года",
                description: "Rio - яркий и шустрый, готовый к любым авантюрам на все 100%, только и ждет, когда на него сядут, чтобы проявить себя. 7 скоростей, да еще и на 20 колёсах он действительно может вытворять такое, чего от него никак не ожидал, но только хорошо! А вдоволь накатавшись, RIO всегда можно сложить и убрать в укромное место, а он всегда будет готов к новым приключениям.",
                size: 20, path: "https://vodkamishka.github.io/bicycles-app-store/images/foldingbikes/Outleap RIO.jpg",  id: 52, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Outleap ZION", brend: "Outleap", frame: "алюминий", series: "велосипед складной" , year: 2019, sex: "унисекс",
                age: "для взрослых", price: 26600, guarantee: "3 года",
                description: "Zion - карманный спорткар. Ему принадлежит полный контроль над скоростью в мире складных велосипедов. Шоссейный переключатель Shimano на 8-скоростей и гидравлические тормоза, 20 радиус и резина Kenda 1.5, он может быть крайне быстрым, но все зависит от пилота, готов ли он к этому испытанию. Дизайн приковывает взгляд, ведь он не так прост.",
                size: 20, path: "https://vodkamishka.github.io/bicycles-app-store/images/foldingbikes/Outleap ZION.jpg",  id: 53, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Outleap HAVANA", brend: "Outleap", frame: "алюминий", series: "велосипед складной" , year: 2018, sex: "унисекс",
                age: "для взрослых", price: 11100, guarantee: "3 года",
                description: "Havana - маленькая и интуитивно понятная: одна скорость, две педали, руль, седло и можно ехать. Создана для людей, которые хотят кататься и при этом не думать о том, где хранить велосипед. Все просто, уберите его под кровать или в шкаф, сложите в поезде или уберите в багажник авто. Havana действительно очень мала, а вот удовольствие от нее огромно, ведь это ваше карманное приключение на каждый день, стоит лишь сделать щелк.",
                size: 16, path: "https://vodkamishka.github.io/bicycles-app-store/images/foldingbikes/Outleap HAVANA.jpg",  id: 54, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Bickerton JUNCTION 1307 COUNTRY", brend: "Bickerton", frame: "алюминий", series: "велосипед складной" , year: 2019, sex: "унисекс",
                age: "для взрослых", price: 22260, guarantee: "5 лет",
                description: "Классическая модель от Bickerton. Именно тот пример, когда в велосипеде все настолько сбалансированно, что и не нужно ничего менять. Английская классика складного велосипеда.",
                size: 20, path: "https://vodkamishka.github.io/bicycles-app-store/images/foldingbikes/Bickerton JUNCTION 1307 COUNTRY.jpg",  id: 55, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Ubike Citizen 20", brend: "Ubike", frame: "алюминий", series: "велосипед складной" , year: 2014, sex: "унисекс",
                age: "для взрослых", price: 32350, guarantee: "3 года",
                description: "Обладатель награды D&I Product Design Award 2013.Уникальная конструкция рамы и яркое цветовое решение велосипеда выделит своего обладателя среди серой массы, предоставив при этом максимальный функционал в черте города.",
                size: 20, path: "https://vodkamishka.github.io/bicycles-app-store/images/foldingbikes/Ubike Citizen 20.jpg",  id: 56, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Ubike STREAK 18-speed 24", brend: "Ubike", frame: "алюминий", series: "велосипед складной" , year: 2015, sex: "унисекс",
                age: "для взрослых", price: 68216, guarantee: "3 года",
                description: "Алюминиевая рама под 24 колеса. Патентированный замок для складывания велосипеда. 24 колеса дают отличную проходимость, а вместе с 18-ти скоростной трансмиссией данный велосипед станет отличным приобретением для дачи и города.",
                size: 24, path: "https://vodkamishka.github.io/bicycles-app-store/images/foldingbikes/Ubike STREAK 18-speed 24.jpg",  id: 57, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Ubike Unique Freeway 20", brend: "Ubike", frame: "алюминий", series: "велосипед складной" , year: 2015, sex: "унисекс",
                age: "для взрослых", price: 27936, guarantee: "3 года",
                description: "Простота - залог успеха. Никаких переключателей или сложных технических штуковин. Одна скорость, одна цель - доставить вас к месту назначения.",
                size: 20, path: "https://vodkamishka.github.io/bicycles-app-store/images/foldingbikes/Ubike Unique Freeway 20.jpg",  id: 58, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Outleap HAVANA", brend: "Outleap", frame: "алюминий", series: "велосипед складной" , year: 2017, sex: "унисекс",
                age: "для взрослых", price: 18590, guarantee: "1 год",
                description: "Havana - одна скорость, две педали, руль, седло и можно ехать. Создана для людей, которые хотят кататься, и при этом не думать о том, где хранить велосипед. Все просто: уберите его под кровать или в шкаф, сложите в поезде или уберите в багажник авто. Havana действительно очень мала, а вот удовольствие от нее огромное. Это ваше карманное приключение на каждый день, стоит лишь сделать щелк.",
                size: 16, path: "https://vodkamishka.github.io/bicycles-app-store/images/foldingbikes/Outleap HAVANA aqua.jpg",  id: 59, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Ubike JAZZ 14", brend: "Ubike", frame: "алюминий", series: "велосипед складной" , year: 2015, sex: "унисекс",
                age: "для взрослых", price: 45360, guarantee: "3 года",
                description: "Очень юркий велосипед с хорошими ходовыми качествами и весом. Отличный выбор для городских будней.",
                size: 14, path: "https://vodkamishka.github.io/bicycles-app-store/images/foldingbikes/Ubike JAZZ 14.jpg",  id: 60, count: 1, inCart: false, totalBicyclePrice: 0
            }
        ]
    }
    getCruiseBikes = () => {
        return [
            {
                name: "Nirve CANNNIBAL 3-SPEED", brend: "Nirve", frame: "алюминий", series: "круизный велосипед" , year: 2019, sex: "унисекс",
                age: "для взрослых", price: 44760, guarantee: "3 года",
                description: "Патентованная рама Chopper от Nirve, сталь 100% Hi-Tensile",
                size: 26, path: "https://vodkamishka.github.io/bicycles-app-store/images/cruisebikes/Nirve CANNNIBAL 3-SPEED.jpg",  id: 61, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Nirve SKULLS 3-SPEED", brend: "Nirve", frame: "алюминий", series: "круизный велосипед" , year: 2019, sex: "унисекс",
                age: "для взрослых", price: 41100, guarantee: "3 года",
                description: "Алюминиевая патентованная рама Nirve Galaxie Cruiser Design",
                size: 24, path: "https://vodkamishka.github.io/bicycles-app-store/images/cruisebikes/Nirve SKULLS 3-SPEED.jpg",  id: 62, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Nirve CHERRY BLOSSOM 7-SPEED", brend: "Nirve", frame: "алюминий", series: "круизный велосипед" , year: 2018, sex: "унисекс",
                age: "для взрослых", price: 33900, guarantee: "3 года",
                description: "Алюминиевая патентованная рама Nirve Galaxie Cruiser Design",
                size: 26, path: "https://vodkamishka.github.io/bicycles-app-store/images/cruisebikes/Nirve CHERRY BLOSSOM 7-SPEED.jpg",  id: 63, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Nirve SWITCHBLADE 3-SPEED", brend: "Nirve", frame: "алюминий", series: "круизный велосипед" , year: 2018, sex: "унисекс",
                age: "для взрослых", price: 44760, guarantee: "3 года",
                description: "Патентованная рама Chopper от Nirve, сталь100% Hi-Tensile",
                size: 26, path: "https://vodkamishka.github.io/bicycles-app-store/images/cruisebikes/Nirve SWITCHBLADE 3-SPEED.jpg",  id: 64, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Nirve BUTTERFLY 3-SPEED", brend: "Nirve", frame: "алюминий", series: "круизный велосипед" , year: 2017, sex: "для женщин",
                age: "для взрослых", price: 43160, guarantee: "3 года",
                description: "В этой модели воплотились лучшие элементы двух стилей - широкий руль, расслабленная посадка, накатистые шины. BUTTERFLY не только легка в управлении, чрезвычайно комфортна и надежна, но она также безумно очаровательна! С первым оборотом педали, на этом велосипеде Вы будете парить над землей, как мотылек.",
                size: 26, path: "https://vodkamishka.github.io/bicycles-app-store/images/cruisebikes/Nirve BUTTERFLY 3-SPEED.jpg",  id: 65, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Nirve LAHAINA 3-SPEED", brend: "Nirve", frame: "алюминий", series: "круизный велосипед" , year: 2017, sex: "для женщин",
                age: "для взрослых", price: 43160, guarantee: "3 года",
                description: "Модель LAHAINA вобрала в себя лучшие традиции классических велосипедов-круизеров, приправив их современным оборудованием. Мягкие тона, в которых выполнен дизайн этого велосипеда и его «цветочная» графика, гармонично сочетаются с рамой из алюминиевого сплава 6061 и геометрией Galaxy Ladies, созданной специально для женщин. Добавим к этому 3-скоростную трансмиссию, гладкие покрышки и полный комплект аксессуаров, необходимый для того, чтобы сделать наших любимых ещё счастливее, включая полноразмерные крылья, элегантную подножку и щиток, надежно укрывающий цепь от случайной встречи с одеждой.",
                size: 26, path: "https://vodkamishka.github.io/bicycles-app-store/images/cruisebikes/Nirve LAHAINA 3-SPEED.jpg",  id: 66, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Nirve Pyro", brend: "Nirve", frame: "алюминий", series: "круизный велосипед" , year: 2019, sex: "унисекс",
                age: "для взрослых", price: 49680, guarantee: "3 года",
                description: "Pyro любит «зажигать». Этому способствует как облегченная алюминиевая рама, так и укороченная, по сравнению с большинством классических круизеров, колесная база. Благодаря им этот велосипед стал более приемистым и маневренным на оживленных городских бульварах и извилистых парковых дорожках. Амортизирующая вилка, полирующая неровности покрытия. 3 передачи планетарной трансмиссии, облегчающие подъемы. Каждая деталь выполнена в едином дизайне, воспламеняющем желание кататься.",
                size: 26, path: "https://vodkamishka.github.io/bicycles-app-store/images/cruisebikes/Nirve Pyro.jpg",  id: 67, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Nirve B-1 Classic", brend: "Nirve", frame: "сталь", series: "круизный велосипед" , year: 2014, sex: "унисекс",
                age: "для взрослых", price: 21600, guarantee: "3 года",
                description: "	Стальная рама Cruiser от Nirve",
                size: 24, path: "https://vodkamishka.github.io/bicycles-app-store/images/cruisebikes/Nirve B-1 Classic.jpg",  id: 68, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Nirve WISPY 7-SPEED", brend: "Nirve", frame: "алюминий", series: "круизный велосипед" , year: 2017, sex: "для женщин",
                age: "для взрослых", price: 38350, guarantee: "3 года",
                description: "Легкий, похожий на дымку дизайн модели Wispy, сделанной специально для женщин и выполненной в пастельных тонах, умиротворяет, но не дает скучать. И совсем не важно, как далеко и как быстро вы хотите поехать, если целью является сама поездка. С 1999-го года Nirve старается изо всех сил, чтобы сделать её легкой и удобной, не забывая о стиле, вдохновляющем выезжать на прогулку снова и снова. Не забывая заботиться о надежности предлагаемых вам велосипедов и их комфорте, словом, о том, чтобы в дороге вас ничто не отвлекало. Ну, может быть, кафе-мороженое, возле которого вы захотите остановиться.",
                size: 26, path: "https://vodkamishka.github.io/bicycles-app-store/images/cruisebikes/Nirve WISPY 7-SPEED.jpg",  id: 69, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Nirve SAVANNAH 7-SPEED", brend: "Nirve", frame: "алюминий", series: "круизный велосипед" , year: 2017, sex: "для женщин",
                age: "для взрослых", price: 35815, guarantee: "3 года",
                description: "Белоснежные пляжи Калифорнии, просоленный воздух, ласкающее солнце и SAVANNAH … Вот тот рецепт, который позволит позабыть о сумбурных буднях. Классическая геометрия рамы позволит насладиться всеми прелестями неспешной поездки. Однако, не стоить думать, что этот велосипед не может ехать быстро! Благодаря 7-ми скоростной трансмиссии вы вмиг доберетесь до нужного места, чтобы, расположившись в тени крон столетних деревьев, почитать любимую книгу.",
                size: 26, path: "https://vodkamishka.github.io/bicycles-app-store/images/cruisebikes/Nirve SAVANNAH 7-SPEED.jpg",  id: 70, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Nirve BEACH LADIES 7-SPEED", brend: "Nirve", frame: "алюминий", series: "круизный велосипед" , year: 2017, sex: "для женщин",
                age: "для взрослых", price: 27160, guarantee: "3 года",
                description: "BEACH LADIES - обновленная модель для прогулок по сухим чистым улицам. Благодаря широкому диапазону передач, вы легко сможете кататься целый день. Накатистые колеса в сочетании с 7-ю передачами и удобный шифтер, наличие возможности отрегулировать руль по высоте, используя вынос с цанговым креплением, комфортное седло с пенным наполнителем и эластомерными пружинами - каждая деталь велосипеда готова вам услужить. Яркий, стремительный дизайн велосипеда не оставит равнодушным никого из окружающих и подарит владельцу кучу эмоций от катания.",
                size: 26, path: "https://vodkamishka.github.io/bicycles-app-store/images/cruisebikes/Nirve BEACH LADIES 7-SPEED.jpg",  id: 71, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Nirve CLASSIC LADIES 7-SPEED", brend: "Nirve", frame: "алюминий", series: "круизный велосипед" , year: 2018, sex: "для женщин",
                age: "для взрослых", price: 33060, guarantee: "3 года",
                description: "Алюминиевая патентованная рама Nirve Galaxie Cruiser Design",
                size: 26, path: "https://vodkamishka.github.io/bicycles-app-store/images/cruisebikes/Nirve CLASSIC LADIES 7-SPEED.jpg",  id: 72,  count: 1, inCart: false, totalBicyclePrice: 0
            }
        ]
    }
    getWalkingBikes = () => {
        return [
            {
                name: "Cannondale ADVENTURE 1", brend: "Cannondale", frame: "алюминий", series: "прогулочный велосипед" , year: 2019, sex: "унисекс",
                age: "для взрослых", price: 57750, guarantee: "5 лет",
                description: "Многим людям нужна комфортная, а не гоночная посадка и удобство каждодневного использования важнее скорости. Мягкое широкое седло, амортизированные подседельный штырь и вилка, в сочетании с 24 передачами и универсальными покрышками, создают идеальный баланс комфорта и эффективности педалирования.",
                size: 28, path: "https://vodkamishka.github.io/bicycles-app-store/images/walkingbikes/Cannondale ADVENTURE 1.jpg",  id: 73, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Cannondale ADVENTURE 2 W", brend: "Cannondale", frame: "алюминий", series: "прогулочный велосипед" , year: 2019, sex: "для женщин",
                age: "для взрослых", price: 49140, guarantee: "5 лет",
                description: "Специально для женщин конструкция рамы дополнена важным атрибутом комфорта – низкой верхней трубой. Благодаря регулируемому по высоте рулю можно добиться вертикальной посадки, а достаточно широкие универсальные покрышки и 24 передачи помогут проехать практически везде, прилагая минимум усилий.",
                size: 28, path: "https://vodkamishka.github.io/bicycles-app-store/images/walkingbikes/Cannondale ADVENTURE 2 W.jpg",  id: 74, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Outleap CHAMPION", brend: "Outleap", frame: "алюминий", series: "прогулочный велосипед" , year: 2019, sex: "унисекс",
                age: "для детей", price: 8750, guarantee: "3 года",
                description: "Отличный и очень надежный велосипед на колесах 16 дюймов для будущих чемпионов.",
                size: 16, path: "https://vodkamishka.github.io/bicycles-app-store/images/walkingbikes/Outleap CHAMPION.jpg",  id: 75, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Jamis CITIZEN 2", brend: "Jamis", frame: "алюминий", series: "прогулочный велосипед" , year: 2019, sex: "унисекс",
                age: "для взрослых", price: 37310, guarantee: "5 лет",
                description: "Комфорт и практичность – вот главные преимущества этой модели. Если вам нужен удобный велосипед для активного передвижения по городу Citizen справится с поставленной задачей. Удобное мягкое седло, высокий руль и внушительный набор передач позволят с удовольствием передвигаться даже на дальние расстояния.",
                size: 28, path: "https://vodkamishka.github.io/bicycles-app-store/images/walkingbikes/Jamis CITIZEN 2.jpg",  id: 76, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Jamis EXPLORER SPORT", brend: "Jamis", frame: "алюминий", series: "прогулочный велосипед" , year: 2019, sex: "унисекс",
                age: "для взрослых", price: 37870, guarantee: "5 лет",
                description: "Этот велосипед создан дарить радость, где бы вы ни катались. Expolrer невероятно комфортен благодаря мягкому широкому седлу и вертикальной посадке, при этом, способен быть быстрым на асфальте и вне его. Универсальные покрышки и трансмиссия на 24 передачи помогут справиться с любыми приключениями.",
                size: 28, path: "https://vodkamishka.github.io/bicycles-app-store/images/walkingbikes/Jamis EXPLORER SPORT.jpg",  id: 77, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Jamis MISS DAISY", brend: "Jamis", frame: "алюминий", series: "прогулочный велосипед" , year: 2019, sex: "для женщин",
                age: "для детей", price: 13650, guarantee: "5 лет",
                description: "Яркий, красивый и легкий в управлении - этот велосипед для девочек создан, чтобы обучение катанию было веселым и увлекательным. Боковые колеса надежно крепятся к оси втулки и раме, чтобы исключить прокручивание.",
                size: 16, path: "https://vodkamishka.github.io/bicycles-app-store/images/walkingbikes/Jamis MISS DAISY.jpg",  id: 78, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Jamis DXT COMP W", brend: "Jamis", frame: "алюминий", series: "прогулочный велосипед" , year: 2019, sex: "унисекс",
                age: "для взрослых", price: 54460, guarantee: "5 лет",
                description: "Этот велосипед сочетает все преимущества модели DXT в элегантном исполнении с женской рамой. Низкая верхняя труба обеспечивает удобство повседневного использования, не в ущерб скоростным качествам и проходимости.",
                size: 28, path: "https://vodkamishka.github.io/bicycles-app-store/images/walkingbikes/Jamis DXT COMP W.jpg",  id: 79, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Corratec E-POWER 28 ACTIVE 10S LADY 400W", brend: "Corratec", frame: "алюминий", series: "прогулочный велосипед" , year: 2019, sex: "для женщин",
                age: "для взрослых", price: 158340, guarantee: "2 года",
                description: "Комфортные поездки по городу и паркам могут быть невероятно быстрыми и легкими, если крутить педали вам помогает электромотор, интегрированный в раму. К прилагаемым вами усилиям можно одним нажатием кнопки добавить внушительные 50 ньютон-метров крутящего момента, которые помогут даже неподготовленному человеку преодолеть любой подъем и поддерживать скорость до 25-ти км/ч. Для уверенного контроля и безопасности велосипед оснащен мощными гидравлическими дисковыми тормозами, а также широкими покрышками Continental. Мягкое седло и подседельный штырь с амортизатором обеспечивают комфорт на неровных дорогах, а регулируемый вынос руля позволяет добиться вертикальной посадки.",
                size: 28, path: "https://vodkamishka.github.io/bicycles-app-store/images/walkingbikes/Corratec E-POWER 28 ACTIVE 10S LADY 400W.jpg",  id: 80, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Corratec LIFE PERFORMANCE 8S NYON", brend: "Corratec", frame: "алюминий", series: "прогулочный велосипед" , year: 2019, sex: "унисекс",
                age: "для взрослых", price: 291180, guarantee: "5 лет",
                description: "Очень крепкий электробайк для городского и загородного использования. Благодаря укрепленным запчастям он способен брать на себя до 180 кг нагрузки, а при наличии электромотора движение на нем становится проще, оставаясь все такой же полезной кардионагрузкой.",
                size: 28, path: "https://vodkamishka.github.io/bicycles-app-store/images/walkingbikes/Corratec LIFE PERFORMANCE 8S NYON.jpg",  id: 81, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Jamis EXPLORER SPORT W", brend: "Jamis", frame: "алюминий", series: "прогулочный велосипед" , year: 2019, sex: "для женщин",
                age: "для взрослых", price: 37870, guarantee: "5 лет",
                description: "Для любительниц приключений на двух колесах, ценящих не только комфорт, но и стиль, Jamis оснастил Explorer низкой рамой, благодаря которой вам будет удобно каждый раз садиться в седло. Если вы любите кататься по асфальту и вне его, но спортивная посадка горного велосипеда заставляет излишне напрягаться, попробуйте этот велосипед, совмещающий все достоинства прогулочного и горного байков.",
                size: 27.5, path: "https://vodkamishka.github.io/bicycles-app-store/images/walkingbikes/Jamis EXPLORER SPORT W.jpg",  id: 82, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "GT TRANSEO ELITE", brend: "GT", frame: "алюминий", series: "прогулочный велосипед" , year: 2018, sex: "унисекс",
                age: "для взрослых", price: 40110, guarantee: "5 лет",
                description: "Если вы - житель мегаполиса и относите себя к тем, кто любит кататься на велосипеде, хочет сэкономить время и не потерять при этом ни грамма удовольствия, имя вашему велосипеду – GT Transeo. Будучи гибридом дорожного велосипеда и маунтинбайка, он взял из одного мира скорость, а из другого – маневренность. Он может быть быстрым, когда вы торопитесь по делам, комфортным, когда решите прокатиться в выходной день, и универсальным, если покинете границы города.Его рама имеет крепления для багажника и крыльев, так что ни непогода, ни сделанные во время поездки покупки не застанут вас врасплох. Его амортизирующая вилка сгладит неровности на вашем пути, а широкий диапазон передач не позволит утомиться, если дорога пойдет в гору. Невысокий и частый рисунок его покрышек достаточно накатистый для асфальта и убережет от сноса на грунте. А дисковые тормоза позаботятся о том, чтобы торможение было предсказуемым, эффективным и безопасным.Женская модель имеет особую конструкцию рамы StepThru с укороченной и сильно заниженной верхней трубой для легкой посадки на велосипед и легкого с него схода. Запомните, это – Transeo. Всё, что вам нужно для поездок по городу и за его пределами.",
                size: 28, path: "https://vodkamishka.github.io/bicycles-app-store/images/walkingbikes/GT TRANSEO ELITE.jpg",  id: 83, count: 1, inCart: false, totalBicyclePrice: 0
            },
            {
                name: "Jamis STARLITE", brend: "Jamis", frame: "алюминий", series: "прогулочный велосипед" , year: 2018, sex: "для женщин",
                age: "для детей", price: 12300, guarantee: "5 лет",
                description: "Красивая и легкая алюминиевая рама, разработанная специально для девочек, не только притягивает взгляды, но и обеспечивает низкий центр тяжести, а также позволяет легко спрыгивать вперед с седла в сложные моменты. Этот велосипед невероятно стабилен благодаря удлиненной базе, а удобный руль с загибом назад помогает добиться вертикальной посадки и делает управление интуитивно понятным. Яркие цвета создают радостное настроение, чтобы катание приносило только положительные эмоции.",
                size: 28, path: "https://vodkamishka.github.io/bicycles-app-store/images/walkingbikes/Jamis STARLITE.jpg",  id: 84, count: 1, inCart: false, totalBicyclePrice: 0
            }
        ]
    }
}