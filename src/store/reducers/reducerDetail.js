import {
  ADDCARTACTION,
  CHANGECOUNTPRODUCT,
  CHANGEPORTIONVALUE, CLEARCART,
  CONCATRATING, DELETEITEMCART,
  FEEDBACKSHOWMORE, SENDCOMMENT
} from '../actions/actionTypes'

const initialState = {
  review: [{
    name: 'review',
    numberOfComments: 4,
    feedback: [
      {
        name: 'иван иванов',
        comment: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжит изготовлен из натуральных ингридиентов и способен зарядить вас энергией на весь день.',
        rate: 4,
        date: '02.05.2018'
      },
      {
        name: 'иван иванов',
        comment: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжит изготовлен из натуральных ингридиентов и способен зарядить вас энергией на весь день.',
        rate: 3,
        date: '03.05.2018'
      },
      {
        name: 'иван иванов',
        comment: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжит изготовлен из натуральных ингридиентов и способен зарядить вас энергией на весь день.',
        rate: 5,
        date: '04.05.2018'
      },
      {
        name: 'иван иванов',
        comment: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжит изготовлен из натуральных ингридиентов и способен зарядить вас энергией на весь день.',
        rate: 2,
        date: '05.05.2018'
      },
      {
        name: 'иван иванов',
        comment: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжит изготовлен из натуральных ингридиентов и способен зарядить вас энергией на весь день.',
        rate: 1,
        date: '06.05.2018'
      },
      {
        name: 'иван иванов',
        comment: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжит изготовлен из натуральных ингридиентов и способен зарядить вас энергией на весь день.',
        rate: 4,
        date: '02.05.2018'
      },
      {
        name: 'иван иванов',
        comment: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжит изготовлен из натуральных ингридиентов и способен зарядить вас энергией на весь день.',
        rate: 3,
        date: '03.05.2018'
      },
      {
        name: 'иван иванов',
        comment: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжит изготовлен из натуральных ингридиентов и способен зарядить вас энергией на весь день.',
        rate: 5,
        date: '04.05.2018'
      },
      {
        name: 'иван иванов',
        comment: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжит изготовлен из натуральных ингридиентов и способен зарядить вас энергией на весь день.',
        rate: 2,
        date: '05.05.2018'
      },
      {
        name: 'иван иванов',
        comment: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжит изготовлен из натуральных ингридиентов и способен зарядить вас энергией на весь день.',
        rate: 1,
        date: '06.05.2018'
      },
      {
        name: 'иван иванов',
        comment: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжит изготовлен из натуральных ингридиентов и способен зарядить вас энергией на весь день.',
        rate: 4,
        date: '02.05.2018'
      },
      {
        name: 'иван иванов',
        comment: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжит изготовлен из натуральных ингридиентов и способен зарядить вас энергией на весь день.',
        rate: 3,
        date: '03.05.2018'
      },
      {
        name: 'иван иванов',
        comment: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжит изготовлен из натуральных ингридиентов и способен зарядить вас энергией на весь день.',
        rate: 5,
        date: '04.05.2018'
      },
      {
        name: 'иван иванов',
        comment: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжит изготовлен из натуральных ингридиентов и способен зарядить вас энергией на весь день.',
        rate: 2,
        date: '05.05.2018'
      },
      {
        name: 'иван иванов',
        comment: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжит изготовлен из натуральных ингридиентов и способен зарядить вас энергией на весь день.',
        rate: 1,
        date: '06.05.2018'
      }
    ],
    rated: false
  }],
  cart: [],
  products: [
    {
      name: 'first',
      id: 1,
      addCart: false,
      count: 1,
      rated: false,
      avaible: true,
      firstPortionPrice: 1000,
      sell: true,
      rating: [5, 4, 3, 2, 1, 2, 3, 4, 2, 3, 4, 2, 5, 5, 5, 3, 2, 4, 2, 1, 3, 4, 2, 3, 4, 2, 5, 5, 5, 5, 5],
      portions: [
        45,
        150,
        250
      ],
      activePortion: 1,
      sumPrice: null,
      price: [
        1000,
        1500,
        2000
      ],
      mainImg: '/assets/img/detail/productImg3.png',
      img: [
        '/assets/img/detail/productImg1.png',
        '/assets/img/detail/productImg2.png',
        '/assets/img/detail/productImg3.png',
      ],
      plus: [
        'Надежная упаковка',
        '45 порций',
        'Полезен для здоровья',
        'Без консервантов'
      ],
      infoBlock: {
        description: {
          title: 'Полезные свойства',
          descriptionProduct: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжиту нет равных в борьбе с процессами старения организма Шиладжит переводится с санскрита ',
          pluses: [
            {
              svg: '/assets/img/detail/info1/descr1.svg',
              text: 'повышает выносливост и энергию'
            },
            {
              svg: '/assets/img/detail/info1/descr2.svg',
              text: 'детокс'
            },
            {
              svg: '/assets/img/detail/info1/descr3.svg',
              text: 'повышает мозговую активность'
            },
            {
              svg: '/assets/img/detail/info1/descr4.svg',
              text: 'улучшает имунну систему'
            },
            {
              svg: '/assets/img/detail/info1/descr5.svg',
              text: 'омолаживающе действие'
            },
            {
              svg: '/assets/img/detail/info1/descr6.svg',
              text: 'анти-стресс'
            },
            {
              svg: '/assets/img/detail/info1/descr7.svg',
              text: 'благоприятно влияе на сердце и кровообращение'
            }
          ]
        },
        structure: {
          title: 'состав',
          descriptionStructure: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжиту нет равных в борьбе с процессами старения организма Шиладжит переводится с санскрита ',
          structureTable: [
            {
              title: 'Порция',
              val: '0.3г'
            },
            {
              title: 'Порций в упаковке',
              val: '45 г'
            },
            {
              title: 'СОДЕРЖИТСЯ В ОДНОЙ ПОРЦИИ',
            },
            {
              title1: 'Ккал ',
              val1: '15 г',
              title2: 'Ккал из жиров',
              val2: '0 г'
            },
            {
              title: 'Гуминовая кислота',
              val: '10.1%'
            },
            {
              title1: 'Кальций',
              val1: '4%',
              title2: 'Железо',
              val2: '30%'
            },
            {
              title1: 'Магний',
              val1: '1%',
              title2: 'Цинк',
              val2: '3%'
            },
            {
              title: '% от дневной нормы*',
            },
            {
              title1: 'Холестерол',
              val1: '0 мг',
              title2: 'Сода',
              val2: '0 мг'
            },
            {
              title1: 'Калий',
              val1: '50 мг',
              title2: 'Белок',
              val2: '0 г'
            },
            {
              title: 'Всего углеводов',
              val: '< 1 мг'
            },
            {
              title: 'Фульвокислота',
              val: '66,8%'
            },
            {
              title: 'Селен',
              val: '4%'
            },
            {
              title: 'Марганец',
              val: '1%'
            },
          ],
          clarification: '* исходя из суточной нормы 2000 калорий'
        },
        howUse: {
          title: 'как использовать',
          steps: [
            {
              svg: '/assets/img/detail/structure1/step1.svg',
              name: 'шаг 1',
              content: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжиту нет равных в борьбе с процессами старения организма Шиладжит переводится с санскрита '
            },
            {
              svg: '/assets/img/detail/structure1/step2.svg',
              name: 'шаг 2',
              content: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжиту нет равных в борьбе с процессами старения организма Шиладжит переводится с санскрита '
            },
            {
              svg: '/assets/img/detail/structure1/step3.svg',
              name: 'шаг 3',
              content: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжиту нет равных в борьбе с процессами старения организма Шиладжит переводится с санскрита '
            }
          ],
          productBased: {
            title: 'коктейли на основе Virgin shilajit',
            products: [
              {
                img: '/assets/img/detail/howUse1/recipe1.png',
                title: 'фруктовый заряд',
                descr: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжиту нет равных в борьбе с процессами старения организма человека!'
              },
              {
                img: '/assets/img/detail/howUse1/recipe2.png',
                title: 'лесная свежесть',
                descr: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжиту нет равных в борьбе с процессами старения организма человека!'
              },
            ]
          }
        }
      },
      videoBlock: {
        title: 'видео',
        description: 'Здесь будет небольшое вводное описание для видео. Здесь будет небольшое вводное описание для видео. Здесь будет небольшое вводное описание для видео.',
      },
      numberOfComments: 2,
      feedback: [
        {
          name: 'иван иванов',
          comment: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжит изготовлен из натуральных ингридиентов и способен зарядить вас энергией на весь день.',
          rate: 4,
          date: '02.05.2018'
        },
        {
          name: 'иван иванов',
          comment: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжит изготовлен из натуральных ингридиентов и способен зарядить вас энергией на весь день.',
          rate: 3,
          date: '03.05.2018'
        },
        {
          name: 'иван иванов',
          comment: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжит изготовлен из натуральных ингридиентов и способен зарядить вас энергией на весь день.',
          rate: 5,
          date: '04.05.2018'
        },
        {
          name: 'иван иванов',
          comment: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжит изготовлен из натуральных ингридиентов и способен зарядить вас энергией на весь день.',
          rate: 2,
          date: '05.05.2018'
        },
        {
          name: 'иван иванов',
          comment: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжит изготовлен из натуральных ингридиентов и способен зарядить вас энергией на весь день.',
          rate: 1,
          date: '06.05.2018'
        }
      ]
    },
    {
      name: 'second',
      id: 1,
      addCart: false,
      count: 1,
      rated: false,
      avaible: true,
      firstPortionPrice: 1200,
      sell: true,
      rating: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 2, 1, 3, 2, 4, 5, 5, 5, 5, 55, 4, 3, 2, 1, 2, 3, 4, 2, 3, 4, 2, 5, 5, 5, 3, 2, 4, 2, 1, 3, 4, 2, 3, 4, 2, 5, 5, 5, 5, 5],
      portions: [
        45,
        150,
        250
      ],
      activePortion: 1,
      sumPrice: null,
      price: [
        1200,
        1700,
        2200
      ],
      mainImg: '/assets/img/detail/productImg1.png',
      img: [
        '/assets/img/detail/productImg1.png',
        '/assets/img/detail/productImg2.png',
        '/assets/img/detail/productImg3.png',
      ],
      plus: [
        'Надежная упаковка',
        '45 порций',
        'Полезен для здоровья',
        'Без консервантов'
      ],
      infoBlock: {
        description: {
          title: 'Полезные свойства second',
          descriptionProduct: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжиту нет равных в борьбе с процессами старения организма Шиладжит переводится с санскрита ',
          pluses: [
            {
              svg: '/assets/img/detail/info1/descr1.svg',
              text: 'повышает выносливост и энергию'
            },
            {
              svg: '/assets/img/detail/info1/descr2.svg',
              text: 'детокс'
            },
            {
              svg: '/assets/img/detail/info1/descr3.svg',
              text: 'повышает мозговую активность'
            },
            {
              svg: '/assets/img/detail/info1/descr4.svg',
              text: 'улучшает имунну систему'
            },
            {
              svg: '/assets/img/detail/info1/descr5.svg',
              text: 'омолаживающе действие'
            },
            {
              svg: '/assets/img/detail/info1/descr6.svg',
              text: 'анти-стресс'
            },
            {
              svg: '/assets/img/detail/info1/descr7.svg',
              text: 'благоприятно влияе на сердце и кровообращение'
            }
          ]
        },
        structure: {
          title: 'состав',
          descriptionStructure: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжиту нет равных в борьбе с процессами старения организма Шиладжит переводится с санскрита ',
          structureTable: [
            {
              title: 'Порция',
              val: '0.3г'
            },
            {
              title: 'Порций в упаковке',
              val: '45 г'
            },
            {
              title: 'СОДЕРЖИТСЯ В ОДНОЙ ПОРЦИИ',
            },
            {
              title1: 'Ккал ',
              val1: '15 г',
              title2: 'Ккал из жиров',
              val2: '0 г'
            },
            {
              title: 'Гуминовая кислота',
              val: '10.1%'
            },
            {
              title1: 'Кальций',
              val1: '4%',
              title2: 'Железо',
              val2: '30%'
            },
            {
              title1: 'Магний',
              val1: '1%',
              title2: 'Цинк',
              val2: '3%'
            },
            {
              title: '% от дневной нормы*',
            },
            {
              title1: 'Холестерол',
              val1: '0 мг',
              title2: 'Сода',
              val2: '0 мг'
            },
            {
              title1: 'Калий',
              val1: '50 мг',
              title2: 'Белок',
              val2: '0 г'
            },
            {
              title: 'Всего углеводов',
              val: '< 1 мг'
            },
            {
              title: 'Фульвокислота',
              val: '66,8%'
            },
            {
              title: 'Селен',
              val: '4%'
            },
            {
              title: 'Марганец',
              val: '1%'
            },
          ],
          clarification: '* исходя из суточной нормы 2000 калорий'
        },
        howUse: {
          title: 'как использовать',
          steps: [
            {
              svg: '/assets/img/detail/structure1/step1.svg',
              name: 'шаг 1',
              content: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжиту нет равных в борьбе с процессами старения организма Шиладжит переводится с санскрита '
            },
            {
              svg: '/assets/img/detail/structure1/step2.svg',
              name: 'шаг 2',
              content: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжиту нет равных в борьбе с процессами старения организма Шиладжит переводится с санскрита '
            },
            {
              svg: '/assets/img/detail/structure1/step3.svg',
              name: 'шаг 3',
              content: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжиту нет равных в борьбе с процессами старения организма Шиладжит переводится с санскрита '
            }
          ],
          productBased: {
            title: 'коктейли на основе Virgin shilajit second',
            products: [
              {
                img: '/assets/img/detail/howUse1/recipe1.png',
                title: 'фруктовый заряд',
                descr: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжиту нет равных в борьбе с процессами старения организма человека!'
              },
              {
                img: '/assets/img/detail/howUse1/recipe2.png',
                title: 'лесная свежесть',
                descr: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжиту нет равных в борьбе с процессами старения организма человека!'
              },
            ]
          }
        }
      },
      videoBlock: {
        title: 'видео second',
        description: 'Здесь будет небольшое вводное описание для видео. Здесь будет небольшое вводное описание для видео. Здесь будет небольшое вводное описание для видео.',
      },
      numberOfComments: 2,
      feedback: [
        {
          name: 'иван иванов',
          comment: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжит изготовлен из натуральных ингридиентов и способен зарядить вас энергией на весь день.',
          rate: 4,
          date: '02.05.2018'
        },
        {
          name: 'иван иванов',
          comment: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжит изготовлен из натуральных ингридиентов и способен зарядить вас энергией на весь день.',
          rate: 5,
          date: '03.05.2018'
        },
        {
          name: 'иван иванов',
          comment: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжит изготовлен из натуральных ингридиентов и способен зарядить вас энергией на весь день.',
          rate: 2,
          date: '04.05.2018'
        },
        {
          name: 'иван иванов',
          comment: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжит изготовлен из натуральных ингридиентов и способен зарядить вас энергией на весь день.',
          rate: 1,
          date: '05.05.2018'
        },
        {
          name: 'иван иванов',
          comment: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжит изготовлен из натуральных ингридиентов и способен зарядить вас энергией на весь день.',
          rate: 1,
          date: '06.05.2018'
        }
      ]
    },
    {
      name: 'third',
      id: 1,
      addCart: false,
      count: 1,
      rated: false,
      avaible: true,
      firstPortionPrice: 1300,
      sell: false,
      rating: [5, 4, 3, 2, 1, 2, 3, 4, 2, 3, 4, 2, 5, 5, 5, 3, 2, 4, 2, 1, 3, 4, 2, 3, 4, 2, 5, 5, 5, 5, 5],
      portions: [
        45,
        150,
        250
      ],
      activePortion: 1,
      sumPrice: null,
      price: [
        1300,
        1800,
        2300
      ],
      mainImg: '/assets/img/detail/productImg2.png',
      img: [
        '/assets/img/detail/productImg1.png',
        '/assets/img/detail/productImg2.png',
        '/assets/img/detail/productImg3.png',
      ],
      plus: [
        'Надежная упаковка',
        '45 порций',
        'Полезен для здоровья',
        'Без консервантов'
      ],
      infoBlock: {
        description: {
          title: 'Полезные свойства third',
          descriptionProduct: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжиту нет равных в борьбе с процессами старения организма Шиладжит переводится с санскрита ',
          pluses: [
            {
              svg: '/assets/img/detail/info1/descr1.svg',
              text: 'повышает выносливост и энергию'
            },
            {
              svg: '/assets/img/detail/info1/descr2.svg',
              text: 'детокс'
            },
            {
              svg: '/assets/img/detail/info1/descr3.svg',
              text: 'повышает мозговую активность'
            },
            {
              svg: '/assets/img/detail/info1/descr4.svg',
              text: 'улучшает имунну систему'
            },
            {
              svg: '/assets/img/detail/info1/descr5.svg',
              text: 'омолаживающе действие'
            },
            {
              svg: '/assets/img/detail/info1/descr6.svg',
              text: 'анти-стресс'
            },
            {
              svg: '/assets/img/detail/info1/descr7.svg',
              text: 'благоприятно влияе на сердце и кровообращение'
            }
          ]
        },
        structure: {
          title: 'состав third',
          descriptionStructure: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжиту нет равных в борьбе с процессами старения организма Шиладжит переводится с санскрита ',
          structureTable: [
            {
              title: 'Порция',
              val: '0.3г'
            },
            {
              title: 'Порций в упаковке',
              val: '45 г'
            },
            {
              title: 'СОДЕРЖИТСЯ В ОДНОЙ ПОРЦИИ',
            },
            {
              title1: 'Ккал ',
              val1: '15 г',
              title2: 'Ккал из жиров',
              val2: '0 г'
            },
            {
              title: 'Гуминовая кислота',
              val: '10.1%'
            },
            {
              title1: 'Кальций',
              val1: '4%',
              title2: 'Железо',
              val2: '30%'
            },
            {
              title1: 'Магний',
              val1: '1%',
              title2: 'Цинк',
              val2: '3%'
            },
            {
              title: '% от дневной нормы*',
            },
            {
              title1: 'Холестерол',
              val1: '0 мг',
              title2: 'Сода',
              val2: '0 мг'
            },
            {
              title1: 'Калий',
              val1: '50 мг',
              title2: 'Белок',
              val2: '0 г'
            },
            {
              title: 'Всего углеводов',
              val: '< 1 мг'
            },
            {
              title: 'Фульвокислота',
              val: '66,8%'
            },
            {
              title: 'Селен',
              val: '4%'
            },
            {
              title: 'Марганец',
              val: '1%'
            },
          ],
          clarification: '* исходя из суточной нормы 2500 калорий'
        },
        howUse: {
          title: 'как использовать third',
          steps: [
            {
              svg: '/assets/img/detail/structure1/step1.svg',
              name: 'шаг 1',
              content: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжиту нет равных в борьбе с процессами старения организма Шиладжит переводится с санскрита '
            },
            {
              svg: '/assets/img/detail/structure1/step2.svg',
              name: 'шаг 2',
              content: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжиту нет равных в борьбе с процессами старения организма Шиладжит переводится с санскрита '
            },
            {
              svg: '/assets/img/detail/structure1/step3.svg',
              name: 'шаг 3',
              content: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжиту нет равных в борьбе с процессами старения организма Шиладжит переводится с санскрита '
            }
          ],
          productBased: {
            title: 'коктейли на основе Virgin shilajit third',
            products: [
              {
                img: '/assets/img/detail/howUse1/recipe1.png',
                title: 'фруктовый заряд',
                descr: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжиту нет равных в борьбе с процессами старения организма человека!'
              },
              {
                img: '/assets/img/detail/howUse1/recipe2.png',
                title: 'лесная свежесть',
                descr: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжиту нет равных в борьбе с процессами старения организма человека!'
              },
            ]
          }
        }
      },
      videoBlock: {
        title: 'видео third',
        description: 'Здесь будет небольшое вводное описание для видео. Здесь будет небольшое вводное описание для видео. Здесь будет небольшое вводное описание для видео.',
      },
      numberOfComments: 2,
      feedback: [
        {
          name: 'иван иванов',
          comment: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжит изготовлен из натуральных ингридиентов и способен зарядить вас энергией на весь день.',
          rate: 4,
          date: '02.05.2018'
        },
        {
          name: 'иван иванов',
          comment: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжит изготовлен из натуральных ингридиентов и способен зарядить вас энергией на весь день.',
          rate: 3,
          date: '03.05.2018'
        },
        {
          name: 'иван иванов',
          comment: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжит изготовлен из натуральных ингридиентов и способен зарядить вас энергией на весь день.',
          rate: 5,
          date: '04.05.2018'
        },
        {
          name: 'иван иванов',
          comment: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжит изготовлен из натуральных ингридиентов и способен зарядить вас энергией на весь день.',
          rate: 2,
          date: '05.05.2018'
        },
        {
          name: 'иван иванов',
          comment: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжит изготовлен из натуральных ингридиентов и способен зарядить вас энергией на весь день.',
          rate: 1,
          date: '06.05.2018'
        }
      ]
    },
    {
      name: 'fourth',
      id: 1,
      addCart: false,
      count: 1,
      rated: false,
      avaible: false,
      firstPortionPrice: 1400,
      sell: false,
      rating: [5, 4, 3, 2, 1, 2, 3, 4, 2, 3, 4, 2, 5, 5, 5, 3, 2, 4, 2, 1, 3, 4, 2, 3, 4, 2, 5, 5, 5, 5, 5],
      portions: [
        45,
        150,
        250
      ],
      activePortion: 1,
      sumPrice: null,
      price: [
        1400,
        1900,
        2400
      ],
      mainImg: '/assets/img/detail/productImg3.png',
      img: [
        '/assets/img/detail/productImg1.png',
        '/assets/img/detail/productImg2.png',
        '/assets/img/detail/productImg3.png',
      ],
      plus: [
        'Надежная упаковка',
        '45 порций',
        'Полезен для здоровья',
        'Без консервантов'
      ],
      infoBlock: {
        description: {
          title: 'Полезные свойства',
          descriptionProduct: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжиту нет равных в борьбе с процессами старения организма Шиладжит переводится с санскрита ',
          pluses: [
            {
              svg: '/assets/img/detail/info1/descr1.svg',
              text: 'повышает выносливост и энергию'
            },
            {
              svg: '/assets/img/detail/info1/descr2.svg',
              text: 'детокс'
            },
            {
              svg: '/assets/img/detail/info1/descr3.svg',
              text: 'повышает мозговую активность'
            },
            {
              svg: '/assets/img/detail/info1/descr4.svg',
              text: 'улучшает имунну систему'
            },
            {
              svg: '/assets/img/detail/info1/descr5.svg',
              text: 'омолаживающе действие'
            },
            {
              svg: '/assets/img/detail/info1/descr6.svg',
              text: 'анти-стресс'
            },
            {
              svg: '/assets/img/detail/info1/descr7.svg',
              text: 'благоприятно влияе на сердце и кровообращение'
            }
          ]
        },
        structure: {
          title: 'состав',
          descriptionStructure: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжиту нет равных в борьбе с процессами старения организма Шиладжит переводится с санскрита ',
          structureTable: [
            {
              title: 'Порция',
              val: '0.3г'
            },
            {
              title: 'Порций в упаковке',
              val: '45 г'
            },
            {
              title: 'СОДЕРЖИТСЯ В ОДНОЙ ПОРЦИИ',
            },
            {
              title1: 'Ккал ',
              val1: '15 г',
              title2: 'Ккал из жиров',
              val2: '0 г'
            },
            {
              title: 'Гуминовая кислота',
              val: '10.1%'
            },
            {
              title1: 'Кальций',
              val1: '4%',
              title2: 'Железо',
              val2: '30%'
            },
            {
              title1: 'Магний',
              val1: '1%',
              title2: 'Цинк',
              val2: '3%'
            },
            {
              title: '% от дневной нормы*',
            },
            {
              title1: 'Холестерол',
              val1: '0 мг',
              title2: 'Сода',
              val2: '0 мг'
            },
            {
              title1: 'Калий',
              val1: '50 мг',
              title2: 'Белок',
              val2: '0 г'
            },
            {
              title: 'Всего углеводов',
              val: '< 1 мг'
            },
            {
              title: 'Фульвокислота',
              val: '66,8%'
            },
            {
              title: 'Селен',
              val: '4%'
            },
            {
              title: 'Марганец',
              val: '1%'
            },
          ],
          clarification: '* исходя из суточной нормы 2000 калорий'
        },
        howUse: {
          title: 'как использовать',
          steps: [
            {
              svg: '/assets/img/detail/structure1/step1.svg',
              name: 'шаг 1',
              content: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжиту нет равных в борьбе с процессами старения организма Шиладжит переводится с санскрита '
            },
            {
              svg: '/assets/img/detail/structure1/step2.svg',
              name: 'шаг 2',
              content: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжиту нет равных в борьбе с процессами старения организма Шиладжит переводится с санскрита '
            },
            {
              svg: '/assets/img/detail/structure1/step3.svg',
              name: 'шаг 3',
              content: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжиту нет равных в борьбе с процессами старения организма Шиладжит переводится с санскрита '
            }
          ],
          productBased: {
            title: 'коктейли на основе Virgin shilajit',
            products: [
              {
                img: '/assets/img/detail/howUse1/recipe1.png',
                title: 'фруктовый заряд',
                descr: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжиту нет равных в борьбе с процессами старения организма человека!'
              },
              {
                img: '/assets/img/detail/howUse1/recipe2.png',
                title: 'лесная свежесть',
                descr: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжиту нет равных в борьбе с процессами старения организма человека!'
              },
            ]
          }
        }
      },
      videoBlock: {
        title: 'видео',
        description: 'Здесь будет небольшое вводное описание для видео. Здесь будет небольшое вводное описание для видео. Здесь будет небольшое вводное описание для видео.',
      },
      numberOfComments: 2,
      feedback: [
        {
          name: 'иван иванов',
          comment: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжит изготовлен из натуральных ингридиентов и способен зарядить вас энергией на весь день.',
          rate: 4,
          date: '02.05.2018'
        },
        {
          name: 'иван иванов',
          comment: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжит изготовлен из натуральных ингридиентов и способен зарядить вас энергией на весь день.',
          rate: 3,
          date: '03.05.2018'
        },
        {
          name: 'иван иванов',
          comment: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжит изготовлен из натуральных ингридиентов и способен зарядить вас энергией на весь день.',
          rate: 5,
          date: '04.05.2018'
        },
        {
          name: 'иван иванов',
          comment: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжит изготовлен из натуральных ингридиентов и способен зарядить вас энергией на весь день.',
          rate: 2,
          date: '05.05.2018'
        },
        {
          name: 'иван иванов',
          comment: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжит изготовлен из натуральных ингридиентов и способен зарядить вас энергией на весь день.',
          rate: 1,
          date: '06.05.2018'
        }
      ]
    },
  ]
}

