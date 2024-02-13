const reactelement = {
    type : "a",
    Props : {
        href : "https" ,
        target : '_blank'
    },
    childeren : "click me to visit google"
}

const mainContainer = document.getElementById("Root")

costomRender(reactelement,mainContainer)

function costomRender(reactelement,Container){
    /*const domelemet = document.createElement
    (reactelement.type)
     domelemet.innerHTML =reactelement.childeren
     domelemet.setAttribute('target',reactelement.Props.href)
     domelemet.setAttribute('href',reactelement.Props.target)
     
     Container.appendChild(domelemet)*/
    
     const Domelement = document.createElement
     (reactelement.type)
     Domelement.innerHTML = reactelement.childeren
     for( const prop in reactelement.Props){
        if(prop === "childeren") continue;
        Domelement.setAttribute(prop , reactelement.Props[prop])
     }
     Container.appendChild(Domelement)
}