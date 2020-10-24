let mainName = 'Party spartans'

const event = {
  name: 'Birthday Party',
  guestList: ['Alex', 'Gosha', 'Nadya', 'Olya'],
  printGuestList() {
    console.log(`Gudst list for ${this.name}`);
    this.guestList.forEach(guest => {
      console.log(`${guest} is attending ${this.name}`);
    })
  }
}
event.printGuestList();