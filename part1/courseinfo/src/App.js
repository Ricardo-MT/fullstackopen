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
    <p>
      <Part part={sections[0].name} exercises={sections[0].exercises} />
      <Part part={sections[1].name} exercises={sections[1].exercises} />
      <Part part={sections[2].name} exercises={sections[2].exercises} />
    </p>
  );
}

const Total = ({total}) => {
  return (
    <p>Number of exercises {total}</p>
  );
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course={course.name} />
      <Content sections={course.parts}/>
      <Total total={course.parts.map(p => p.exercises).reduce((p, c) => p + c)}/>
    </div>
  );
}

export default App;
