// Observer class
class PhoneNumberObserver {
  update(phoneNumber) {
    console.log(`Dialing: ${phoneNumber}`);
  }
}

class SpecialPhoneNumberObserver {
  update(phoneNumber) {
    console.log(`Now Dialing: 2347023232`);
  }
}

class Telephone {
  constructor() {
    this.phoneNumbers = [];
    this.observers = [];
  }

  addPhoneNumber(phoneNumber) {
    this.phoneNumbers.push(phoneNumber);
  }

  removePhoneNumber(phoneNumber) {
    const index = this.phoneNumbers.indexOf(phoneNumber);
    if (index !== -1) {
      this.phoneNumbers.splice(index, 1);
    }
  }

  // Method to dial a phone number and notify observers
  dialPhoneNumber(phoneNumber) {
    if (this.phoneNumbers.includes(phoneNumber)) {
      this.notifyObservers(phoneNumber);
    } else {
      console.log(`Phone number ${phoneNumber} not found.`);
    }
  }

  // Method to add an observer
  addObserver(observer) {
    this.observers.push(observer);
  }

  // Method to remove an observer
  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  // Method for notifying all of the observers
  notifyObservers(phoneNumber) {
    this.observers.forEach((observer) => {
      observer.update(phoneNumber);
    });
  }
}

//example method
const telephone = new Telephone();

const observer1 = new PhoneNumberObserver();
const observer2 = new SpecialPhoneNumberObserver();

telephone.addObserver(observer1);
telephone.addObserver(observer2);

telephone.addPhoneNumber("1234567890");
telephone.addPhoneNumber("2345678901");

telephone.dialPhoneNumber("1234567890");
telephone.dialPhoneNumber("2345678901");
telephone.dialPhoneNumber("9999999999");

telephone.removePhoneNumber("1234567890");

telephone.dialPhoneNumber("1234567890");
