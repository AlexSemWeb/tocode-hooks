const arrayOfData = [
  {
    title: "Ut nec elit eu purus ultrices",
    descr: "Nulla gravida porta lorem non consectetur",
  },
  {
    title: "Duis lobortis",
    descr: "Nullam ac tincidunt ante",
    children: [
      {
        title: "Lobortis #1",
        descr: "Phasellus gravida",
      },
      {
        title: "Lobortis #2",
        descr: "Phasellus gravida",
      },
      {
        title: "Lobortis #3",
        descr: "Phasellus gravida",
      },
    ],
  },
  {
    title: "Duis lobortis",
    descr: "Donec tincidunt neque turpis",
    children: [
      {
        title: "Duis #1",
        descr: "Quisque id feugiat sem",
      },
      {
        title: "Duis #2",
        descr: "Suspendisse eu interdum diam",
        children: [
          {
            title: "Porttitor #1",
            descr: "Donec porttitor ullamcorper magna",
          },
          {
            title: "Porttitor #2",
            descr: "Quisque id feugiat sem",
          },
        ],
      },
    ],
  },
];

const List = ({ data }) => {
  const [isActive, setIsActive] = React.useState(false);

  const children = data.children && data.children.length && (
    <ul className="list">
      {data.children.map((item, index) => (
        <List data={item} key={index} />
      ))}
    </ul>
  );

  return (
    <li className={"list__item " + (isActive ? "active" : "")}>
      <span onClick={() => setIsActive(!isActive)} className="title">
        {data.title}
      </span>
      {isActive && (
        <React.Fragment>
          <span
            className="descr"
            dangerouslySetInnerHTML={{ __html: data.descr }}
          />
          {children}
        </React.Fragment>
      )}
    </li>
  );
};

const App = ({ data }) => {
  return (
    <ul className="list">
      {data.map((item, index) => (
        <List data={item} key={index} />
      ))}
    </ul>
  );
};

ReactDOM.render(<App data={arrayOfData} />, document.getElementById("app"));
