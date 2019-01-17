import * as React from 'react';
import FilterLink from '../../containers/todo/FilterLink';
import { showAll, showCompleted, showActive} from '../../modules/todo/visibilityFilter/FilterAction'

const component: React.SFC = () => {
  return (
    <div>
      <span>Show: </span>
      <FilterLink filter={showAll()}>
        All
      </FilterLink>
      <FilterLink filter={showActive()}>
        Active
      </FilterLink>
      <FilterLink filter={showCompleted()}>
        Completed
      </FilterLink>
    </div>
  );
};

export default component;