import React, {PureComponent} from 'react'

class List extends PureComponent {
    state = {
        todoList: [
            {
                id: 1,
                content: 'reading',
                finished: false
            },
            {
                id: 2,
                content: 'coding',
                finished: false
            }
        ]
    };
    handleAddClick = () => {
        const content = this.refs.content.value;
        if (content.length == 0) {
            return;
        }
        const list = this.state.todoList;
        const newList = list.concat([{
            id: list.length + 1,
            content: content
        }]);
        this.setState({todoList: newList});
        this.refs.content.value = "";
    };
    handleDeleteClick = (id) => {
        let list = this.state.todoList;
        list.splice(id, 1);
        console.log(list);
        this.setState({todoList: list});
        this.forceUpdate();
    };
    handleFinishedClick = (id) => {
        let list = this.state.todoList;
        list[id].finished = true;
        console.log(list);
        this.setState({todoList: list});
        this.forceUpdate();
    };

    render = () => {
        return (
            <div>
                <div className='list-wrapper'>
                    <table border="1">
                        <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Content</th>
                            <th>Finished</th>
                            <th></th>
                            <th></th>
                        </tr>
                        {
                            this.state.todoList.map((i,index) => {
                                    return <tr key={i.id}>
                                        <th>{i.id}</th>
                                        <th>{i.content}</th>
                                        <th>{i.finished ? <p>Yes</p> : <p>No</p>}</th>
                                        <th>
                                            <button className='finished' onClick={()=>this.handleFinishedClick(index)}>
                                                mark as finished
                                            </button>
                                        </th>
                                        <th>
                                            <button className='delete' onClick={()=>this.handleDeleteClick(index)}>
                                                Delete
                                            </button>
                                        </th>
                                    </tr>
                                }
                            )
                        }
                        </tbody>
                    </table>
                </div>
                <div className='input-wrapper'>
                    <input ref='content'/>
                    <button className='add' onClick={this.handleAddClick}>
                        Add
                    </button>
                </div>
            </div>

        );
    }
}

export default List;