export default {
    bind(el, bindings, vnode) {
        const arg = bindings.arg

        

        const fontModifier = bindings.modifiers['font'];
        const delay = bindings.modifiers['delay'];
        let delayTime = 0; 

        if (fontModifier) {
            el.style.fontSize = "30px"
        }

        if (delay) {
            delayTime = 2000;
        }

        if (delay) {
            setTimeout(() => {
                el.style[arg] = bindings.value;
            }, delayTime);
        }

    },
    update(el, bindings, vnode, oldvnode) {
        const arg = bindings.arg

        el.style[arg] = bindings.value;
    }
}