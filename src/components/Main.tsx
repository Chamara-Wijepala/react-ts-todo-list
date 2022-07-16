function Main() {
  return (
    <main>
      <div className="Container">
        <form>
          <input type="text" placeholder="Create a new todo..." />
        </form>
      </div>
      <div className="Container">
        <div id="todo-list">
          <div className="Todo">Test 1</div>
          <div className="Todo">Test 2</div>
          <div className="Todo">Test 3</div>
          <div className="Todo">Test 4</div>
          <div className="Todo">Test 5</div>
          <div className="Todo">Test 6</div>
          <div className="Todo">Test 7</div>
          <div className="Todo">Test 8</div>
        </div>
        <div id="button-list">
          <p>8 items left</p>
          <button type="button">Clear Completed</button>
        </div>
      </div>
      <div className="Container">
        <button type="button">All</button>
        <button type="button">Active</button>
        <button type="button">Completed</button>
      </div>
    </main>
  );
}

export default Main;
