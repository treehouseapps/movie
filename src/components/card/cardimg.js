const Item = (props) => {
    const data = props.data
    return (
        <div className="alignimg">
            {data.map((item) => (
                <div key={item.id}>
                    <img src={item.pic} alt="" />
                </div>
            ))}
        </div>
    );
}
export default Item;