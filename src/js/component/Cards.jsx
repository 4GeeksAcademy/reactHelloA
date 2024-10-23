import React from "react"
import Button from "./Button"
import Card from "./Card"

const Cards = () => {


  return (
    <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-12" >
        <Card 
          src="https://cdn1.epicgames.com/offer/0c40923dd1174a768f732a3b013dcff2/EGS_TheLastofUsPartI_NaughtyDogLLC_S1_2560x1440-3659b5fe340f8fc073257975b20b7f84"
          title="The last of us"
          text="The last of us Part I nos lleva a un futuro cercano en el que la Tierra había sido devastada por un hongo que transforma a las personas en peligrosísimos zombis."
        />
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12" >
        <Card
          src="https://cdn1.epicgames.com/offer/0c40923dd1174a768f732a3b013dcff2/EGS_TheLastofUsPartI_NaughtyDogLLC_S1_2560x1440-3659b5fe340f8fc073257975b20b7f84"
          title="The last of us"
          text="The last of us Part I nos lleva a un futuro cercano en el que la Tierra había sido devastada por un hongo que transforma a las personas en peligrosísimos zombis."
        />
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12" >
        <Card
          src="https://cdn1.epicgames.com/offer/0c40923dd1174a768f732a3b013dcff2/EGS_TheLastofUsPartI_NaughtyDogLLC_S1_2560x1440-3659b5fe340f8fc073257975b20b7f84"
          title="The last of us"
          text="The last of us Part I nos lleva a un futuro cercano en el que la Tierra había sido devastada por un hongo que transforma a las personas en peligrosísimos zombis."
        />
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12" >
        <Card
          src="https://cdn1.epicgames.com/offer/0c40923dd1174a768f732a3b013dcff2/EGS_TheLastofUsPartI_NaughtyDogLLC_S1_2560x1440-3659b5fe340f8fc073257975b20b7f84"
          title="The last of us"
          text="The last of us Part I nos lleva a un futuro cercano en el que la Tierra había sido devastada por un hongo que transforma a las personas en peligrosísimos zombis."
        />
      </div>
    </div>
    </div>

    // <div className="cards">
    //   <div className="row row-cols-1 row-cols-md-3 g-4">

    //     <card text="The last of us Part I nos lleva a un futuro cercano en el que la Tierra había sido devastada por un hongo que transforma a las personas en peligrosísimos zombis. "/>

    //     {/* <div className="col-lg-3 col-md-6 col-sm-12">
    //       <div className="card h-100">
    //         <img src="https://cdn1.epicgames.com/offer/0c40923dd1174a768f732a3b013dcff2/EGS_TheLastofUsPartI_NaughtyDogLLC_S1_2560x1440-3659b5fe340f8fc073257975b20b7f84" className="card-img-top" alt="..." />
    //         <div className="card-body">
    //           <h5 className="card-title">Card title</h5>
    //           <p className="card-text">The last of us Part I nos lleva a un futuro cercano en el que la Tierra había sido devastada por un hongo que transforma a las personas en peligrosísimos "zombis". </p> 
    //           <Button text= "Ir a Steam" url="https://store.steampowered.com/app/1888930/The_Last_of_Us_Parte_I/"/>
    //           <Button text= "Ir a HBO" url=""/>
    //         </div>
    //       </div>
    //     </div> */}
    //     <div className="col-lg-3 col-md-6 col-sm-12">
    //       <div className="card h-100">
    //         <img src="https://image.api.playstation.com/vulcan/ap/rnd/202311/1717/fb1aa189abceb083f190ec45f84a6b021b116e7afbd44672.jpg" className="card-img-top" alt="..." />
    //         <div className="card-body">
    //           <h5 className="card-title">Card title</h5>
    //           <p className="card-text">The Last of Us parte II, el juego más ambicioso e impactante de Naughty Dog con el que vuelve a superarse. Una asombrosa aventura de acción con una historia tan desgarradora como inolvidable.</p>
    //           <Button text= "Ir a Steam"/>
    //           </div>
    //       </div>
    //     </div>
    //     <div className="col-lg-3 col-md-6 col-sm-12">
    //       <div className="card h-100">
    //         <img src="https://cdn1.epicgames.com/spt-assets/edaff839f0734d16bc89d2ddb1dc9339/steel-magnolia-15owu.jpg" className="card-img-top" alt="..." />
    //         <div className="card-body">
    //           <h5 className="card-title">Card title</h5>
    //           <p className="card-text">"Los dioses del Olimpo me han abandonado". Resulta irónico que estas fuesen las primeras palabras que escuchamos en God of War, una saga que puede presumir de estar en el Olimpo de la industria del videojuego desde que comenzó su andadura hace ya 17 años.</p>
    //           <Button/>
    //           </div>
    //       </div>
    //     </div>
    //     <div className="col-lg-3 col-md-6 col-sm-12">
    //       <div className="card h-100">
    //         <img src="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2420110/capsule_616x353.jpg?t=1725653368" className="card-img-top" alt="..." />
    //         <div className="card-body">
    //           <h5 className="card-title">Card title</h5>
    //           <p className="card-text">Aloy regresa con una nueva y espectacular aventura que mejora en todo a su predecesor para convertirse en uno de los mejores juegos de mundo abierto hasta la fecha.</p>
    //           <Button/>
    //           </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Cards