import { connect } from "react-redux";

function Video({ lesson, module }) {
  return (
    <div>
      <strong>Module {module.title}</strong>
      <p>Aula {lesson.title}</p>
    </div>
  );
}

export default connect((state) => ({
  lesson: state.course.activeLesson,
  module: state.course.activeModule,
}))(Video);
