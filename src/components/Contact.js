const Contact = () => {
  return (
    <div className="font-bold text-3xl p-4 m-4">
      <h1>Contact Page</h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="Name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="Name"
        />
        <button className="bg-blue-500 text-white p-2 m-2">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
