const Profile = ({data, setData}) => {
     const { name, age, email } = data;

  const handleChange = (e, item) => {
    setData((prev) => ({ ...prev, [item]: e.target.value }));
  };
  return (
    <div className="profile">
      <label>Name: </label>
      <input
        type="text"
        value={name}
        onChange={(e) => handleChange(e, "name")}
      />

      <label>Age: </label>
      <input
        type="number"
        value={age}
        onChange={(e) => handleChange(e, "age")}
      />

      <label>Email: </label>
      <input
        type={"email"}
        value={email}
        onChange={(e) => handleChange(e, "email")}
      />
    </div>
  );
};


export default Profile