

const useAlert = (props) => {
    let a = props.a1 ? <i className="far fa-check-circle"></i> : <img src="./alert_if.png"/>
    let b = props.b1 ? <img src="./alert_wr.png"/> : a
    let c = props.c1 ? <img src="./alert_dg.png"/> : b
    let d = props.min ? "" : props.max ? <p>A description of the success alert</p> : <p>This is a description</p>
    return [c, d]
}
export default useAlert;