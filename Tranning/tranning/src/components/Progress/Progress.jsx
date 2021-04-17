import React from 'react'
import Progress_class from './Progress_class'

class Progress extends React.Component {
    render() {
        var pro7 = {
            background:"#f4f5f7"
        }
        var pro1 = {
            background:"#5e72e4"
        }
        var pro2 = {
            background:"#11cdef"
        }
        var pro3 = {
            background:"#2dce89"
        }
        var pro4 = {
            background:"#f5365c"
        }
        var pro5 = {
            background:"#fb6340"
        }
        var pro6 = {
            background:"#525f7f"
        }
        return (
            <div className="Progress">
                <h2>Example</h2>
                <div className="Progress_main">
                    <Progress_class pro={pro1} />
                    <Progress_class pro={pro2} />
                    <Progress_class pro={pro3} />
                    <Progress_class pro={pro4} />
                    <Progress_class pro={pro5} />
                    <Progress_class pro={pro6} />
                    <Progress_class pro={pro7} />
                </div>
            </div>
        )
    }
}
export default Progress;