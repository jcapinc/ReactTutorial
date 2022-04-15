import React from 'react';
import ReactDom from 'react-dom';

import { RedirectableApi } from './Api'

// Theoretically will come from an api
const todo = [
  "Solve World Hunger",
  "Bring About World Peace",
  "Make All Code Work",
  "Add A Todo Item",
  "End The Meeting"
];

function TodoList({items = []}) {
  return <div>
    {items.map(function(item) {
      return <TodoListItem>{item}</TodoListItem>
    })}
  </div>;
}

function TodoListItem(props) {
  return <div>
    <input type="checkbox" checked={props.checked} />
    {props.children ? props.children : <i>No Text</i>}
  </div>;
}

ReactDom.render(
  <RedirectableApi />, 
  document.getElementById('mount')
)
