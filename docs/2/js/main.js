window.addEventListener('DOMContentLoaded', (event) => {
    const { h1, div, button, p } = van.tags
    const Counter = () => {
        const count = van.state(0)
        const color = van.derive(()=>(0 < count.val && (0===count.val % 3 || `${count.val}`.includes('3')) ? 'red' : 'black'))
        return div(button({onclick:()=>++count.val}, 'Count'), p({style:()=>`color:${color.val};`}, count))
    }
    van.add(document.body, h1('3の倍数と3のつく数のときだけ赤になる'))
    van.add(document.body, Counter)
});
window.addEventListener('beforeunload', (event) => {
    console.log('beforeunload!!');
});

