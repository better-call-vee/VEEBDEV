const form = e.target;  // Getting the form element
const formData = new FormData(form); // Creating FormData from form

// Converts FormData entries to a plain JavaScript object
const newCoffee = Object.fromEntries(formData.entries());

fetch('https://localhost:3000/coffees', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newCoffee)
});

/*
Once the form is submitted, your server-side console.log(newCoffee) will show:

{
    name: "a",
    quantity: "a",
    supplier: "a",
    taste: "f",
    category: "f",
    details: "f",
    photo: "a"
  }

*/

//Backend
const coffeesCollection = client.db('coffeeDB').collection('coffees');

app.post('/coffees', async (req, res) => {
    const newCoffee = req.body;  // Receives parsed JSON data
    console.log(newCoffee);      // Logs it to your server console
    const result = await coffeesCollection.insertOne(newCoffee);
    res.send(result);            // Sends back MongoDB insert result
});
