import React from 'react'

class Forms_class extends React.Component {
    render() {
        var { form, support, supports, supp,disable } = this.props
        var supp = supp === undefined ? "" : <i className="fas fa-check-circle"></i>
        var supports = supports === undefined ? supp : <i className="fas fa-search-plus"></i>
        var support = support === undefined ? supports : <i className="fas fa-life-ring"></i>
        var disable = disable ===undefined ? false:true
        return (
            <div className="form_input" style={{ border: `1px solid ${form.color}` }}>
                {support}
                <input disabled={disable} placeholder={`${form.text}`} type="text" />
            </div>
        )
    }
}
export default Forms_class;