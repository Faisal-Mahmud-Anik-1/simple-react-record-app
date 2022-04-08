function Form() {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("first");
  };
  return (
    <form>
      <label htmlFor="recordName">Record Name</label>
      <input id="recordName" name="recordName" />
      <label id="artistName">Artist Name</label>
      <input id="artistName" name="artistName" />
      <label htmlFor="description">Description</label>
      <textarea id="description" name="description" />
      <button type="submit" onClick={handleClick}>
        Submit
      </button>
    </form>
  );
}

export default Form;