export default function reducerDetail(state = initialState, action) {
  switch (action.type) {
    case CONCATRATING:
      return {
        ...state,
        products: state.products.map((product, _, products) => {
          if (product.name === action.data.name) {
            return {
              ...product,
              rating: [...product.rating, action.data.val],
              rated: action.data.rated
            }
          }
          return product
        }),
        review: state.review.map(item => {
          if (item.name === action.data.name) {
            return {
              ...item,
              rated: action.data.rated
            }
          }
          return item
        })
      }
    case CHANGECOUNTPRODUCT:
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.name === action.data.name) {
            return {
              ...product,
              count: action.data.val,
              sumPrice: action.data.val * product.price[product.activePortion]
            }
          }
          return product
        }),
        cart: state.cart.map(item => {
          if (item.name === action.data.name) {
            return {
              ...item,
              count: action.data.val,
              sumPrice: action.data.val * item.price
            }
          }
          return item
        })
      }
    case CHANGEPORTIONVALUE:
      return {
        ...state,
        products: state.products.map(product => {
          if (product.name === action.data.name) {
            return {
              ...product,
              activePortion: action.data.position,
              sumPrice: product.count * product.price[action.data.position]
            }
          }
          return product
        }),
        cart: state.cart.map(item => {
          if (item.name === action.data.name) {
            return {
              ...item,
              portion: +action.data.val,
              price: action.data.price,
              sumPrice: action.data.price * item.count
            }
          }
          return item
        })
      }
    case ADDCARTACTION:
      let filteredCart = !!state.cart.filter(i => i.name === action.data.name).length
      return {
        ...state,
        cart: filteredCart ?
          [...state.cart]
          :
          [...state.cart, action.data]


      }
    case FEEDBACKSHOWMORE:
      return {
        ...state,
        products: state.products.map((item) => {
          if (item.name === action.data.name) {
            return {
              ...item,
              numberOfComments: action.data.val
            }
          }
          return item
        }),
        review: state.review.map(item => {
          if (item.name === action.data.name) {
            return {
              ...item,
              numberOfComments: action.data.val
            }
          }
          return item
        })
      }
    case SENDCOMMENT:
      return {
        ...state,
        products: state.products.map((item) => {
          if (item.name === action.data.itemName) {
            return {
              ...item,
              feedback: [...item.feedback, {
                name: action.data.name,
                comment: action.data.comment,
                rate: action.data.rate,
                date: action.data.date
              }]
            }
          }
          return item
        }),
        review: state.review.map(item => {
          if (item.name === action.data.itemName) {
            return {
              ...item,
              feedback: [...item.feedback, {
                name: action.data.name,
                comment: action.data.comment,
                rate: action.data.rate,
                date: action.data.date
              }]
            }
          }
          return item
        })
      }
    case DELETEITEMCART:
      return {
        ...state,
        cart: state.cart.slice(0, action.index).concat(state.cart.slice(action.index + 1))
      }
    case CLEARCART:
      return {
        ...state,
        cart: []
      }
    default:
      return state
  }
}
