let state = {};

let source = $('#template').html();
let template = Handlers.compile(source);

console.log(source);

let button = $('#clicker');
let input = $('#wordsInput');

button.on('click', handleClick);
input.on('change', handleChange);

function handleChange(e) {
  state.words = $(this).val();
  console.log('__STATE__', state);
}

function handleClick(e) {
  e.preventDefault();
  $( "<div>" )
  .append( "default " + event.type + " prevented" )
  .appendTo( "#log" );
}