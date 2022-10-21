import useFetchData from "../hooks/useFetchData";

export default function Shop() {
  const { storeData } = useFetchData();

  const allProducts = storeData.map((item) => (
    <div key={item.id}>
      <h3>{item.title}</h3>
      <img src={item.image} alt={item.title} />
      <p>{item.description}</p>
      <p>{item.price}</p>
    </div>
  ));

  return <div className="products-container">{allProducts}</div>;
}
