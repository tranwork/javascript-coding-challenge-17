//Task 1 – Create Customer Class
class Customer {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.purchaseHistory = [];
      console.log(`New customer created: ${this.name}`);
    }
  
    addPurchase(amount) {
      this.purchaseHistory.push(amount);
    }
  
    getTotalSpent() {
      return this.purchaseHistory.reduce((total, amt) => total + amt, 0);
    }
  }
  
  // Example usage
  const customer1 = new Customer("Jenny", "jenny@email.com");
  customer1.addPurchase(200);
  customer1.addPurchase(150);
  console.log(`${customer1.name} has spent $${customer1.getTotalSpent()}`);

//Task 2 – Create SalesRep Class
class SalesRep {
    constructor(name) {
      this.name = name;
      this.clients = [];
    }
  
    addClient(customer) {
      this.clients.push(customer);
    }
  
    getClientTotal(name) {
      const client = this.clients.find(c => c.name === name);
      return client ? client.getTotalSpent() : 0;
    }
  }
  
  // Usage
  const rep = new SalesRep("Jaden");
  rep.addClient(customer1);
  console.log(`Total spent by ${customer1.name}: $${rep.getClientTotal("Jenny")}`);
  
