const Part = ({ part }) => {
  return (
    <li>
      {part.name} {part.exercises}
    </li>
  );
};

const Total = ({ parts }) => {
  return <p>Total: {parts.reduce((a, p) => a + p.exercises, 0)}</p>;
};

const Content = ({ parts }) => {
  return (
    <>
      <ul>
        {parts.map((p) => (
          <Part key={p.id} part={p} />
        ))}
      </ul>
      <Total parts={parts} />
    </>
  );
};

const Header = ({ header }) => {
  return <h2>{header}</h2>;
};

const Course = ({ course }) => {
  return (
    <>
      <Header header={course.name} />
      <Content parts={course.parts} />
    </>
  );
};

export default Course;
