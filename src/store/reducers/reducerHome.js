const initialState = {
  blogArticles: [
    {
      title: 'шиладжит и спорт',
      descr: 'Шиладжит содержит минералы необходимые для поддержания жизненного равновесия в организме Минералы входящие в состав Шиладжита',
      mainImg: '/assets/img/mainBlog/img1.png',
      lastChangeDate: '',
      adress: '',
      content: []
    },
    {
      title: 'все о полезной еде',
      descr: 'Шиладжит содержит минералы необходимые для поддержания жизненного равновесия в организме Минералы входящие в состав Шиладжита',
      mainImg: '/assets/img/mainBlog/img2.png',
      lastChangeDate: '',
      adress: '',
      content: []
    },
    {
      title: 'бег для здоровья',
      descr: 'Шиладжит содержит минералы необходимые для поддержания жизненного равновесия в организме Минералы входящие в состав Шиладжита',
      mainImg: '/assets/img/mainBlog/img3.png',
      lastChangeDate: '',
      adress: '',
      content: []
    },
  ],
}

export default function reducerHome(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
