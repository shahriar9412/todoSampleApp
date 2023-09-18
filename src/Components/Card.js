const date= new Date();
const dateName=date.getDate();
const month=date.getMonth()+1;
const year=date.getFullYear();
function Card(props){
  const {titleText, descText} = props;
  return  <div className="card">
            <h2 className="title">{titleText} </h2>
            <h3 className="desc">{descText} </h3>
            <p className="date">{dateName+"/"+month+"/"+year}</p>
          </div>
}
export default Card;
