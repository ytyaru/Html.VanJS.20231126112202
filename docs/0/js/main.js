window.addEventListener('DOMContentLoaded', (event) => {
    const { h1, p, span, a } = van.tags
    van.add(document.body, h1('Hello ', a({href:'https://vanjs.org/'}, 'VanJS')))
    van.add(document.body, p('VanJS is JavaScript library.'))
});
window.addEventListener('beforeunload', (event) => {
    console.log('beforeunload!!');
});

