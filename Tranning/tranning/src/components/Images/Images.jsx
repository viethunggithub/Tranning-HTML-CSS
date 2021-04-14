import React from 'react'

class Images extends React.Component {
    render() {
        return (
            <div className="Images">
                <h2>Responsive images</h2>
                <div className="images_res">836x250</div>
                <h2>Image thumbnails</h2>
                <div className="images_thum">
                    <div className="images_thum_sub">200x200</div>
                </div>
                <h2>Aligning images</h2>
                <div className="images_align">
                    <div className="images_thum_sub align_sub">200x200</div>
                    <div className="images_align_sub">
                        <div className="images_thum_sub align_sub">200x200</div>
                        <div className="images_thum_sub align_sub">200x200</div>
                    </div>
                    <div className="images_thum_sub align_sub">200x200</div>
                </div>
            </div>
        )
    }
}
export default Images;