const ADD_POST = "NEWS/ADD-POST";
const APPROVED_NEWS = "NEWS/APPROVED_NEWS";


const createNewPost = (text) => {
  const newPost = {
    contant: text,
    avatar: null,
  };
  return newPost;
};

const initialState = {
  news: [
    {
      title: "Микросервисы во фронтенде",
      content: "Микросервисы уже давно стали классикой в бэкенд архитектуре, но в отличие от бэкенда, во фронтенде одновременно можно использовать только один фреймворк. Это порождает неудобства при масштабировании и переиспользовании модулей. Микросервисный подход избавляет от необходимости придерживаться конкретного фреймворка и дает возможность программисту сосредоточиться на конкретном модуле с использованием наиболее удобных для него инструментов. Мы не пропагандируем расширение зоопарка технологий и использование каждого фреймворка необходимо тщательно обдумать, прежде чем внедрять.",
      date: "10.09.2020",
      status: 'approved',
      ownerId: 1,
      id: 1, 
    },
    {
      title: "Для запуска ОС HarmonyOS 2.0 достаточно 128 КБ оперативной памяти",
      content: "В Сети появляются все новые подробности об операционной системе HarmonyOS, и некоторые моменты если не шокируют, то уж точно удивляют. К примеру, такой факт: как пишет источник, для запуска HarmonyOS 2.0 достаточно всего лишь… 128 КБ оперативной памяти. Это – самый минимум. Но вообще предел указан довольно общо – от 128 КБ до 128 МБ. Учитывая, что HarmonyOS уже адресована смартфонам (бета-версия соответствующей сборки появится в декабре), есть основания полагать, что эта ОС будет лучше адаптирована для маломощных смартфонов, нежели Android Go.",
      date: "21.08.2020",
      status: 'approved',
      ownerId: 2,
      id: 2, 
    },
    {
      title: "Конференция CNews «Рынок облачных услуг: новые драйверы» состоится 17 сентября. Успейте подать заявку!",
      content: "Как совершенствуются сервисы для организации удаленной работы Сервисы для дистанционного обучения: ошибки и перспективы К чему привел опыт массового использования зарубежных сервисов Будет ли у России собственный Zoom?",
      date: "07.09.2020",
      status: 'approved',
      ownerId: 2,
      id: 3, 
    },
    {
      title: "Опубликованы «живые» фото салона новых Renault Logan и Sandero",
      content: "Касательно технической «начинки» новых Dacia Sandero и Logan на данный момент информации нет. По предварительным данным, новинки будут построены на модульной платформе CMF-B, которая лежит в базе моделей Clio и Captur. Официальная премьера обновлённых Sandero и Logan состоится 29 сентября.",
      date: "17.03.2019",
      status: 'moderation',
      ownerId: 2,
      id: 4
    },
    {
      title: "ОНЛАЙН-КОНФЕРЕНЦИЯ DIGITAL DRAGONS И INDIE SHOWCASE 2020",
      content: "Началась крупнейшая в Центральной Европе игровая конференция Digital Dragons! На этот раз она пройдёт целиком в онлайн-режиме и для обычных участников будет бесплатной. С сегодняшнего дня и до пятницы вас ждут четыре дня захватывающих лекций, дискуссионных форумов, возможностей для развития бизнеса и лучших инди-игр. И не забывайте про онлайн-церемонию вручения наград! Сайт конференции уже доступен для всех, так что поспешите зарегистрироваться, чтобы принять участие в этом празднике игровой индустрии!",
      date: "16.09.2020",
      status: 'approved',
      ownerId: 1,
      id: 5
    },
    {
      title: "В России число заразившихся коронавирусом растет четвертый день подряд",
      content: "За последние сутки зарегистрировано 5762 новых случая заражения коронавирусом в 83 регионах. Число заболевших растет четвертый день подряд. Накануне сообщалось о 5670 новых пациентах.",
      date: "17.09.2020",
      status: 'moderation',
      ownerId: 2,
      id: 6
    }
  ],
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = createNewPost(action.newPostText);
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    case APPROVED_NEWS:
      return {
        ...state,
        news: [...state.news.map(item => {
          if (item.id === action.id) {
            return {
              ...item,
              status: 'approved'
            }
          }
          return item;
        })],
      };
    default:
      return state;
  }
};

export function addPost(newPostText) {
  return { type: ADD_POST, newPostText };
}

export function approvedNews(id) {
  return { type: APPROVED_NEWS, id };
}

export const getStatus = (userID) => {
  /* return async (dispatch) => {

    const res = await profileAPI.getStatus(userID);

    let status = res.data;
    if (status === null || status === "") {
      status = "Нажмите, чтобы установить статус";
    }
    dispatch(setStatus(status));
  }; */
};

export const setUserStatus = (status) => {
  /* return async (dispatch) => {

    const res = await profileAPI.setStatus(status);

    const isHasStatus = (res.resultCode === 0);
    if (isHasStatus) {
      dispatch(setStatus(status));
    }
  }; */
};

export const setUserAvatar = (fileAvatar) => {
  /* return async (dispatch) => {

    const res = await profileAPI.setAvatar(fileAvatar);
    const isOk = (res.resultCode === 0);
    if (isOk) {
      dispatch(setUserAvatarSuccess(res.data.photos));
    } else {
      alert(`Произошла ошибка при обновлении аватара`)
    }
  }; */
};

export default newsReducer;
