const initialState = {
  blogArticles: [
    {
      title: 'шиладжит и спорт',
      descr: 'Шиладжит содержит минералы необходимые для поддержания жизненного равновесия в организме Минералы входящие в состав Шиладжита',
      mainImg: '/assets/img/mainBlog/img1.png',
      lastChangeDate: '',
      adress: 'first',
      author: 'Иван Иванов',
      links: {
        twitter: '#',
        telegram: '#',
        facebook: '#',
        vk: '#',
      },
      date: '02.06.2018',
      content: [
        {soloImage: '/assets/img/mainBlog/content/soloImage.png'},
        {title: 'Гонка героев андрея ботоговского'},
        {paragraph: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжиту нет равных в борьбе с процессами старения организма человека! Индийские йоги считали, что Шиладжит способен исцелить от любого недуга и самое главное вернуть ему молодость.'},
        {paragraph: 'Шиладжит содержит минералы в природной ионной форме, необходимых для поддержания жизненного равновесия в организме. Минералы, входящие в состав Шиладжита, не аналогичны минералам в биодобавках, представленных на рынке. Это минералы в ионной форме, которые перед этим были впитаны растением из земли и воздуха, а затем возвращены земле. Таким образом, они легко и полностью усваиваются всеми клетками организма.'},
        {paragraph: 'Мумиё – это сложное химическое образование, так называемая «горная смола». Представляет собой хорошо растворимую в воде смесь органического и неорганического вещества. Мумие «Shilajit» производят из смеси, добываемой в горах Тибета и Гималаев. Для медицинских целей мумие очищают от примесей песка, щебня с соблюдением всех гигиенических стандартов. В состав мумие входят 28 химических элементов, микро- и макроэлементы, окиси металлов, шесть аминокислот, смолоподнобные вещества и эфирные масла'},
        {paragraph: 'В Аюрведе мумиё считают одним из главных средств Расаяны, то есть омоложения организма и придания ему силы. В Аюрведе мумиё считают одним из главных средств Расаяны, то есть омоложения организма'},
        // {
        //   list: [
        //     'Шиладжит переводится с санскрита как "победитель гор".',
        //     'Шиладжит переводится с санскрита как "победитель гор".',
        //     'Шиладжит переводится с санскрита как "победитель гор".',
        //     'Шиладжит переводится с санскрита как "победитель гор".',
        //     'Шиладжит переводится с санскрита как "победитель гор".'
        //   ]
        // },
        {
          imageGroup: {
            duo: ['/assets/img/mainBlog/content/duo1.png', '/assets/img/mainBlog/content/duo2.png'],
            solo: '/assets/img/mainBlog/content/groupSolo.png'
          }
        },
        {paragraph: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжиту нет равных в борьбе с процессами старения организма человека! Индийские йоги считали, что Шиладжит способен исцелить от любого недуга и самое главное вернуть ему молодость.'},
        {paragraph: 'Шиладжит содержит минералы в природной ионной форме, необходимых для поддержания жизненного равновесия в организме. Минералы, входящие в состав Шиладжита, не аналогичны минералам в биодобавках, представленных на рынке. Это минералы в ионной форме, которые перед этим были впитаны растением из земли и воздуха, а затем возвращены земле. Таким образом, они легко и полностью усваиваются всеми клетками организма.'}
      ]
    },
    {
      title: 'все о полезной еде',
      descr: 'Шиладжит содержит минералы необходимые для поддержания жизненного равновесия в организме Минералы входящие в состав Шиладжита',
      mainImg: '/assets/img/mainBlog/img2.png',
      lastChangeDate: '',
      adress: 'second',
      author: 'Иван Петров',
      links: {
        twitter: '#',
        telegram: '#',
        facebook: '#',
        vk: '#',
      },
      date: '04.06.2018',
      content: [
        {title: 'Гонка героев андрея ботоговского'},
        {paragraph: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжиту нет равных в борьбе с процессами старения организма человека! Индийские йоги считали, что Шиладжит способен исцелить от любого недуга и самое главное вернуть ему молодость.'},
        {soloImage: '/assets/img/mainBlog/content/soloImage.png'},
        {
          imageGroup: {
            duo: ['/assets/img/mainBlog/content/duo1.png', '/assets/img/mainBlog/content/duo2.png'],
            solo: '/assets/img/mainBlog/content/groupSolo.png'
          }
        },
        {paragraph: 'Шиладжит содержит минералы в природной ионной форме, необходимых для поддержания жизненного равновесия в организме. Минералы, входящие в состав Шиладжита, не аналогичны минералам в биодобавках, представленных на рынке. Это минералы в ионной форме, которые перед этим были впитаны растением из земли и воздуха, а затем возвращены земле. Таким образом, они легко и полностью усваиваются всеми клетками организма.'},
        {paragraph: 'Мумиё – это сложное химическое образование, так называемая «горная смола». Представляет собой хорошо растворимую в воде смесь органического и неорганического вещества. Мумие «Shilajit» производят из смеси, добываемой в горах Тибета и Гималаев. Для медицинских целей мумие очищают от примесей песка, щебня с соблюдением всех гигиенических стандартов. В состав мумие входят 28 химических элементов, микро- и макроэлементы, окиси металлов, шесть аминокислот, смолоподнобные вещества и эфирные масла'},
        {paragraph: 'В Аюрведе мумиё считают одним из главных средств Расаяны, то есть омоложения организма и придания ему силы. В Аюрведе мумиё считают одним из главных средств Расаяны, то есть омоложения организма'},
        // {
        //   list: [
        //     'Шиладжит переводится с санскрита как "победитель гор".',
        //     'Шиладжит переводится с санскрита как "победитель гор".',
        //     'Шиладжит переводится с санскрита как "победитель гор".',
        //     'Шиладжит переводится с санскрита как "победитель гор".',
        //     'Шиладжит переводится с санскрита как "победитель гор".'
        //   ]
        // },
        {paragraph: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжиту нет равных в борьбе с процессами старения организма человека! Индийские йоги считали, что Шиладжит способен исцелить от любого недуга и самое главное вернуть ему молодость.'},
        {paragraph: 'Шиладжит содержит минералы в природной ионной форме, необходимых для'}
      ]
    },
    {
      title: 'бег для здоровья',
      descr: 'Шиладжит содержит минералы необходимые для поддержания жизненного равновесия в организме Минералы входящие в состав Шиладжита',
      mainImg: '/assets/img/mainBlog/img3.png',
      lastChangeDate: '',
      adress: 'third',
      author: 'Василий Иванов',
      links: {
        twitter: '#',
        telegram: '#',
        facebook: '#',
        vk: '#',
      },
      date: '03.06.2018',
      content: [
        {
          imageGroup: {
            duo: ['/assets/img/mainBlog/content/duo1.png', '/assets/img/mainBlog/content/duo2.png'],
            solo: '/assets/img/mainBlog/content/groupSolo.png'
          }
        },
        {soloImage: '/assets/img/mainBlog/content/soloImage.png'},
        {paragraph: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжиту нет равных в борьбе с процессами старения организма человека! Индийские йоги считали, что Шиладжит способен исцелить от любого недуга и самое главное вернуть ему молодость.'},
        {paragraph: 'Шиладжит содержит минералы в природной ионной форме, необходимых для поддержания жизненного равновесия в организме. Минералы, входящие в состав Шиладжита, не аналогичны минералам в биодобавках, представленных на рынке. Это минералы в ионной форме, которые перед этим были впитаны растением из земли и воздуха, а затем возвращены земле. Таким образом, они легко и полностью усваиваются всеми клетками организма.'},
        {paragraph: 'Мумиё – это сложное химическое образование, так называемая «горная смола». Представляет собой хорошо растворимую в воде смесь органического и неорганического вещества. Мумие «Shilajit» производят из смеси, добываемой в горах Тибета и Гималаев. Для медицинских целей мумие очищают от примесей песка, щебня с соблюдением всех гигиенических стандартов. В состав мумие входят 28 химических элементов, микро- и макроэлементы, окиси металлов, шесть аминокислот, смолоподнобные вещества и эфирные масла'},
        {paragraph: 'В Аюрведе мумиё считают одним из главных средств Расаяны, то есть омоложения организма и придания ему силы. В Аюрведе мумиё считают одним из главных средств Расаяны, то есть омоложения организма'},
        // {
        //   list: [
        //     'Шиладжит переводится с санскрита как "победитель гор".',
        //     'Шиладжит переводится с санскрита как "победитель гор".',
        //     'Шиладжит переводится с санскрита как "победитель гор".',
        //     'Шиладжит переводится с санскрита как "победитель гор".',
        //     'Шиладжит переводится с санскрита как "победитель гор".'
        //   ]
        // },

        {title: 'Гонка героев андрея ботоговского'},
        {paragraph: 'Шиладжит переводится с санскрита как "победитель гор". Шиладжиту нет равных в борьбе с процессами старения организма человека! Индийские йоги считали, что Шиладжит способен исцелить от любого недуга и самое главное вернуть ему молодость.'},
        {paragraph: 'Шиладжит содержит минералы в природной ионной форме, необходимых для'}
      ]
    },
  ],
}

export default function reducerDetail(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
