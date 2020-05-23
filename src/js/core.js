const createElement = virtualNode => {
    if (typeof virtualNode === 'string') {
        return document.createTextNode(virtualNode);
    }
    const rootElement = document.createElement(virtualNode.type);
    virtualNode.props && Object.keys(virtualNode.props).forEach((key) => {
        rootElement.setAttribute(key, virtualNode.props[key]);
    });
    virtualNode.children.map(createElement).forEach((childElement) => {
        rootElement.appendChild(childElement);
    });
    return rootElement;
}

const domChanged = (nodeA, nodeB) => {
    return (
        typeof nodeA !== typeof nodeB ||
        typeof nodeA === 'string' && nodeA !== nodeB ||
        nodeA.type !== nodeB.type
    );

    //TODO: also check whether the attributes are changing
}

const update = (rootElement, currentNode, nextNode, index = 0) => {
    if (!nextNode) {
        rootElement.removeChild(rootElement.childNodes[index]);
    } else if (!currentNode) {
        rootElement.appendChild(createElement(nextNode));
    } else if (domChanged(currentNode, nextNode)) {
        rootElement.replaceChild(createElement(nextNode), rootElement.childNodes[index]);
    } else if (typeof nextNode !== 'string') {
        for (let i = 0; i < Math.max(currentNode.children.length, nextNode.children.length); i++) {
            update(rootElement.childNodes[index], currentNode.children[i], nextNode.children[i], i);
        }
    }
}

const render = (virtualRoot, domRootId) => {
    const domRootElement = document.querySelector(domRootId);
    return domRootElement.appendChild(createElement(virtualRoot));
};

export default render;