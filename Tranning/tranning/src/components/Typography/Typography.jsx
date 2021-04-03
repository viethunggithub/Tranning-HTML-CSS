import React from 'react'

class Typography extends React.Component {
    render() {
        return (
            <div className="typography">
                <h2>Headings</h2>
                <div className="headings">
                    <div className="headings_tag">&#60;h1&#62;&#60;/h1&#62;</div>
                    <div className="headings_text">
                        <h1>h1. Bootstrap heading</h1>
                    </div>
                </div>
                <div className="headings">
                    <div className="headings_tag">&#60;h2&#62;&#60;/h2&#62;</div>
                    <div className="headings_text">
                        <h2>h2. Bootstrap heading</h2>
                    </div>
                </div>
                <div className="headings">
                    <div className="headings_tag">&#60;h3&#62;&#60;/h3&#62;</div>
                    <div className="headings_text">
                        <h3>h3. Bootstrap heading</h3>
                    </div>
                </div>
                <div className="headings">
                    <div className="headings_tag">&#60;h4&#62;&#60;/h4&#62;</div>
                    <div className="headings_text">
                        <h4>h4. Bootstrap heading</h4>
                    </div>
                </div>
                <div className="headings">
                    <div className="headings_tag">&#60;h5&#62;&#60;/h5&#62;</div>
                    <div className="headings_text">
                        <h5>h5. Bootstrap heading</h5>
                    </div>
                </div>
                <div className="headings">
                    <div className="headings_tag">&#60;h6&#62;&#60;/h6&#62;</div>
                    <div className="headings_text">
                        <h6>h6. Bootstrap heading</h6>
                    </div>
                </div>
                <div className="tags">
                    <h1>h1. Bootstrap heading</h1>
                    <h2>h2. Bootstrap heading</h2>
                    <h3>h3. Bootstrap heading</h3>
                    <h4>h4. Bootstrap heading</h4>
                    <h5>h5. Bootstrap heading</h5>
                    <h6>h6. Bootstrap heading</h6>
                </div>
                <h2>Display headings</h2>
                <table className="display">
                    <tbody>
                        <tr><td>Display 1</td></tr>
                        <tr><td>Display 2</td></tr>
                        <tr> <td>Display 3</td></tr>
                        <tr><td>Display 4</td></tr>
                    </tbody>
                </table>
                <h2>Inline text elements</h2>
                <div className="inline">
                    <p>This line of text is meant to be treated as deleted text.</p>
                    <p>This line of text is meant to be treated as no longer accurate.</p>
                    <p>This line of text is meant to be treated as an addition to the document.</p>
                    <p>This line of text will render as underlined</p>
                    <p>This line of text is meant to be treated as fine print.</p>
                    <p>This line rendered as bold text.</p>
                    <p>This line rendered as italicized text</p>
                </div>
                <h2>Abbreviations</h2>
                <div className="abbre">
                    <p>attr</p>
                    <p>HTML</p>
                </div>
                <h2>Lists</h2>
                <ul className="lists">
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipiscing elit</li>
                    <li>Integer molestie lorem at massa</li>
                    <li>Facilisis in pretium nisl aliquet</li>
                    <li>Nulla volutpat aliquam velit
                        <ul className="lists_sub">
                            <li>Phasellus iaculis neque</li>
                            <li>Purus sodales ultricies</li>
                            <li>Vestibulum laoreet porttitor sem</li>
                            <li>Ac tristique libero volutpat at</li>
                        </ul>
                    </li>
                    <li>Faucibus porta lacus fringilla vel</li>
                    <li>Aenean sit amet erat nunc</li>
                    <li>Eget porttitor lorem</li>
                </ul>
                <h2>Description list alignment</h2>
                <table className="description" width="100%" >
                    <tbody>
                        <tr>
                            <th>Description lists</th>
                            <td colSpan="2">A description list is perfect for defining terms.</td>
                        </tr>
                        <tr>
                            <th style={{position:"absolute"}}>Euismod</th>
                            <td colSpan="2">
                                <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
                                <p>Donec id elit non mi porta gravida at eget metus.</p>
                            </td>
                        </tr>
                        <tr>
                            <th>Malesuada porta</th>
                            <td colSpan="2">Etiam porta sem malesuada magna mollis euismod.</td>
                        </tr>
                        <tr>
                            <th>Truncated term is trunc...</th>
                            <td colSpan="2">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut <br/>fermentum massa justo sit amet risus.</td>
                        </tr>
                        <tr>
                            <th>Nesting</th>
                            <th>Nested definition list</th>
                            <td>Aenean posuere, tortor sed cursus feugiat, nunc <br/>augue blandit nunc.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Typography;