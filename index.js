const names = ['Dian Puspita Sari', 'Impact Byte', 'Komodo']

const showNames = names => {
    for(let i = 0; i < names.length; i++) {
        const name = names[i]
        console.log(`[${i + 1}] ${name}`)
    }
}

showNames(names)

const nama = ['Dian Puspita Sari', 'Impact Byte', 'Komodo']

const filterNama = (nama, minimumLength) => {
    let newNames = []

    for(let i = 0; i < nama.length; i++) {
        const nama1 = nama[i]
        i
        if(nama1.length >= minimumLength) {
            newNames.push(nama1)
        }
    }

    return newNames
}

const filteredNama = filterNama(nama, 7)

showNames(filteredNama)


const myContacts = [
    {
      id: 1,
      name: 'Dian Puspita Sari',
      phone: '0813-94533888',
      email: 'dianpuspitasari171586@gmail.com',
      favorite: true,
      rating: 9,
      tags: ['popular', 'cool']
    },
    {
      id: 2,
      name: 'Betty Brave',
      phone: '+62 812 242424',
      email: 'betty@braverian.com'
    },
    {
      id: 3,
      name: 'Gamma Gacurio',
      phone: '+63 813 363636',
      email: 'gamma@gacurio.dev'
    }
  ]

  const showContacts = contacts => {
      for(let i = 0; i < contacts.length; i++){
          const contact = contacts[i]
          console.log(`[${contact.id}] ${contact.name} (${contact.phone})  <${contact.email}>`)
      }
  }
  
  showContacts(myContacts)

  const filterContacts = (contacts, minimumNameLength) => {
      let newContacts = []

      for(let i = 0; i < contacts.length; i++) {
          const contact = contacts[i]

          if(contact.name.length >= minimumNameLength) {
              newContacts.push(contact)
          }
      }

      return newContacts
  }

  const filteredContacts = filterContacts(myContacts,12)

  showContacts(filteredContacts)