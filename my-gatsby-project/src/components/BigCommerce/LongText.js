

export const LongText = (props) => { 
    state = { showAll: false }
    showMore = () => this.setState({showAll: true}); 
    showLess = () => this.setState({showAll: false});

        const {content, limit} = this.props;
        const {showAll} = this.state;
        if(content.length<=limit) {
            // there is nothing more to show
            return <div>{content}<div>
        }
        if(showAll) {
            // We show the extended text and a link to reduce it
            return (
            <div>
                {content}
                <a onClick={this.showLess}>Read less</a>
            </div>

        // In the final case, we show a text with ellipsis and a `Read more` button
        const toShow = content.substring(0,limit)+"...";
        return <div>
            {toShow}
            <a onClick={this.showMore}>Read more</a>
        </div>
    )
}