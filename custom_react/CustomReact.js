function ReactRender(ReactElement,ReactDom){
    const domElement = document.createElement(ReactElement.type);
    domElement.innerHTML = ReactElement.child;
    for (const prop in ReactElement.props) {
            domElement.setAttribute(prop, ReactElement.props[prop]);
        }   
    ReactDom.appendChild(domElement);
}

const ReactElement = {
    type: "a",
    props: {
        Href: "http://google.com",
        target: "google",
        id: "google"
    },
    child: "Visit Google here"
}
const ReactElement1 = {
    type: "a",
    props: {
        Href: "http://daleseden.com",
        target: "google",
        id: "google"
    },
    child: "Visit dalesEden"
}
const body = document.getElementById("body");

ReactRender(ReactElement,body);
ReactRender(ReactElement1,body);