
function ItemPeople(props) {
	const e=props.people;
  return (
  	<>
		<div className="Item" key={e.id}>
			<div className="img_item">
					<img src={e.image} alt="no image" />
			</div>
			<div className="thongtin_item">
					<div className="nameItem">
						{e.name}
					</div>
					<div className="years">
						{e.age}
					</div>
			</div>

		</div>
  				

  		
  	</>
  );
}

export default ItemPeople;
