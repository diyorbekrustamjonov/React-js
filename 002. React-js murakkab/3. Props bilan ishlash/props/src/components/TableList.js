import TableHead from "./TableHead";
import TableItem from "./TableItem";

function TableList({posts, title}){
    const style = {
        position: 'relative',
        display: 'flex',
    }
    console.log(posts);
    return (
        <>
                <h3 className='text-center'>{title}</h3>
                <table className="table table-striped">
                    <TableHead />
                    {posts.map((post, index) =>(
                    <TableItem key={post.id} pl={post.pl} stack={post.stack} />
                    ))}
                </table>
        </>
    )
}

export default TableList;