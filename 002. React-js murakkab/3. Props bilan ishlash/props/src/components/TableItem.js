let count = 0;
function TableItem(props){
    return (
        <>
            <tbody>
                <tr className='align-items-center'>
                    <th scope="row">{count++}</th>
                    <td>{props.pl}</td>
                    <td>{props.stack}</td>
                    <td><button className='btn btn-outline-danger'>Delete</button></td>
                </tr>
            </tbody>
        </>
    )
}
export default TableItem