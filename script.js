function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
  }

  const options = {
    starters: ['Jiaozi (Gyoza)', 'Caprese Salad', 'Grilled Lobster Tails', 'Somosa', 'Tteokbooki', 'Salt & Pepper Squid', 'Prawn Pil Pil', 'Thai Fishcake', 'Falafel', 'Manti'],
    mains: ['Chili Con Carne', 'Mac & Cheese', 'Beef Stew', 'Margherita Pizza', 'Steak', 'Tandoori Chicken', 'Pad Thai', 'Spinach Calzone', 'Poke Bowl', 'Fajitas'],
    desserts: ['Shrikand', 'Baklava', 'Lime Cheesecake', 'Raspberry Brûlée', 'Bungeoppang', 'Churros', 'Sticky Toffee Pudding', 'Ice Cream Sunday', 'Eclairs', 'Beignet']
  }
  
  let nextLunch = []

  for(let item in options) {
    let foodIdx = generateRandomNumber(options[item].length)
  
    switch(item) {
      case 'starters':
        nextLunch.push(`Your starter for today is ${options[item][foodIdx]}.`)
        break
      case 'mains':
        nextLunch.push(`Your main for today is ${options[item][foodIdx]}.`)
        break
      case 'desserts':
        nextLunch.push(`Your dessert for today is ${options[item][foodIdx]}.`)
        break
      default:
        nextLunch.push('Error!')
    }
  }

  function tomorrowLunch(future) {

    const display = nextLunch.join('\n')
    console.log(display)
  }
  
  tomorrowLunch(nextLunch);