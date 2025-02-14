import { listContacts, getContactById, removeContact, addContact } from "./contacts.js";
import { program } from "commander";

program
    .option("-a, --action <type>", "choose action")
    .option("-i, --id <type>", "user id")
    .option("-n, --name <type>", "user name")
    .option("-e, --email <type>", "user email")
    .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case "list":
            const contacts = await listContacts();
            console.table(contacts);
            break;

        case "get":
            const contact = await getContactById(id);
            console.log(contact ? contact : "Not found");
            break;

        case "add":
            const newContact = await addContact(name, email, phone);
            console.log("New contact added:", newContact);
            break;

        case "remove":
            const deletedContact = await removeContact(id);
            console.log(deletedContact ? "Deleted contact:" : "Contact not found", deletedContact);
            break;

        default:
            console.warn("\x1B[31m Unknown action type!");
    }
}

invokeAction(options);