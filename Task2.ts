class Contact {
    name: string;
    email: string;
    phone: string;
    group: string;

    constructor(name: string, email: string, phone: string , group: string) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.group = group;
    }
}
class AddressBook {
    contacts: Array<Contact> = [];

    addContact(contact: Contact) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(contact.email)) {
            throw new Error("Invalid email format");
        }

        // Name validation (example - check for empty name)
        if (!contact.name || contact.name.trim() === "") {
            throw new Error("Name cannot be empty");
        }


        this.contacts.push(contact);
    }

    findContactByName(name: string): Contact | undefined {
        return this.contacts.find((contact) => contact.name === name);
    }
    filterByGroup(group: string): Contact[] {
        return this.contacts.filter((contact) => contact.group === group);
    }

    sortByName(): void {
        this.contacts.sort((a, b) => a.name.localeCompare(b.name));
    }

    searchContacts(searchTerm: string) {
        const normalizedSearchTerm = searchTerm.toLowerCase();
        return this.contacts.filter((contact) =>
            contact.name.toLowerCase().includes(normalizedSearchTerm)
        );
    }
    printContacts() {
        for (const contact of this.contacts) {
            console.log(`Name: ${contact.name}`);
            console.log(`Email: ${contact.email}`);
            console.log(`Phone: ${contact.phone}`);
            console.log(`Group: ${contact.group}`);
            console.log("-----");
        }
    }
}

const addressBook = new AddressBook();

const contact1 = new Contact("John Doe", "johndoe@example.com", "123-456-7890" , "student");
const contact2 = new Contact("Alice Smith", "alice.smith@invalid", "456-789-0123", "student"); // Invalid email
const contact3 = new Contact("", "valid@email.com", "789-012-3456",""); // Empty name
const contact4 = new Contact("Ahmed mh", "ahmed@example.com", "773-952-0000","graduated");
const contact5 = new Contact("Ali", "ali@example.com", "647-952-8520","student");
const contact6 = new Contact("somar", "somar@example.com", "682-417-7136","graduated");
const contact7 = new Contact("rama", "rama@example.com", "145-963-8420","graduated");

addressBook.addContact(contact1);

/*
we need to add try and catch for each contact separately because when we 
use try the execution of the rest of block breaks upon the first error,
but to save time ,i only add them to the contacs that conation errors .
*/
try {
    addressBook.addContact(contact2); // This will throw an error (invalid email)
} catch (error: any) {
    console.error("Error adding contact:", error.message);
}
try {
    addressBook.addContact(contact3); // This will throw an error (empty name)
} catch (error: any) {
    console.error("Error adding contact:", error.message);
}
addressBook.addContact(contact4);
addressBook.addContact(contact5);
addressBook.addContact(contact6);
addressBook.addContact(contact7);


console.log("Contacts:");
addressBook.printContacts();

// Example usage of searchResults function
const searchResults = addressBook.searchContacts("john");
console.log("Search results (name containing 'john'):");
searchResults.forEach((contact) => console.log(`  - ${contact.name}`));

// Example usage of findContactByName  function
const findContacts = addressBook.findContactByName("Ahmed mh");
console.log("Search results (name is 'Ahmed'):");
if (findContacts) {
    console.log(`Name: ${findContacts.name}`);
    console.log(`Email: ${findContacts.email}`);
    console.log(`Phone: ${findContacts.phone}`);
    console.log(`Group: ${findContacts.group}`);
    console.log("-----");
} else {
    console.log("No contacts found")
}

// Example usage of sortByName  function
console.log("Print All Contact After Sort:");
console.log("****************")
addressBook.sortByName();
addressBook.printContacts();
console.log("****************")

// Example usage of filterByGroup function
console.log("Print All Contact thats Group By Graduated :");
console.log("****************") 
console.log(addressBook.filterByGroup("graduated"));
console.log("****************")