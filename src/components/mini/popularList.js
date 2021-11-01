

export default function PopList(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) =>
    <li key={index} onClick={props.clickFunc}>{val}</li>
  );
  return <ul className='pop-list'>{listItems}</ul>;
}
