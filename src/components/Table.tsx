/* eslint-disable @typescript-eslint/no-explicit-any */

const Table = (props: any ) => {
    // console.log(props);
    // console.log(props.wallet_names)
    return (
        <table>
            props.map(function (data) {
                <tr>{props.wallet_names}</tr>
            })
        </table>
    )
}

export default Table;