const Header = ({course}) => {
    return (
      <h1>{course}</h1>
    );
  }
  
  const Part = ({part, exercises}) => {
    return (
      <p>
        {part} {exercises}
      </p>
    );
  }
  
  const Content = ({sections}) => {
    return (
      <>
        {sections.map(section=> <Part part={section.name} exercises={section.exercises} />)}
      </>
    );
  }
  
  const Total = ({total}) => {
    return (
      <p><strong>Number of exercises: {total}</strong></p>
    );
  }
  
  const Course = ({course}) => {
    return (
      <div>
        <Header course={course.name} />
        <Content sections={course.parts}/>
        <Total total={course.parts.map(p => p.exercises).reduce((p, c) => p + c)}/>
      </div>
    );
  }

  export default Course;