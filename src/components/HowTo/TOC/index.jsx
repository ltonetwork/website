import React from 'react';

class TOC extends React.Component {
    scrollTo = (id) => {
        console.log(id);
        window.scrollTo({
            top: document.getElementById(id).offsetTop - 50,
            behavior: 'smooth',
        });
    };

    render() {
        return (
            <section id="howTo--TOC" className="toc d-flex justify-content-center mb-50 flex-wrap">
                <button onClick={() => this.scrollTo('howTo--FAQ')}>FAQ</button>
                <button onClick={() => this.scrollTo('howTo--NodeOperator')}>Node Operator</button>
                <button onClick={() => this.scrollTo('howTo--Buy')}>Buy LTO</button>
                <button onClick={() => this.scrollTo('howTo--Exchanges')}>Exchanges</button>
                <button onClick={() => this.scrollTo('howTo--Whitepapers')}>Whitepapers</button>
            </section>
        );
    }
};

export default TOC;