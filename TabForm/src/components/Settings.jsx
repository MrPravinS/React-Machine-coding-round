const Settings = ({data, setData}) => {
    const { theme } = data;

  const handelTheme = (e) => {
    setData((prev) => ({
      ...prev,
      theme: e.target.name,
    }));
  };
  return (
    <div>
      <div>
        <label>
          <input
            type={"radio"}
            name="dark"
            checked={theme === "dark"}
            onChange={handelTheme}
          />
          Dark
        </label>
      </div>

      <label>
        <input
          type={"radio"}
          name="light"
          checked={theme === "light"}
          onChange={handelTheme}
        />
        light
      </label>
    </div>
  );
};

export default Settings;