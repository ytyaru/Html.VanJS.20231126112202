window.addEventListener('DOMContentLoaded', (event) => {
    const { div, button, p } = van.tags
    const Counter = () => {
        const count = van.state(0)
        return div(button({onclick:()=>++count.val},'Count'), p(count))
    }
    van.add(document.body, Counter)
});
window.addEventListener('beforeunload', (event) => {
    console.log('beforeunload!!');
});

