class Header extends React.Component{
    render(){
        return (
            <h1>Assign</h1>
        );
    }
}

const itemList = ["Go to the university", "Finish the class", "clear all datalive"];

class Item extends React.Component{
    render(){
        return (
            <div>
                 {itemList.map(item => <li key={item}>{item}</li>)}
            </div>
        );
    }
}

class Items extends React.Component{
    
    render(){
        return(
        <ol>
            <Item />
        </ol>
        );
    }
}

const template = (
    <div>
        <Header />
        <Items />
    </div>
)

ReactDOM.render(template, document.getElementById("hook"));