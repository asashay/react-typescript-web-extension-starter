/**
 * Component that renders buttons to scroll to the top and bottom of the page
 */
export function Scroller(props: {
    onClickScrollTop: () => void;
    onClickScrollBottom: () => void;
}) {
    return (
        <div >
            <button
                data-testid="scroll-to-top"
                onClick={() => props.onClickScrollTop()}
            >
                Scroll To Top
            </button>
            <button
                data-testid="scroll-to-bottom"
                onClick={() => props.onClickScrollBottom()}
            >
                Scroll To Bottom
            </button>
        </div>
    );
}
