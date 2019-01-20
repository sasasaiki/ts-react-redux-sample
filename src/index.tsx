import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './app/todo/component/App';
import { rootReducer } from './app/root/RootModule';
import configureStore, { history } from './app/root/ConfigureStore';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router';

const store = configureStore(/* デフォルトステートがあれば渡す */)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/todo" component={TodoApp} />
                <Route render={() => (<div>デメニギスへようこそ！！urlに/todoつければTodoリストに飛べるようにしたよ。</div>)} />
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
