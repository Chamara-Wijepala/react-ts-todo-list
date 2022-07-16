import StyledMain from "./styles/Main.styled";
import {
  StyledContainer,
  StyledContainerWithPadding,
} from "./styles/Container.styled";

function Main() {
  return (
    <StyledMain>
      <StyledContainerWithPadding>
        <form>
          <input type="text" placeholder="Create a new todo..." />
        </form>
      </StyledContainerWithPadding>

      <StyledContainer>
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
      </StyledContainer>

      <StyledContainerWithPadding>
        <button type="button">All</button>
        <button type="button">Active</button>
        <button type="button">Completed</button>
      </StyledContainerWithPadding>
    </StyledMain>
  );
}

export default Main;
