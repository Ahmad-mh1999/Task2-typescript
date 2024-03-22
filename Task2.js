var Contact = /** @class */ (function () {
    function Contact(name, email, phone, group) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.group = group;
    }
    return Contact;
}());
var AddressBook = /** @class */ (function () {
    function AddressBook() {
        this.contacts = [];
    }
    AddressBook.prototype.addContact = function (contact) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(contact.email)) {
            throw new Error("Invalid email format");
        }
        // Name validation (example - check for empty name)
        if (!contact.name || contact.name.trim() === "") {
            throw new Error("Name cannot be empty");
        }
        this.contacts.push(contact);
    };
    AddressBook.prototype.findContactByName = function (name) {
        return this.contacts.find(function (contact) { return contact.name === name; });
    };
    AddressBook.prototype.filterByGroup = function (group) {
        return this.contacts.filter(function (contact) { return contact.group === group; });
    };
    AddressBook.prototype.sortByName = function () {
        this.contacts.sort(function (a, b) { return a.name.localeCompare(b.name); });
    };
    AddressBook.prototype.searchContacts = function (searchTerm) {
        var normalizedSearchTerm = searchTerm.toLowerCase();
        return this.contacts.filter(function (contact) {
            return contact.name.toLowerCase().includes(normalizedSearchTerm);
        });
    };
    AddressBook.prototype.printContacts = function () {
        for (var _i = 0, _a = this.contacts; _i < _a.length; _i++) {
            var contact = _a[_i];
            console.log("Name: ".concat(contact.name));
            console.log("Email: ".concat(contact.email));
            console.log("Phone: ".concat(contact.phone));
            console.log("Group: ".concat(contact.group));
            console.log("-----");
        }
    };
    return AddressBook;
}());
var addressBook = new AddressBook();
var contact1 = new Contact("John Doe", "johndoe@example.com", "123-456-7890", "student");
var contact2 = new Contact("Alice Smith", "alice.smith@invalid", "456-789-0123", "student"); // Invalid email
var contact3 = new Contact("", "valid@email.com", "789-012-3456", ""); // Empty name
var contact4 = new Contact("Ahmed mh", "ahmed@example.com", "773-952-0000", "graduated");
var contact5 = new Contact("Ali", "ali@example.com", "647-952-8520", "student");
var contact6 = new Contact("somar", "somar@example.com", "682-417-7136", "graduated");
var contact7 = new Contact("rama", "rama@example.com", "145-963-8420", "graduated");
addressBook.addContact(contact1);
/*
we need to add try and catch for each contact separately because when we
use try the execution of the rest of block breaks upon the first error,
but to save time ,i only add them to the contacs that conation errors .
*/
try {
    addressBook.addContact(contact2); // This will throw an error (invalid email)
}
catch (error) {
    console.error("Error adding contact:", error.message);
}
try {
    addressBook.addContact(contact3); // This will throw an error (empty name)
}
catch (error) {
    console.error("Error adding contact:", error.message);
}
addressBook.addContact(contact4);
addressBook.addContact(contact5);
addressBook.addContact(contact6);
addressBook.addContact(contact7);
console.log("Contacts:");
addressBook.printContacts();
// Example usage of searchResults function
var searchResults = addressBook.searchContacts("john");
console.log("Search results (name containing 'john'):");
searchResults.forEach(function (contact) { return console.log("  - ".concat(contact.name)); });
// Example usage of findContactByName  function
var findContacts = addressBook.findContactByName("Ahmed mh");
console.log("Search results (name is 'Ahmed'):");
if (findContacts) {
    console.log("Name: ".concat(findContacts.name));
    console.log("Email: ".concat(findContacts.email));
    console.log("Phone: ".concat(findContacts.phone));
    console.log("Group: ".concat(findContacts.group));
    console.log("-----");
}
else {
    console.log("No contacts found");
}
// Example usage of sortByName  function
console.log("Print All Contact After Sort:");
console.log("****************");
addressBook.sortByName();
addressBook.printContacts();
console.log("****************");
// Example usage of filterByGroup function
console.log("Print All Contact thats Group By Graduated :");
console.log("****************");
console.log(addressBook.filterByGroup("graduated"));
console.log("****************");
