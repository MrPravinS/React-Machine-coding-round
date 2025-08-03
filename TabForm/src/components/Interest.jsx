const Interest = ({data, setData}) => {
  const { interests } = data;
  return (
    <div>
      <div>
        <label>
          <input
            type={"checkbox"}
            name="coding"
            checked={interests.includes("coding")}
          />
          Coding
        </label>
      </div>
      <div>
        <label>
          <input
            type={"checkbox"}
            name="coding"
            checked={interests.includes("cricket")}
          />
          Cricket
        </label>
      </div>
      <div>
        <label>
          <input
            type={"checkbox"}
            name="coding"
            checked={interests.includes("music")}
          />
          Music
        </label>
      </div>

      <div>
        <label>
          <input
            type={"checkbox"}
            name="coding"
            checked={interests.includes("reading")}
          />
          Reading
        </label>
      </div>
    </div>
  );
};


export default Interest;
