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
  
