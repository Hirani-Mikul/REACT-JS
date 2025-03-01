import React from 'react';
import CompletedTodo from '../CompleteTodo';
import Form from '../Form';
import IncompletedTodo from '../Incomplete';
import TodoList from '../TodoList';

export default [
  {
    path: '/',
    exact: true,
    component: () => (
      <>
        <Form /> <TodoList />{' '}
      </>
    ),
  },
  {
    path: '/completed',
    component: () => <CompletedTodo />,
  },
  {
    path: '/incompleted',
    component: () => <IncompletedTodo />,
  },
];
