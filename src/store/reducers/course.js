const INITIAL_STATE = {
  activeModule: {},
  activeLesson: {},
  modules: [
    {
      id: 1,
      title: "Utilizando React",
      lessons: [
        { id: 1, title: "Lesson 1" },
        { id: 2, title: "Lesson 2" },
      ],
    },
    {
      id: 2,
      title: "Apredendo React com REDUX",
      lessons: [
        { id: 3, title: "Lesson 3" },
        { id: 4, title: "Lesson 4" },
      ],
    },
  ]
}

export default function course (state = INITIAL_STATE, action) {

  if (action.type === 'TOOGLE_LESSON') {
    return {
      ...state,
      activeLesson: action.lesson,
      activeModule: action.module
    }
  }

  return state;
}
