import { connect } from "react-redux";

import { toggleLesson } from "../../store/actions/course";

function Sidebar({ modules, dispatch }) {
  return (
    <div>
      {modules.map((module) => (
        <div key={module.id}>
          <strong>{module.title}</strong>
          <ul>
            {module.lessons.map((lesson) => (
              <div key={lesson.id}>
                <li>{lesson.title}</li>
                <button onClick={() => dispatch(toggleLesson(module, lesson))}>
                  Selecionar
                </button>
              </div>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default connect((state) => ({ modules: state.course.modules }))(Sidebar);
