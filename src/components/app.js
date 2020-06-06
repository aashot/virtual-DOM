
/** @jsx h */

const h = (type, props, ...children) => {
    return {
        type,
        props,
        children
    }
};

export default (
    <div class="container">
        <div class="glitch" data-text="SUPER">SUPER</div>
        <div class="glitch" data-text="GLITCH">GLITCH</div>
    </div>
);