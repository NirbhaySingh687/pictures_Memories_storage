import PostMessage from "../Models/PostMessage"

export const getPost = async (req, res) => {
    try {
        const postMessage = await PostMessage.find({});
        res.status(200).json(postMessage)
    } catch (err) {
        res.status(404).json({ message: "error Found"})
    }
}

export const createPost = async (req, res) => {
    try {
        const param = { ...req.body }
        const newPost = PostMessage(param)
        await newPost.save()
        res.status(201).json(newPost)
    } catch (err) {
        res.status(404).json({ message: "error Found"})
    }
}

return (
    <div className="mt-20 layout-column justify-content-center align-items-center">
        <section className="mt-50 layout-row align-items-center justify-content-center">
            <input id="create-task-input" type="text" className="large" placeholder="New task name" data-testid="create-task-input" name="newTask" value={this.state.newTask} onChange={(e) => this.handleChanges(e)}/>
            <button type="submit" className="ml-30" data-testid="create-task-button" onClick={this.onhandleSubmit}>Create task</button>
        </section>
        <div className="mt-50 layout-row">
            {stagesTasks.map((tasks, i) => {
                return (
                    <div className="card outlined ml-20 mt-0" key={`${i}`}>
                        <div className="card-text">
                            <h4>{this.stagesNames[i]}</h4>
                            <ul className="styled mt-50" data-testid={`stage-${i}`}>
                                {tasks.map((task, index) => {
                                    return <li className="slide-up-fade-in" key={`${i}${index}`}>
                                        <div className="li-content layout-row justify-content-between align-items-center">
                                            <span data-testid={`${task.name.split(' ').join('-')}-name`}>{task.name}</span>
                                            <div className="icons">
                                                <button disabled={task.stage === Math.min(this.stagesNames[0].stage)} onClick={() => this.moveToBack(task)} className="icon-only x-small mx-2" data-testid={`${task.name.split(' ').join('-')}-back`}>
                                                    <i className="material-icons">arrow_back</i>
                                                </button>
                                                <button disabled={task.stage === Math.max(this.stagesNames[this.stagesNames.length-1].stage)} onClick={() => this.moveToForward(task)} className="icon-only x-small mx-2" data-testid={`${task.name.split(' ').join('-')}-forward`}>
                                                    <i className="material-icons">arrow_forward</i>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
);