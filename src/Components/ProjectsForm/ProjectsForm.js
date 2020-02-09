<section className="input">
  <div className="formBox">
    <label for="name">Name</label>
    <input className="formInput" type="text" name="name" value={name} onChange={handleNameChange}><input>
  </div>
  <button onClick={addNewCard}>Submit</button>
</section>
