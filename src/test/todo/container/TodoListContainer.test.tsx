import { FilterType } from '../../../app/todo/constant/FilterActionConstant';
import { createStore } from 'redux';
import { rootReducer, RootState } from '../../../app/root/RootModule';
import { mapStateToProps, mapDispatchToProps } from '../../../app/todo/container/TodoListContainer';
import { toggleTodo } from '../../../app/todo/action/ToggleTodoAction';

// 単純にメソッド叩いて思った通りの値が帰ってくるかのテストをする
// mapStateToPropsとかをテストのためだけにexportしないといけないのが若干ダサいがテストがシンプルになるので許容するかなあ

// ReducerからテストのためだけにTodoをexportするべきか悩んでる
class TodoOfReducer {
  constructor(public id: number, public text: string, public completed: boolean) { }
}


describe('TodoListContainer', () => {

  describe('mapStateToProps', () => {
    const todo = new TodoOfReducer(0, "test", false)
    const completedTodo = new TodoOfReducer(1, "test-completed", true)

    let state: RootState

    beforeEach(() => {
      let store = createStore(rootReducer)
      state = store.getState()// State自力で作るのめんどいのでStoreに作ってもらう
      let todos = [todo, completedTodo]
      state.todo = { todos }
    })

    it('all', () => {
      // arrenge
      state.filter = { filterType: FilterType.ALL }

      // act
      let prop = mapStateToProps(state)

      // assert
      let expectProp = { todos: [todo, completedTodo] }
      expect(prop).toEqual(expectProp);
    })

    it('completed', () => {
      // arrenge
      state.filter = { filterType: FilterType.COMPLETED }

      // act
      let prop = mapStateToProps(state)

      // assert
      let expectProp = { todos: [completedTodo] }
      expect(prop).toEqual(expectProp);
    })

    it('active', () => {
      // arrenge
      state.filter = { filterType: FilterType.ACTIVE }

      // act
      let prop = mapStateToProps(state)

      // assert
      let expectProp = { todos: [todo] }
      expect(prop).toEqual(expectProp);
    })
  });

  describe('mapStateToProps', () => {
    let dispatch: jest.Mock

    beforeEach(() => {
      dispatch = jest.fn();
    })

    it('toggleTodo', () => {
      // arrenge
      // act
      let props = mapDispatchToProps(dispatch)// props作ってみる
      props.toggleTodo(1)//作られたpropsの中を叩いてみる

      // assert
      // 意図した通りのActionがdispatchに渡されていれば成功
      expect(dispatch).toHaveBeenCalledWith(toggleTodo({ id: 1 }))
    })

  });

});