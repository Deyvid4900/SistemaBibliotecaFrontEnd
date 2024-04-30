function CardHome(props: any) {
  return (
    <div className="rounded d-flex justify-content-center align-items-center px-1" style={{minWidth:"240px",widows:'auto', height:"40px",background:props.cor }}>
      <h5 className="text-white m-0">{props.title}: {props.content}</h5>
    </div>
  )
}

export default CardHome
