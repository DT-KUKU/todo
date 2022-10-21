import './App.css';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { deleteWork, appendWork, updateWork } from './action';
import { useState } from 'react';

const InputStyled = styled.input`
  border-radius: 5px;
  padding: 0px;
`;

const LiStyled = styled.li`
  list-style: none;
  display: inline-block;
`;

const DeleteStyled = styled.span`
  cursor: pointer;
`;
const UpdateStyled = styled.span`
  cursor: pointer;
  border: 1px solid black;
`;

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [work, setWork] = useState('');
  const [change, setChange] = useState(false);
  const [elId, setElId] = useState(0);

  const updateHandler = (id, title) => {
    setWork(title);
    setChange((prev) => !prev);
    setElId(id);
  };
  return (
    <main>
      <section>
        <label htmlFor="wrok"></label>
        <InputStyled
          id="work"
          value={work}
          onChange={(e) => setWork(e.target.value)}
        />
        {change ? (
          <button
            onClick={() => {
              dispatch(updateWork(elId, work));
              setChange((prev) => !prev);
              setWork('');
            }}
          >
            수정
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch(appendWork(state.todo.length + 1, work));
              setWork('');
            }}
          >
            추가
          </button>
        )}
      </section>
      <section>
        {state.todo.map((el) => {
          return (
            <div key={el.id}>
              <LiStyled> {el.title}</LiStyled>
              <UpdateStyled onClick={() => updateHandler(el.id, el.title)}>
                수정
              </UpdateStyled>
              <DeleteStyled onClick={() => dispatch(deleteWork(el.id))}>
                X
              </DeleteStyled>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default App;
