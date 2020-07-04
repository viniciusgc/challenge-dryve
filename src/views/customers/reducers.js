export const initialState = {
  customers: [
    {
      name: "Paulo Henrique Mattos",
      type: "client",
      phone: "(16) 99653-8899",
      email: "ph.mattos@gmail.com",
    },
    {
      name: "Juliana Martins Silva",
      type: "client",
      phone: "(16) 98819-3112",
      email: "jumartins.silva@hotmail.com",
    },
    {
      name: "Luís Rocha",
      type: "client",
      phone: "(16) 99776-9290",
      email: "luisrocha@yahoo.com.br",
    },
    {
      name: "Adilson Vieira Antunes",
      type: "lead",
      phone: "(16) 996664-0187",
      email: "a.vieira@uol.com.br",
    },
    {
      name: "Felipe Alves",
      type: "lead",
      phone: "(16) 99660-7765",
      email: "felipe_alves@hotmail.com",
    },
    {
      name: "Roberta Viana",
      type: "client",
      phone: "(16) 99765-2233",
      email: "robertavianna@gmail.com",
    },
    {
      name: "Silvia Pereira",
      type: "client",
      phone: "(16) 99642-8271",
      email: "silva.pereira@outlook.com",
    },
    {
      name: "Eduardo Oliveira",
      type: "client",
      phone: "(16) 99872-3254",
      email: "eduoliveira@hotmail.com",
    },
    {
      name: "Maria Antônia Silva Santos",
      type: "client",
      phone: "(16) 99443-9986",
      email: "maria.ss@uol.com.br",
    },
    {
      name: "Rodrigo Ribeiro Costa",
      type: "client",
      phone: "(16) 99876-0012",
      email: "rrc@gmail.com",
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
