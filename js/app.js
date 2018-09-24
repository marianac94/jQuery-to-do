// need to find a button and make a click function on it.
$('button').on('click', () => {
  const $info = $('input').val();
    console.log($info);
    createTodo($info);
})

const createTodo = (inputValue) => {
  const $div = $('<div/>').addClass('todos');

    $div.append('<h5>' + inputValue + '</h5>')

    const $button = $('<button/>').on('click', completedTodo);
      $button.text('completed');

    $div.append($button)
      $('#col-1').append($div)

}

const completedTodo = (event) => {
  const $currentTodo = $(event.currentTarget).parent()
    console.log($currentTodo);

    $('#col-2').append($currentTodo)

    $(event.currentTarget).text('deleted');
    $(event.currentTarget).off('click').on('click', removeTodo);
}

const removeTodo = (event) => {
  $(event.currentTarget).parent().remove()
}
