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
  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  };
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  };
  const part3 = {
    name: 'State of a component',
    exercises: 14
  };

  return (
    <div>
      <Header course={course} />
      <Content sections={[
        part1,
        part2,
        part3,
        ]}/>
      <Total total={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  );
}

export default App;
