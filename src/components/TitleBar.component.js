/**
 * Implements the title bar with the bride and groom names and the wedding date.
 *
 * id (string): Identifier for the element
 */
import React from 'react';

class TitleBar extends React.Component {

    render() {
        return (
            <header id={this.props.id} className="titlebar">

                <span className="bride-name">Megan</span>
                <span className="groom-name">
                    <span>&amp;</span> Mike
                </span>
                <div className="wedding-date">26<sup>th</sup> MAY, 2019</div>
            </header>
        );
    }
}

export default TitleBar;
