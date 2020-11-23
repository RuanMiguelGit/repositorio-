const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
//   const customerInfo = (order) => {
//     // Adicione abaixo as informações necessárias.
//     // primeiro se busca por todas as variaveis pelo método normal 

//     const nameP = Object.keys(order)[0] // name
//     const Cname = Object.values(order)[0]// Rafael 
//     const phoneP= Object.keys(order)[1] //adress
//     const Cphone = order.phoneNumber // 12313213
//     const AdressesStreet = order.address.street
//     const AdressesNumber = order.address.number
//     const AdressesApartment = order.address.apartment
//     const dPerson = (order.order.delivery.deliveryPerson)
//     const DpersonWithObjectV = Object.values(order.order.delivery)[0]// Rafael 
//     const Introduction =      
//     `Olá ${DpersonWithObjectV}
//     Entrega para: ${Cname} Telefone: ${Cphone}
//     Endereço; ${AdressesStreet}, ${AdressesNumber}, Apartamento : ${AdressesApartment} `
//     return Introduction
//   }

//  console.log(customerInfo(order));

  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    const newOder = Object.assign({}, order)
    newOder.name = "Luiz Silva"
    const Nname = newOder.name
    newOder.order.pizza = "muzarrela"
    const Pizza = newOder.order.pizza
    newOder.payment.total =  50
    const payment = newOder.payment.total
    const drinkss = newOder.order.drinks.coke.type

    const Int = `Olá ${Nname}, o total do seu pedido de ${Pizza}, e ${drinkss} é de ${payment}`


    // const NNPizaa = newOder.oder.pizza ='Muzarella'
    return Int
  }
  

  console.log(orderModifier(order));