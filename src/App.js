import Directory from './components/directory/directory.component';

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'hats',
      // imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      imageUrl:
        'https://images.unsplash.com/photo-1542529727-24cb357c57d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 2,
      title: 'jackets',
      // imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      imageUrl:
        'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8amFja2V0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 3,
      title: 'sneakers',
      // imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      imageUrl:
        'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c25lYWtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 4,
      title: 'women',
      // imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      imageUrl:
        'https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 5,
      title: 'men',
      // imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      imageUrl:
        'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
  ];

  return <Directory categories={categories} />;
};

export default App;
