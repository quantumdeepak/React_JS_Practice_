// let new_root=document.getElementById('root');

function custom_render(react_element,container){
    // this function will take two argument
    // 1. react_element
    // 2. container
    // 3. we will create a dom element
    
    let dom_element= document.createElement(react_element.type);
    dom_element.innerHTML=react_element.children;
    /*
    dom_element.setAttribute('href',react_element.props.href);
    dom_element.setAttribute('target',react_element.props.target);
    */

    for( let prop in react_element.props)
    {
        if(prop === 'children') continue;
        dom_element.setAttribute(prop,react_element.props[prop])
    }
    container.appendChild(dom_element);

    
}

let  react_element = {
    type: 'a',  // this mentiojn the type of the tag
    // props is properties  this is an object
    props : {
        href: 'https://www.google.com',
        target : '_blank',
    },
    children : "Click to visit google"
}

let new_root = document.querySelector('#root');

//  we will function to render the react_element element

custom_render(react_element,new_root);