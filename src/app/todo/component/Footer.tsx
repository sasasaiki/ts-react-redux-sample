import * as React from 'react';
import FilterButtonContainer from '../container/FilterButtonContainer';
import { showAll, showCompleted, showActive} from '../module/filter/FilterAction'

const component: React.SFC = () => {
  return (
    <div>
      <span>Show: </span>
      <FilterButtonContainer filter={showAll()}>
        All
      </FilterButtonContainer>
      <FilterButtonContainer filter={showActive()}>
        Active
      </FilterButtonContainer>
      <FilterButtonContainer filter={showCompleted()}>
        Completed
      </FilterButtonContainer>
    </div>
  );
};

export default component;