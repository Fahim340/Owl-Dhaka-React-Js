<Carousel>
<Card>{items.map(item => <div key={item.id}>{item.title}</div>)}</Card>
</Carousel>
 {items.map(item => <div key={item.title}>{item.price}</div>)}
 <p className="legend">{ item.price }</p>