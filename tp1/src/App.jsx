import Cards from './components/cards/Cards'

import './App.css'

function App() {

let Garry = {
  firstname: 'Garry',
  lastname: 'Do',
  picture: 'garry.jpg',
  desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
  socials: [
    {
      url: 'https://www.instagram.com/',
      name: 'Instagram'
    },
    {
      url: 'https://github.com',
      name: 'Github'
    }
  ]
}

let Harry = {
  firstname: 'Harry',
  lastname: 'Smith',
  desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
  socials: [
    {
      url: 'https://www.x.com/',
      name: 'Twitter'
    },
    {
      url: 'https://meta.com',
      name: 'Meta'
    }
  ]
}

let Larry = {
  firstname: 'Larry',
  lastname: 'Johnson',
  picture: 'garry.jpg',
  mail: 'larry.johnson@but1.mmi',
  desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
  socials: [
    {
      url: 'https://github.com',
      name: 'Github'
    }
  ]
}

let Barry = {
  firstname: 'Barry',
  lastname: 'Allen',
  picture: 'garry.jpg',
  mail: 'barry.allen@but1.mmi',
  desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
  socials: [
    {
      url: 'https://www.instagram.com/',
      name: 'Instagram'
    }
  ]
}

let Carrie = {
  firstname: 'Carrie',
  lastname: 'Brown',
  picture: 'garry.jpg',
  mail: 'carrie.brown@but1.mmi',
  desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
  socials: [
    {
      url: 'https://www.instagram.com/',
      name: 'Instagram'
    },
    {
      url: 'https://github.com',
      name: 'Github'
    },
    {
      url: 'https://meta.com',
      name: 'Meta'
    }
  ]
}

let Mary = {
  firstname: 'Mary',
  lastname: 'Jane',
  mail: 'mary.jane@but1.mmi',
  desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
  socials: [
    {
      url: 'https://www.instagram.com/',
      name: 'Instagram'
    },
    {
      url: 'https://github.com',
      name: 'Github'
    }
  ]
}

let Perry = {
  firstname: 'Perry',
  lastname: 'White',
  picture: 'garry.jpg',
  desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
  socials: [
    {
      url: 'https://meta.com',
      name: 'Meta'
    },
    {
      url: 'https://github.com',
      name: 'Github'
    }
  ]
}

let Terry = {
  firstname: 'Terry',
  lastname: 'Crews',
  mail: 'terry.crews@but1.mmi',
  desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
  socials: [
    {
      url: 'https://www.instagram.com/',
      name: 'Instagram'
    },
    {
      url: 'https://x.com',
      name: 'Twitter'
    }
  ]
}

  let somebodies = [Garry, Harry, Larry, Barry, Carrie, Mary, Perry, Terry]

  return (
    <Cards somebodies={somebodies}/>
  )
}

export default App
