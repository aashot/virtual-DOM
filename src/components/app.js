
/** @jsx h */

const h = (type, props, ...children) => {
    return {
        type,
        props,
        children
    }
};

export default (
    <nav class="dropdownmenu">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Me</a></li>
            <li><a href="#">Articles on HTML5 & CSS3</a>
                <ul id="submenu">
                    <li><a href="#/">Difference between SVG vs. Canvas</a></li>
                    <li><a href="#">New features in HTML5</a></li>
                    <li><a href="#">Creating links to sections within a webpage</a></li>
                </ul>
            </li>
            <li><a href="#">News</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
    </nav>
);