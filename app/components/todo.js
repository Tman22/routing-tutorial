import React, { Component } from 'react';
import { Link } from 'react-router';

export const ToDo = (props) => {

  let object = todos.find(todo => {
    return todo.ref === parseInt(props.params.todoID)
  })
  let {title, body} = object;

  return (
    <div>
      <h2 className='title'> {title}</h2>
      {body}
    </div>
  )
}
const todos = [
  {ref: 1, title: 'Lorem Ipsum',
  body: `is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
  of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`},
  {ref: 2, title: 'Redux',
  body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed libero ut est egestas laoreet sed eget enim. Morbi mollis ligula diam,
  in sagittis metus pellentesque in. Mauris porta felis sit amet molestie consectetur. Proin eu nunc dolor. Fusce vestibulum quam at arcu congue ultrices.
  Aliquam non iaculis tortor, at.`},
  {ref: 3, title: 'Make food',
  body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed libero ut est egestas laoreet sed eget enim. Morbi mollis ligula diam,
  in sagittis metus pellentesque in. Mauris porta felis sit amet molestie consectetur. Proin eu nunc dolor. Fusce vestibulum quam at arcu congue ultrices.
  Aliquam non iaculis tortor, at.`}
]
