
/** @jsx h */

const h = (type, props, ...children) => {
    return {
        type,
        props,
        children
    }
};

export default (
    <ul>
        <li>
            <h1>1</h1>
            <span>Lorem Ipsum dolor.</span>
            <a href="#"><span>Clique Aqui</span></a>
        </li>
        <li>
            <h1>2</h1>
            <span>Lorem Ipsum dolor.</span>
            <a href="#"><span>Clique Aqui</span></a>
        </li>
        <li>
            <h1>3</h1>
            <span>Lorem Ipsum dolor.</span>
            <a href="#"><span>Clique Aqui</span></a>
        </li>
    </ul>
);