import { FilterType } from '../../../app/todo/constant/FilterActionConstant';
import { createStore } from 'redux';
import { rootReducer, RootState } from '../../../app/root/RootModule';
import { mapStateToProps, mapDispatchToProps } from '../../../app/todo/container/TodoListContainer';

// componentからexportするか悩む
type Props = {
  active: boolean;
  onClick: () => void;
};

// Reducerからテストのためだけにexportするべきか悩んでる
class TodoOfReducer {
  constructor(public id: number, public text: string, public completed: boolean) { }
}


describe('TodoListContainer', () => {

  const todo = new TodoOfReducer(0, "test", false)
  const completedTodo = new TodoOfReducer(1, "test-completed", true)

  function stubRootState(): RootState {
    let store = createStore(rootReducer)
    let state = store.getState()
    let todos = [todo, completedTodo]
    state.todo = { todos }
    return state
  }

  describe('mapStateToProps', () => {
    it('all', () => {
      let state = stubRootState()
      state.filter = { filterType: FilterType.ALL }

      let prop = mapStateToProps(state)

      let expectProp = { todos: [todo, completedTodo] }
      expect(prop).toEqual(expectProp);
    })

    it('completed', () => {
      let state = stubRootState()
      state.filter = { filterType: FilterType.COMPLETED }

      let prop = mapStateToProps(state)

      let expectProp = { todos: [completedTodo] }
      expect(prop).toEqual(expectProp);
    })

    it('active', () => {
      let state = stubRootState()
      state.filter = { filterType: FilterType.ACTIVE }

      let prop = mapStateToProps(state)

      let expectProp = { todos: [todo] }
      expect(prop).toEqual(expectProp);
    })
  });

});